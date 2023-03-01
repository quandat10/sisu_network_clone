"use client"

import React, {useEffect, useState} from "react";

import dictionary from "dictionary.json"

const colors = [
  "#000000",
  "#FAEBD7",
  "#00FFFF",
  "#7FFFD4",
  "#A52A2A",
  "#DEB887",
  "#5F9EA0",
  "#7FFF00",
  "#D2691E",
  "#FF7F50",
  "#6495ED",
  "#DC143C",
  "#00FFFF",
  "#00008B",
  "#008B8B",
  "#B8860B",
]

enum KeyStore {
  ENTER = "Enter",
  SPACE = " ",
  ARROW_LEFT = "ArrowLeft",
  ARROW_RIGHT = "ArrowRight",
  ARROW_UP = "ArrowUp",
  ARROW_DOWN = "ArrowDown",
  BACK_SPACE = "Backspace",
  ESCAPE = "Escape",
  BOLD = "B",
  STRIKE = "STRIKE"
}


const getCaretCoordinates = () => {
  let x = 0, y = 0
  const isSupported = typeof window.getSelection !== "undefined"
  if (isSupported) {
    const selection = window.getSelection()
    if (selection && selection.rangeCount !== 0) {
      const range = selection.getRangeAt(0).cloneRange()
      range.collapse(true)
      const rect = range.getClientRects()[0]
      if (rect) {
        x = rect.left
        y = rect.top
      }
    }
  }
  return {x, y}
}

