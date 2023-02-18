import Image from "next/image";

const ReinforcingWg = () => {
  return (
    <div className="flex justify-center mt-[130px]">
      <div className=" xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] xsm:max-w-[720px] xs:max-w-[540px]">
        <div className=" xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] xsm:max-w-[720px] xs:max-w-[540px] flex flex-wrap ">
          <div className=" mb-1 px-[calc(0.5*1.5rem)] md:flex md:w-[33.33333333%] mb-1 xsm:flex xsm:w-[100%]">
            <div className="mb-1 py-[38px] px-[42px] rounded-[20px] h-full bg-[#FCEFED]">
              <Image src="/images/convert.svg" alt="convert" width={332} height={198}/>
              <div className=" font-black font-gordita leading-[180%] mt-[42px] text-[22px]">
                Easy Transfer
              </div>
              <div className="mt-1 font-gordita font-normal leading-[180%] text-[17px]">
                Sisu supports native, NFT token swapping and contract data transfer. Move your assets cross chain
                seamlessly.
              </div>
            </div>
          </div>
          <div className="mb-1 px-[calc(0.5*1.5rem)] md:flex md:w-[33.33333333%] mb-1 xsm:flex xsm:w-[100%]">
            <div className="w-full mb-1 py-[38px] px-[42px] rounded-[20px] h-full bg-[#F8EDFF]">
              <Image src="/images/trustless.svg" alt="convert" width={332} height={198}/>
              <div className=" font-black font-gordita leading-[180%] mt-[42px] text-[22px]">
                100% Trustless
              </div>
              <div className="mt-1 font-gordita leading-[180%] text-[17px]">
                No one holds a chain private key. All transactions stay decentralized.
              </div>
            </div>
          </div>
          <div className="mb-1 px-[calc(0.5*1.5rem)] md:flex md:w-[33.33333333%] mb-1 xsm:flex xsm:w-[100%]">
            <div className="mb-1 py-[38px] px-[42px] rounded-[20px] h-full bg-[#EDF1FF]">
              <Image src="/images/fingerprint.svg" alt="convert" width={332} height={198}/>
              <div className=" font-black font-gordita leading-[180%] mt-[42px] text-[22px]">
                Private Transactions
              </div>
              <div className="mt-1 font-gordita leading-[180%] text-[17px]">
                Optional add-ons to make native token swapping private or obfuscated for extra security.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ReinforcingWg