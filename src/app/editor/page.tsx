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


function getCaretCoordinates() {
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
  const [activeColor, setActiveColor] = useState<string>("#000000")

  const toggleTooltip = (event: React.KeyboardEvent<HTMLDivElement>, contentEditable: HTMLElement | null) => {
    const tooltip = document.getElementById("tooltip");
    // @ts-ignore
    if (contentEditable!.contains(event.target)) {
      const {x, y} = getCaretCoordinates()
      tooltip!.setAttribute("aria-hidden", "false");
      tooltip!.setAttribute(
        "style",
        `display: inline-block; left: ${x - 50}px; top: ${y-100}px`
      );
    } else {
      tooltip!.setAttribute("aria-hidden", "true");
      tooltip!.setAttribute("style", "display: none;");
    }
  }

  useEffect(() => {
    let arr = text.split(" ")
    const query = arr[arr.length - 1].trim()
    setParam(query)

    if (query.length >= 3) {
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

  }, [text])

  const focusInput = (text: string, value?: string) => {
    document.execCommand(text, false, value ?? '')
  };

  const ItemRs = rsSearch.map((item, index) => (
    <li onMouseOver={(e) => {
      const idx = rsSearch.indexOf(e!.currentTarget!.textContent!)
      setSelectIndex(idx)
    }}
        onClick={() => onClick(index)} key={index}
        className={`${selectIndex === index ? "bg-green-400" : ""}  cursor-pointer p-[5px]`}>
      <span className="font-bold">{item}</span>
    </li>
  ))

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    setHideTooltip(false)
    const editable = document.getElementById("contenteditable");
    toggleTooltip(e, editable)

    let current = selectIndex
    setSelectIndex(current)

    if (e.key === "ArrowUp") {
      e.preventDefault()
      e.stopPropagation()
      current -= 1;
      setSelectIndex(current)
      if (current < 0) {
        setSelectIndex(rsSearch.length - 1)
      }
    }

    if (e.key === "ArrowDown") {
      e.preventDefault()
      e.stopPropagation()
      current += 1;

      setSelectIndex(current)
      if (current >= rsSearch.length) {
        setSelectIndex(0)
      }
    }

    if (e.key === " ") {
      setHideTooltip(true)
      setSelectIndex(-1)
    }

    if (e.key === "Enter") {
      if (rsSearch.length > 0 && selectIndex !== -1) {
        e.preventDefault()
        e.stopPropagation()
        let arr = text.split(" ")
        const dicStr = rsSearch[current]
        const dicIndex = dictionary.indexOf(dicStr)
        if (arr.length == 1) {
          setText(dictionary[dicIndex])
          editable!.innerHTML = dictionary[dicIndex]
        } else {
          arr = arr.slice(0, arr.length - 1)
          const rs = arr.join(" ") + " " + dictionary[dicIndex] + " "
          setText(rs)
          editable!.innerHTML = rs
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

    if (e.key == "Escape") {
      setHideTooltip(true)
    }

  }

  const onClick = (current: number) => {
    const editable = document.getElementById("contenteditable");

    let arr = text.split(" ")
    const dicStr = rsSearch[current]
    const dicIndex = dictionary.indexOf(dicStr)
    if (arr.length == 1) {
      setText(dictionary[dicIndex])
      editable!.innerHTML = dictionary[dicIndex]
    } else {
      arr = arr.slice(0, arr.length - 1)
      const rs = arr.join(" ") + " " + dictionary[dicIndex] + " "
      setText(rs)
      editable!.innerHTML = rs
    }
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
      setActiveColor(e)
    }} type="button"
            data-tooltip-target="tooltip-fullscreen"
            className="w-2 h-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
      <div className="w-1 h-1" style={{backgroundColor: e}}></div>
      <span className="sr-only">Change color</span>
    </button>
  ))

  return (
    <div onClick={() => {
      setHideTooltip(true)
    }} className="min-h-screen flex-row justify-center justify-center px-[100px]">
      <form>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center justify-between px-[3px] py-[2px] border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
              <div className="flex items-center space-x-1 sm:pr-4">
                <button type="button" onClick={() => focusInput("bold")}
                        className={`p-2  text-black rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100`}>
                  <b>B</b>
                </button>
                <button type="button"
                        onClick={() => focusInput("strikeThrough")}
                        className={`p-2  text-black rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100`}>
                  <s>Strike</s>
                </button>
                <button onClick={() => {
                  setShowColor(!showColor)
                }} type="button"
                        data-tooltip-target="tooltip-fullscreen"
                        className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <div className="w-1 h-1" style={{backgroundColor: activeColor}}></div>
                  <span className="sr-only">Change color</span>
                </button>
                <div
                  className={`${showColor ? "" : "invisible"} absolute z-30 left-[350px] top-[350px]`}>
                  <div
                    className="w-[180px] h-[180px] absolute bg-white overflow-auto rounded-lg shadow-md z-10 p-1 border border-gray-300 text-gray-800 text-xs absolute bottom-full">
                    <div className="flex flex-wrap">
                      {ItemColor}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div onClick={() => {
            document!.getElementById("contenteditable")!.focus()
          }} className="cursor-text min-h-[500px] relative px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <div
              id="contenteditable"
              tabIndex={0}
              onKeyDown={onKeyDown}
              onInput={(val) => setText(val.currentTarget.textContent ?? "")}
              className="inline-block relative focus:outline-0 block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              contentEditable={true}/>
            <div id="tooltip"
                 className={`${(param.length < 3 || rsSearch.length <= 0 || hideTooltip) ? "invisible" : ""} absolute z-30`}>
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

    </div>
  )
}

export default Editor