const Editor = () => {
  const [text, setText] = useState<string>("")
  const [param, setParam] = useState<string>("")
  const [rsSearch, setRsSearch] = useState<string[]>([]);
  const [selectIndex, setSelectIndex] = useState<number>(-1)
  const [hideTooltip, setHideTooltip] = useState<boolean>(false)
  const [showColor, setShowColor] = useState<boolean>(false)
  const [boldActive, setBoldActive] = useState<boolean>(false)
  const [strikeActive, setStrikeActive] = useState<boolean>(false)

  const toggleTooltip = (event: React.KeyboardEvent<HTMLDivElement>, contentEditable: HTMLElement | null) => {
    const tooltip = document.getElementById("tooltip");
    // @ts-ignore
    if (contentEditable!.contains(event.target)) {
      const {x, y} = getCaretCoordinates()
      tooltip!.setAttribute("aria-hidden", "false");
      tooltip!.setAttribute(
        "style",
        `display: inline-block; left: ${x - 50}px; top: ${y - 100}px`
      );
    } else {
      tooltip!.setAttribute("aria-hidden", "true");
      tooltip!.setAttribute("style", "display: none;");
    }
  }

  // useEffect(() => {
  //   console.log("text",text)
  //   let arr = text.split(" ")
  //   const query = arr[arr.length - 1].trim()
  //   console.log("query",query)
  //   console.log("arr",arr)
  //   setParam(query)
  //
  //   if (query.length >= 3) {
  //     const rs = dictionary.filter((dictionary) =>
  //       dictionary
  //         .toLowerCase()
  //         .replace(/\s+/g, "")
  //         .includes(query.toLowerCase().replace(/\s+/g, ""))
  //     )
  //
  //     setRsSearch(rs)
  //   } else {
  //     setRsSearch([])
  //   }
  //
  // }, [text])

  const focusInput = (text: string, value?: string) => {
    const editable = document.getElementById("contenteditable");
    document.execCommand(text, false, value ?? '')
    editable!.focus()
    if (text === "bold") {
      setBoldActive(!boldActive)
    }

    if (text === "strikeThrough") {
      setStrikeActive(!strikeActive)
    }


  };

  const ItemRs = rsSearch.map((item, index) => (
    <li onMouseOver={(e) => {
      const idx = rsSearch.indexOf(e!.currentTarget!.textContent!)
      setSelectIndex(idx)
    }}
        onClick={(e) => onClick(e, index)} key={index}
        className={`${selectIndex === index ? "bg-gray-300 border rounded" : ""}  cursor-pointer p-[15px]`}>
      <span className="font-bold">{item}</span>
    </li>
  ))

  const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    setBoldActive(document.queryCommandState("bold"))
    setStrikeActive(document.queryCommandState("strikeThrough"))
    let arr = e.currentTarget.innerHTML
      .split("</b>")
      .join("")
      .split("</strike>")
      .join("")
      .split("<b>")
      .join("")
      .split("<strike>")
      .join("")
      .split(/\s/)
      .join("<br>")
      .split("<br>")
      .filter(Boolean)

    let query = arr[arr.length - 1]
    setParam(query)

    if (query && query.length >= 3) {
      const rs = dictionary.filter((dictionary) =>
        dictionary
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      )

      setRsSearch(rs)
    } else {
      setRsSearch([])
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    setHideTooltip(false)
    const editable = document.getElementById("contenteditable");
    toggleTooltip(e, editable)
    let current = selectIndex
    setSelectIndex(current)

    if (e.key === KeyStore.ARROW_UP) {
      if (!(param.length < 3 || rsSearch.length <= 0 || hideTooltip)) {
        e.preventDefault()
        e.stopPropagation()
        current -= 1;
        setSelectIndex(current)
        if (current < 0) {
          setSelectIndex(rsSearch.length - 1)
        }
      } else {
        setParam("")
        onMouseUp(e)
      }
    }

    if (e.key === KeyStore.ARROW_DOWN) {
      if (!(param.length < 3 || rsSearch.length <= 0 || hideTooltip)) {
        e.preventDefault()
        e.stopPropagation()
        current += 1;

        setSelectIndex(current)
        if (current >= rsSearch.length) {
          setSelectIndex(0)
        }
      } else {
        setHideTooltip(true)
        onMouseUp(e)
      }

    }

    if (e.key === KeyStore.SPACE) {
      setHideTooltip(true)
      setSelectIndex(-1)
    }

    if (e.key === KeyStore.ENTER) {

      if (rsSearch.length > 0 && selectIndex !== -1) {
        e.preventDefault()
        e.stopPropagation()
        const dicStr = rsSearch[current]
        const dicIndex = dictionary.indexOf(dicStr)
        const n = e.currentTarget.innerHTML.lastIndexOf(param)

        if (n >= 0) {
          e.currentTarget.innerHTML = e.currentTarget.innerHTML.substring(0, n) + dictionary[dicIndex];
        }

        editable!.focus()
        document.execCommand('selectAll', false, "");
        document!.getSelection()!.collapseToEnd();
        setHideTooltip(true)
        setSelectIndex(-1)
      }

      if (selectIndex === -1) {
        setHideTooltip(true)
      }
    }

    if (e.key === KeyStore.ESCAPE) {
      setHideTooltip(true)
    }

    if (e.key === KeyStore.ARROW_LEFT || e.key === KeyStore.ARROW_RIGHT) {
      setHideTooltip(true)
      onMouseUp(e)
    }

    if (e.key === KeyStore.BACK_SPACE) {
      if (text.length === 0) {
        e.preventDefault()
        e.stopPropagation()
      }
      setHideTooltip(true)
      onMouseUp(e)
    }
  }

  const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, current: number) => {
    const editable = document.getElementById("contenteditable");

    const dicStr = rsSearch[current]
    const dicIndex = dictionary.indexOf(dicStr)
    const n = editable!.innerHTML.lastIndexOf(param)
    if (n >= 0) {
      editable!.innerHTML = editable!.innerHTML.substring(0, n) + dictionary[dicIndex];
    }
    editable!.innerHTML
    editable!.focus()
    document.execCommand('selectAll', false, "");
    document!.getSelection()!.collapseToEnd();
    setHideTooltip(true)
    setSelectIndex(-1)
  }

  const ItemColor = colors.map((e, i) => (
    <button key={i} onClick={() => {
      focusInput("foreColor", e)
      setShowColor(!showColor)
    }} type="button"
            data-tooltip-target="tooltip-fullscreen"
            className="flex justify-center items-center w-2 h-2  text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 ">
      <div className="w-1 h-1" style={{backgroundColor: e}}></div>
    </button>
  ))

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>) => {
    const editable = document.getElementById("contenteditable");
    let rs = Cursor.getCurrentCursorPosition(editable!)

    let existB = false
    let existStrike = false

    if (rs.includes(KeyStore.STRIKE)) {
      existStrike = true
    }

    if (rs.includes(KeyStore.BOLD)) {
      existB = true
    }


    setBoldActive(existB)
    setStrikeActive(existStrike)
  }

  return (
    <div onClick={(e) => {
      setHideTooltip(true)
      e.stopPropagation()
      e.preventDefault()
      if (showColor) {
        setShowColor(!showColor)
      }
    }} className="min-h-screen flex-row justify-center justify-center mxs:px-[10px] mxs:py-[50px] xs:px-[100px]">
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
          <div className="flex items-center justify-between px-[3px] py-[2px] border-b">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x">
              <div className="p-0.5 flex items-center space-x-1 sm:pr-4">
                <button type="button" onClick={() => focusInput("bold")}
                        className={`px-0.5 py-[2px] ${boldActive ? "bg-gray-300" : ""}  text-black rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200`}>
                  <b>B</b>
                </button>
                <button type="button"
                        onClick={() => focusInput("strikeThrough")}
                        className={`px-0.5 py-[2px] ${strikeActive ? "bg-gray-300" : ""} text-black rounded cursor-pointer hover:text-gray-900 hover:bg-gray-200`}>
                  <s>s</s>
                </button>
                <button onClick={() => {
                  setShowColor(!showColor)
                }} type="button"
                        data-tooltip-target="tooltip-fullscreen"
                        className={`p-0.5 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-200`}>
                  <div className="w-1 h-1" style={{backgroundColor: "#000000"}}></div>
                </button>
                <div
                  className={`${showColor ? "" : "invisible"} absolute z-30 left-[200px] top-[320px]`}>
                  <div
                    className="w-[180px] h-[180px] absolute bg-white overflow-auto rounded-lg shadow-md z-10 p-1 border border-gray-300 text-gray-800 text-xs absolute bottom-full">
                    <div className="flex flex-wrap justify-center items-center">
                      {ItemColor}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => {
            document!.getElementById("contenteditable")!.focus()
          }} className=" cursor-text min-h-[500px] relative px-4 py-2 bg-white rounded-b-lg">
            <div
              onClick={e => e.preventDefault()}
              id="contenteditable"
              tabIndex={0}
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              onMouseUp={onMouseUp}
              onInput={(val) => {
                if (val.currentTarget.textContent!.length >= 0) {
                  setText(val.currentTarget.textContent ?? "")
                }
              }}
              className="inline-block relative focus:outline-0 block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0"
              contentEditable={true}/>
            <div id="tooltip"
                 className={`${(param && param.length < 3 || rsSearch.length <= 0 || hideTooltip) ? "invisible" : ""} absolute z-30`}>
              <div
                className="w-[200px] absolute bg-white overflow-auto rounded-lg shadow-md z-10 p-1 border border-gray-300 text-gray-800 text-xs absolute bottom-full">
                <ul>
                  {ItemRs}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="flex flex-col p-1 border border-gray-200 rounded-lg bg-gray-50">
        <p className="font-bold">Dictionary</p>
        <br/>
        <div className="w-full grid mxsm:grid-cols-3 fmd:grid-cols-4 grid-cols-5 justify-center items-center">
          {dictionary.map((e, i) => (
            <span className={"py-0.5"} key={i}>{e}</span>
          ))}
        </div>
      </div>

    </div>
  )
}

class Cursor {
  static getCurrentCursorPosition(parentElement: Node) {
    let selection = window.getSelection(),
      charCount = -1,
      node, rs = []

    if (selection!.focusNode) {
      if (Cursor._isChildOf(selection!.focusNode, parentElement)) {
        node = selection!.focusNode;
        charCount = selection!.focusOffset;

        while (node) {
          if (node === parentElement) {
            break;
          }

          if (node.previousSibling) {
            node = node.previousSibling;
            charCount += node.textContent!.length;
          } else {
            node = node.parentNode;

            if (node === null) {
              break;
            }

            if (node.nodeName === KeyStore.STRIKE || node.nodeName === KeyStore.BOLD || node.nodeName === "FONT") {
              rs.push(node.nodeName)
            }
          }
        }
      }
    }

    return rs
  }

  static _isChildOf(node: Node | null, parentElement: any) {
    while (node !== null) {
      if (node === parentElement) {
        return true;
      }
      node = node.parentNode;
    }

    return false;
  }
}

export default Editor