import styles from "./index.module.scss"
import Image from "next/image";
import Link from "next/link";

const HeroWg = () => {
  return (
    <div className="relative w-full mxsm:px-[12px] flex mlg:flex-col justify-center items-center">
      <div className=" xl:max-w-[1320px] lg:max-w-[1140px] lg:px-[12px] xl:px-[12px] flex fxl:flex-row mlg:flex-col md:gap-[100px]  md:pt-[186px] mmd:pt-[120px] md:max-w-[960px] xsm:max-w-[720px] xs:max-w-[540px]">
        <div className="flex flex-col gap-[64px] flex-1 justify-center items-center">
          <div className="mxs:pt-1 mxs:text-[40px] font-black text-black text-[50px] leading-[71px] font-gordita mlg:text-center">
            Unify the Fragmented Blockchain World
          </div>
          <div className="font-[400] text-[16px] leading-[180%] font-gordita">
            Blockchain world is fragmented. Everyone is living in their own chain. Sisu network is the decentralized
            cross-chain communication network that allows native & NFT tokens swapping or remote contract execution for
            a more seamless blockchain experience.
          </div>
          <Link href="https://discord.gg/DT7xAKCQJD">
            <div
              className="h-[64px] rounded-full bg-[#0f4fe1] text-white font-medium text-[16px] hover:cursor-pointer flex justify-center items-center w-[240px]">
              Join our community

            </div>
          </Link>


        </div>
        <div className="flex-1"></div>
      </div>
      <div className="mlg:static mlg:w-full mlg:h-full absolute lg:w-[calc(50%-35px)] h-full right-[35px] top-0">
        <Image className="w-full h-full" src="/images/img-1.svg" alt="hero" width={685} height={635}/>
      </div>
      <div
        className={`${styles.bg_color } fxs:w-[calc(100%-8px)] fmsm:left-[4px] fmsm:w-[calc(100%-8px)] fxs:left-[4px]   fxsm:w-[calc(100%-16px)] fxsm:left-0.5  fmd:w-[calc(100%-32px)] fmd:left-1 flg:w-[calc(100%-70px)] flg:left-[35px]    fxl:left-[35px] fxl:w-[calc(100%-70px)] xl:left-[35px] xl:w-[calc(100%-70px)] z-[-1] absolute top-0 h-full opacity-30 rounded-t-[15px]`}></div>
    </div>
  )
}

export default HeroWg