import Image from "next/image";
import styles from "./index.module.scss"

const TextWg = (text:string)=>{
  return <div className="font-gordita font-medium text-1 leading-[215%]">
    <div
      className="w-[18px] h-[18px] mr-1 relative bottom-[-3px] inline-block bg-[url('/images/check-bullet.svg')]"/>
    {text}
  </div>
}

const FeaturesWg = () => {
  return (
    <div className=" mt-[170px] flex justify-center flex-col items-center ">
      <div
        className="xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] xsm:max-w-[720px] xs:max-w-[540px] px-[calc(0.5*1.5rem)] my-auto">
        <div className="flex mmd:flex-col flex-row justify-center gap-2">
          <div className="flex-grow-0 flex-shrink-0 flex-basis-auto ">
            <div className="font-gordita mxsm:text-[20px] font-[950] leading-[180%] text-[50px]">
              Supported<br/>Chains
            </div>

          </div>
          <div className="flex-grow-1 relative ">
            <Image className="flex flex-1" src="/images/img2.svg" alt="Supported Chains" width={1062.07} height={658.63}/>
          </div>
        </div>

        {/*/!*==============Feature Left==============*!/*/}
        <div className="flex mxsm:flex-col mxsm:flex-col-reverse flex-row justify-between mxsm:mt-[64px] mt-[200px] gap-2">
          <div className="justify-start">
            <Image src="/images/decentralized.svg" alt="Decentralized Token Swapping" width={632} height={663.39}/>
          </div>
          <div className="flex-1">
            <div className="font-gordita mxsm:text-[20px] font-[950] text-[50px] leading-[180%]">
              Decentralized Token<br/>Swapping
            </div>
            <div className=" font-gordita text-[17px] font-[400] leading-[180%]">
              Centralized exchanges can be more vulnerable to single point of failure. Sisu uses advanced cryptography
              algorithms for cross-chain communication that stays secure, decentralized, and with no private keys.
            </div>
            <div className="mt-1">
              {TextWg("Swap native and NFT tokens cross-chain.")}
              {TextWg("No single point of failure.")}
              {TextWg("Secure and traceable communication.")}
              {TextWg("100% “trustless”")}
            </div>
          </div>
        </div>

        {/*/!*==============Feature Right==============*!/*/}
        <div className="flex mxsm:flex-col mxsm:mt-[64px] flex-row justify-between mt-[200px] gap-2">
          <div className="flex-1">
            <div className="font-gordita mxsm:text-[20px] font-[950] text-[50px] leading-[180%]">
              Cross-chain<br/>API Hub
            </div>
            <div className=" font-gordita text-[17px] font-[400] leading-[180%]">
              Different chains can often have different smart contract languages that makes it harder to work cross-chain. Sisu allows developers to interact with cross-chain contracts as if they were a single chain
            </div>
            <div className="mt-1">
              {TextWg("Interact cross-chain without learning a new language.")}
              {TextWg("Less effort dealing with updates.")}
              {TextWg("Secure and traceable communication.")}
              {TextWg("Write a contract once that you can use across chains.")}
            </div>
          </div>
          <div className="justify-start">
            <Image src="/images/api.svg" alt="Cross-chain API Hub" width={632} height={663.39}/>
          </div>
        </div>

        {/*/!*==============Feature Left==============*!/*/}
        <div className="flex mxsm:flex-col mxsm:flex-col-reverse mxsm:mt-[64px] flex-row justify-between mt-[200px] gap-2">
          <div className="justify-start">
            <Image src="/images/private.svg" alt="Private Transactions" width={632} height={663.39}/>
          </div>
          <div className="flex-1 mt-[100px]">
            <div className="font-gordita mxsm:text-[20px] font-[950] text-[50px] leading-[180%]">
              Private Transactions
            </div>
            <div className="font-gordita text-[17px] font-[400] leading-[180%]">
              Sisu supports privacy and security across our network. Small add-ons allow private transfers across chains.
            </div>
            <div className="mt-1">
              {TextWg("Shielded cross-train transactions")}
              {TextWg("Optional privacy add-on features.")}
            </div>
          </div>
        </div>
      </div>
      <div className="mxsm:px-[8px] relative w-full mxsm:block flex justify-center">
        <div className={`${styles.bg_color_2} opacity-30 rounded-[16px] absolute top-0 left-0 h-full w-full`}></div>
        <div className="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] xsm:max-w-[720px] xs:max-w-[540px]">
          <div className="flex mxsm:flex-col mxsm:mt-[64px] flex-row justify-between mt-[200px] gap-4 ">
            <div className="flex-none ">
              <div className="font-gordita mxsm:text-[20px] font-[950] text-[55px] leading-[180%]">
                Apps that Can<br/>Interact With<br/>SiSu
              </div>
            </div>
            <div className="flex flex-grow-1 flex-1 h-[540px] relative">
              <div className="mmd:mb-2 mxsm:static absolute top-0 right-0 w-[108%]">
                <Image  src="/images/app-logos.svg" alt="Apps" width={963.83} height={359.36}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeaturesWg