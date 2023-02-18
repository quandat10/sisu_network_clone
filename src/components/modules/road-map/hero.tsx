import Image from "next/image";
import styles from "./index.module.scss";

const HeroRoadMapWg = ()=>{

  return (
    <div className="flex flex-col relative items-center">
      <div className="px-1 xl:max-w-[1320px] lg:max-w-[1140px] lg:px-[12px] xl:px-[12px] flex flex-col items-center ">
        <div className={`${styles.shadow_4} w-[100px] h-[100px] p-[10px] bg-white rounded-[25px] flex items-center justify-center mt-[103px]`}>
          <Image src="/images/logo.svg" alt="Sisu" width={80} height={71.41} />
        </div>
        <div className="font-gordita font-black text-[50px] leading-[71px] text-center mt-[56px]">
          Sisu Network Project Timelines
        </div>
        <div className="font-gordita text-center text-[17px] font-[400] leading-[200%] mt-[27px]">
          {" We want to keep our investors and community informed about each stage of Sisu's network building and growth phases for ultimate transparency."}
        </div>
      </div>
      <Image className="mt-[119px] max-w-[calc(100%-86px)]" src="/images/timeline.svg" alt="Timeline" width={1466} height={321}/>
      <div
        className={`${styles.bg_color} fxs:w-[calc(100%-8px)] fmsm:left-[4px] fmsm:w-[calc(100%-8px)] fxs:left-[4px]   fxsm:w-[calc(100%-16px)] fxsm:left-0.5  fmd:w-[calc(100%-32px)] fmd:left-1 flg:w-[calc(100%-70px)] flg:left-[35px]    lg:left-[35px] lg:w-[calc(100%-70px)] z-[-1] absolute top-0 h-full opacity-30 rounded-t-[15px]`}></div>
    </div>
  )
}

export default HeroRoadMapWg