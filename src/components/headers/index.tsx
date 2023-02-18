"use client"
import Image from "next/image";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {useEffect, useState} from "react";

const ActiveWg = () => (
  <div className=" absolute w-[calc(100%+1rem)] h-[6px] left-[-8px] bottom-[-5px] bg-[#0f4fe1] opacity-40"></div>
)

const MenuBarWg = ({navActive}:{navActive:number}) => {
  return (
    <div
      className="fixed top-[52px] w-full bg-white ml-[-16px] z-10 px-2 py-1 flex flex-col gap-2 font-gordita font-[500] text-[15px] leading-[21px] text-center ">
      <Link href="/">
        <div className="relative hover:cursor-pointer w-fit">
          Home
          {navActive == 0 && <ActiveWg/>}
        </div>
      </Link>
      <Link href="/road-map">
        <div className="relative hover:cursor-pointer w-fit">
          Roadmap
          {navActive == 1 && <ActiveWg/>}
        </div>
      </Link>

      <div className="relative hover:cursor-pointer w-fit">
        Testnet
        {navActive == 2 && <ActiveWg/>}
      </div>
      <div className="relative hover:cursor-pointer w-fit">
        Blog
        {navActive == 3 && <ActiveWg/>}
      </div>
    </div>
  )
}

const HeadersCpn = () => {
  const path = usePathname()
  const [navActive, setNavActive] = useState<number>(0)
  const [menuBar, setMenuBar] = useState<boolean>(false)
  useEffect(() => {
    if(menuBar){
      setMenuBar(false)
    }
    switch (path) {
      case "/":
        setNavActive(0)
        break
      case "/road-map":
        console.log("here")
        setNavActive(1)
        break
      case "/testnet":
        setNavActive(2)
        break
      case "/blog":
        setNavActive(3)
        break
    }
  }, [path])
  return (
    <div className="mmd:fixed w-full mmd:z-10 flex flex-row justify-center w-full">
      <div
        className='mmd:hidden mx-auto flex flex-row justify-center items-center pt-1 pb-1 w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[920px] pl-[12px] pr-[12px]'>
        <div className="flex-1 flex text-center justify-center">
          <Image height={60} width={67} src="/images/logo.svg" alt="logo"/>
        </div>
        <div className="text-[15px] flex-1 flex flex-row justify-center gap-2 text-center font-gordita font-medium ">
          <Link onClick={()=>setMenuBar(!menuBar)} href="/">
            <div
              className="hover:cursor-pointer relative">
              Home
              {navActive == 0 && <ActiveWg/>}
            </div>
          </Link>
          <Link onClick={()=>setMenuBar(!menuBar)} href="/road-map">
            <div className="hover:cursor-pointer relative">
              Roadmap
              {navActive == 1 && <ActiveWg/>}
            </div>
          </Link>
          <div className="hover:cursor-pointer relative">
            Testnet
            {navActive === 2 && <ActiveWg/>}
          </div>
          <div className="hover:cursor-pointer relative">
            Blog
            {navActive === 3 && <ActiveWg/>}
          </div>
        </div>
        <div className="flex-1 flex gap-x-1.5">
          <div className="flex-1 flex flex-row justify-center items-center gap-x-2">
            <Link href="https://twitter.com/sisunetwork" target="_blank" rel="noreferrer">
              <Image width={22} height={20} src="/images/twitter.svg" alt="twitter logo"/>
            </Link>
            <Link href="https://discord.gg/DT7xAKCQJD" target="_blank" rel="noreferrer">
              <Image width={24} height={21} src="/images/discord.svg" alt="twitter logo"/>
            </Link>
          </div>
          <button
            className="flex flex-row justify-center items-center gap-[14px] border-[#0f4fe1] border-[1.5px] border-solid box-border rounded-full text-[#0f4fe1] font-gordita font-[500] leading-[21px] text-[15px] text-center py-0.5 w-[150px]">
            Login
            <Image src={"/images/arrow-right.svg"} width={20} height={12} alt="arrow right"/>
          </button>
        </div>
      </div>
      <div className="md:hidden w-full  flex flex-col">
        <div className="flex flex-row relative items-center px-1 py-0.5 bg-white">
          <div className="flex-1 h-[24px]">
            <Image onClick={() => setMenuBar(!menuBar)} src="/images/menu.svg" alt="Menu" width={24} height={24}/>
          </div>
          <Image src="/images/logo.svg" alt="Sisu" width={470} height={36}
                 className="mxs:hidden flex-1 h-[36px] flex-grow-1 object-contain">
          </Image>
        </div>
        {menuBar && <MenuBarWg navActive={navActive}/>}
      </div>
    </div>
  )

}

export default HeadersCpn