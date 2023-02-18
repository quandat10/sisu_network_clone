import Image from "next/image";
import {ReactComponentElement} from "react";

type ItemType = {
  info: string
  bgColor: string
  index: number
  title: string
  children: ReactComponentElement<any>
}

const MilestoneItem = ({
                         info, bgColor, index, title, children
                       }: ItemType) => {
  return (
    <div
      className={`bg-[#${bgColor}] flex flex-row gap-[56px] ${index % 2 && "flex-row-reverse"}  items-center rounded-[20px] px-2 mt-[100px]`}>
      <Image className="bottom-[-35px] relative" src="/images/roadmap-convert.svg" alt="Cross Chain Token Swap"
             width={385} height={299}/>
      <div className="flex flex-col justify-center">
        <div
          className="bg-[#0f4fe1] rounded-full h-[39px] font-bold text-[16px] text-white flex items-center justify-center px-2 w-fit mt-[85px]">
          {info}
        </div>
        <div className="font-black text-[35px] leading-[52px] mt-[22px]">{title}</div>
        {children}
      </div>
    </div>
  )
}

const MilestonesWg = () => {

  return (
    <div className="w-full flex justify-center">
      <div className="mlg:hidden">
        {/*=======Decor line 1=======*/}
        <Image className='mt-[195px] ml-[-10px] absolute z-20' src="/images/handle.svg" alt="" width={46}
               height={46}/>
        <Image className='mt-[752px] ml-[-10px] absolute z-20' src="/images/handle.svg" alt="" width={46}
               height={46}/>
        <div className="mt-[216px] ml-[-40px] absolute z-10">
          <svg width="45" height="559.375" viewBox="0 1 45 559.375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M44 1.99979H14.5C9.83336 1.83313 0.700024 3.89979 1.50002 13.4998C2.30002 23.0998 1.83336 167.20800000000003 1.50002 546.375C0.999865 550.708 2.69955 559.375 13.4995 559.375C24.2995 559.375 38.3332 559.375 44 559.375"
              stroke="url(#paint0_linear_1479_1369)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="8 8"></path>
            <defs>
              <linearGradient id="paint0_linear_1479_1369" x1="276.175" y1="30.8696" x2="-111.173" y2="453.208"
                              gradientUnits="userSpaceOnUse">
                <stop stopColor="#0F4FE1"></stop>
                <stop offset="0.791667" stopColor="#F0DCFC"></stop>
                <stop offset="1" stopColor="#88A7F0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/*=======Decor line 2=======*/}
        <Image className='lg:mt-[1000px] xl:mt-[930px] lg:ml-[1105px] xl:ml-[1285px] absolute z-20'
               src="/images/handle.svg" alt="" width={46}
               height={46}/>
        <Image className='lg:mt-[1297px] xl:mt-[1225px] lg:ml-[1105px] xl:ml-[1285px] absolute z-20'
               src="/images/handle.svg" alt="" width={46}
               height={46}/>
        <div className="lg:mt-[1020px] xl:mt-[950px] lg:ml-[1135px] xl:ml-[1310px] absolute z-10">
          <svg width="45" height="300" viewBox="0 0 45 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 1.5H30.5C34.8333 1.83333 43.5 5.6 43.5 18C43.5 30.4 43.5 222.833 43.5 285C44 289.5 42.3 298.5 31.5 298.5H1"
              stroke="url(#paint0_linear_1479_1370)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="8 8"></path>
            <defs>
              <linearGradient id="paint0_linear_1479_1370" x1="275.752" y1="13.1721" x2="173.325" y2="289.487"
                              gradientUnits="userSpaceOnUse">
                <stop stopColor="#0F4FE1"></stop>
                <stop offset="0.411458" stopColor="#F0DCFC"></stop>
                <stop offset="1" stopColor="#88A7F0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/*=======Decor line 3=======*/}
        <Image className='mt-[1500px] ml-[-10px] absolute z-20' src="/images/handle.svg" alt="" width={46}
               height={46}/>
        <Image className='mt-[1796px] ml-[-10px] absolute z-20' src="/images/handle.svg" alt="" width={46}
               height={46}/>
        <div className="mt-[1520px] ml-[-40px] absolute z-10">
          <svg width="45" height="300" viewBox="0 1 45 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M44 1.99979H14.5C9.83336 1.83313 0.700024 3.89979 1.50002 13.4998C2.30002 23.0998 1.83336 -92.16699999999997 1.50002 287C0.999865 291.333 2.69955 300 13.4995 300C24.2995 300 38.3332 300 44 300"
              stroke="url(#paint0_linear_1479_1369)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="8 8"></path>
            <defs>
              <linearGradient id="paint0_linear_1479_1369" x1="276.175" y1="30.8696" x2="-111.173" y2="453.208"
                              gradientUnits="userSpaceOnUse">
                <stop stopColor="#0F4FE1"></stop>
                <stop offset="0.791667" stopColor="#F0DCFC"></stop>
                <stop offset="1" stopColor="#88A7F0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/*=======Decor line 4=======*/}
        <Image className='lg:mt-[2060px] xl:mt-[1970px] lg:ml-[1105px] xl:ml-[1285px] absolute z-20'
               src="/images/handle.svg" alt="" width={46}
               height={46}/>
        <Image className='lg:mt-[2355px] xl:mt-[2265px] lg:ml-[1105px] xl:ml-[1285px] absolute z-20'
               src="/images/handle.svg" alt="" width={46}
               height={46}/>
        <div className="lg:mt-[2080px] xl:mt-[1990px] lg:ml-[1140px] xl:ml-[1310px]   absolute z-10">
          <svg width="45" height="300" viewBox="0 0 45 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 1.5H30.5C34.8333 1.83333 43.5 5.6 43.5 18C43.5 30.4 43.5 222.833 43.5 285C44 289.5 42.3 298.5 31.5 298.5H1"
              stroke="url(#paint0_linear_1479_1370)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="8 8"></path>
            <defs>
              <linearGradient id="paint0_linear_1479_1370" x1="275.752" y1="13.1721" x2="173.325" y2="289.487"
                              gradientUnits="userSpaceOnUse">
                <stop stopColor="#0F4FE1"></stop>
                <stop offset="0.411458" stopColor="#F0DCFC"></stop>
                <stop offset="1" stopColor="#88A7F0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/*=======Decor line 4=======*/}
        <Image className='lg:mt-[2690px] xl:mt-[2570px] lg:ml-[100px] xl:ml-[100px] absolute z-20'
               src="/images/handle.svg" alt="" width={46}
               height={46}/>
        <div className="xl:invisible lg:mt-[2720px] lg:ml-[120px]  lg:absolute lg:z-10">
          <svg width="368" height="116" viewBox="0 0 368 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 1.5V37.5C2.83333 45.5 10.2 61.6 29 62C47.8 62.4 252.833 62.1667 321 62C336.16700000000003 60.6667 366.5 65.2 366.5 94C366.5 122.8 366.5 117.333 366.5 111"
              stroke="url(#paint0_linear_1479_1374)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="8 8"></path>
            <defs>
              <linearGradient id="paint0_linear_1479_1374" x1="2563.36" y1="7.26315" x2="2560.31" y2="162.382"
                              gradientUnits="userSpaceOnUse">
                <stop stopColor="#0F4FE1"></stop>
                <stop offset="0.791667" stopColor="#F0DCFC"></stop>
                <stop offset="1" stopColor="#88A7F0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="fxl:hidden xl:mt-[2600px] xl:ml-[120px] xl:absolute xl:z-10">
          <svg width="548" height="116" viewBox="0 0 548 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.5 1.5V37.5C2.83333 45.5 10.2 61.6 29 62C47.8 62.4 252.833 62.1667 501 62C516.167 60.6667 546.5 65.2 546.5 94C546.5 122.8 546.5 117.333 546.5 111"
              stroke="url(#paint0_linear_1479_1374)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
              strokeDasharray="8 8"></path>
            <defs>
              <linearGradient id="paint0_linear_1479_1374" x1="2563.36" y1="7.26315" x2="2560.31" y2="162.382"
                              gradientUnits="userSpaceOnUse">
                <stop stopColor="#0F4FE1"></stop>
                <stop offset="0.791667" stopColor="#F0DCFC"></stop>
                <stop offset="1" stopColor="#88A7F0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <Image className='lg:mt-[2840px] xl:mt-[2720px] lg:ml-[472px] xl:ml-[653px] absolute z-20'
               src="/images/edge-head.svg" alt="" width={27}
               height={31}/>
      </div>

      <div
        className="px-[calc(0.5*1.5rem)] w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] xsm:max-w-[720px] xs:max-w-[540px]">

        {/*=================Milestone 1=================*/}
        <div
          className={`mmd:flex-col bg-[#e6edfc] flex flex-row gap-[56px] items-center rounded-[20px] px-2 mt-[100px]`}>
          <Image className="bottom-[-35px] relative" src="/images/roadmap-convert.svg" alt="Cross Chain Token Swap"
                 width={385} height={299}/>
          <div className="flex flex-col justify-center">
            <div
              className="bg-[#0f4fe1] rounded-full h-[39px] font-bold text-[16px] text-white flex items-center justify-center px-2 w-fit mmd:mt-[12px] mt-[85px]">
              1. Tail
            </div>
            <div className="font-gordita font-black text-[35px] leading-[52px] mt-[22px]">Cross Chain Token Swap</div>
            <div className="font-gordita font-[400] text-[17px] leading-[180%] mt-[45px] mb-[64px]">
              <div className="mb-2">
                This is a testnet for swapping non-native tokens cross chain, including common tokens like
                ERC20 and
                NFT. Sisu dev team will work with other crypto teams who want to build DEX to release their
                testnet
                version.
              </div>
              <div>
                Sisu testnet and validators group will be private at this stage.
              </div>
            </div>
          </div>
        </div>


        {/*=================Milestone 2=================*/}
        <div
          className={`mmd:flex-col bg-[#ffefed] flex flex-row flex-row-reverse gap-[56px] items-center rounded-[20px] px-2 mt-[100px]`}>
          <Image className="bottom-[-35px] relative" src="/images/roadmap-trustless.svg" alt="Cross Chain Token Swap"
                 width={385} height={299}/>
          <div className="flex flex-col justify-center">
            <div
              className="bg-[#0f4fe1] rounded-full h-[39px] font-bold text-[16px] text-white flex items-center justify-center px-2 w-fit mmd:mt-[12px] mt-[85px]">
              2. Talon
            </div>
            <div className="font-gordita font-black text-[35px] leading-[52px] mt-[22px]">Native Coin Swapping</div>
            <div className="font-gordita font-[400] text-[17px] leading-[180%] mt-[45px] mb-[64px]">
              <div className="mb-2">
                This stage enables user to do native coins/token swapping instead of using wrapped tokens.
              </div>
              <div>
                Liquidity provider can stake their contribution on testnet in reward for Sisus tokens.
              </div>
            </div>
          </div>
        </div>

        {/*/!*=================Milestone 3=================*!/*/}
        <div
          className={`mmd:flex-col bg-[#f8edff] flex flex-row gap-[56px] items-center rounded-[20px] px-2 mt-[100px]`}>
          <Image className="bottom-[-35px] relative" src="/images/roadmap-api-hub.svg" alt="Cross Chain Token Swap"
                 width={385} height={299}/>
          <div className="flex flex-col justify-center">
            <div
              className="bg-[#0f4fe1] rounded-full h-[39px] font-bold text-[16px] text-white flex items-center justify-center px-2 w-fit mmd:mt-[12px] mt-[85px]">
              3. Spine
            </div>
            <div className="font-gordita font-black text-[35px] leading-[52px] mt-[22px]">API Hub for Cross Chain
              Contracts
            </div>
            <div className="font-gordita font-[400] text-[17px] leading-[180%] mt-[45px] mb-[64px]">
              <div className="mb-2">
                Sisu deploys contract gateway at different chains and let developers interact with remote
                contracts through the gateway using their familiar languages, instead of learning multiple
                blockchain languages.
              </div>
              <div>
                The source code and testnet are also opened for public at this stage.
              </div>
            </div>
          </div>
        </div>

        {/*/!*=================Milestone 4=================*!/*/}
        <div
          className={`mmd:flex-col bg-[#eff3ff] flex flex-row flex-row-reverse gap-[56px] items-center rounded-[20px] px-2 mt-[100px]`}>
          <Image className="bottom-[-35px] relative" src="/images/roadmap-fingerprint.svg" alt="Cross Chain Token Swap"
                 width={385} height={299}/>
          <div className="flex flex-col justify-center">
            <div
              className="bg-[#0f4fe1] rounded-full h-[39px] font-bold text-[16px] text-white flex items-center justify-center px-2 w-fit mmd:mt-[12px] mt-[85px]">
              4. Fang
            </div>
            <div className="font-gordita font-black text-[35px] leading-[52px] mt-[22px]">Private Transaction</div>
            <div className="font-gordita font-[400] text-[17px] leading-[180%] mt-[45px] mb-[64px]">
              <div>
                Many users do care about the privacy of their transaction. The Fang deployment offers users
                an option to shield their transaction with minor additional cost.
              </div>
            </div>
          </div>
        </div>

        {/*/!*=================Milestone 5=================*!/*/}
        <div
          className={`mmd:flex-col bg-[#e6edfc] flex flex-row gap-[56px] items-center rounded-[20px] px-2 mt-[100px]`}>
          <Image className="bottom-[-35px] relative" src="/images/roadmap-launch.svg" alt="Cross Chain Token Swap"
                 width={385} height={299}/>
          <div className="flex flex-col justify-center">
            <div
              className="bg-[#0f4fe1] rounded-full h-[39px] font-bold text-[16px] text-white flex items-center justify-center px-2 w-fit mmd:mt-[12px] mt-[85px]">
              5. Heart
            </div>
            <div className="font-gordita font-black text-[35px] leading-[52px] mt-[22px]">Mainnet</div>
            <div className="font-gordita font-[400] text-[17px] leading-[180%] mt-[45px] mb-[64px]">
              <div className="mb-2">
                The mainnet is launched and deployed on various blockchains with their ecosystems.
              </div>
              <div>
                You can enjoy all the features of Sisu at this stage that you see in testnet.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MilestonesWg