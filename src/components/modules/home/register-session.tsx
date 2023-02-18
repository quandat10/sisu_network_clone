import styles from "./index.module.scss"
import Image from "next/image";

const RegisterSessionWg = () => {
  return (
    <div className="fxs:mx-[4px] fxs:mt-[32px] fmsm:mx-[8px] fmsm:mt-32px fxsm:mx-[8px] fxsm:mt-32px  mx-[36px] pt-[118px] pb-[132px] md:mt-[150px] bg-[#0f4fe1] rounded-[20px]  relative">
      <div className="bg-[url('/images/form-background.svg')] absolute top-0 left-0 h-full w-full">
      </div>
      <div
        className={`${styles.shadow} absolute right-[42px] bottom-[-54px] bg-white rounded-[30px] flex items-center justify-center w-[102px] h-[119px]`}>
        <Image width={81.59} height={72.83} src="/images/logo.svg" alt="logo" />
      </div>
      <div className="flex flex-col justify-center relative z-[1]  items-center p-1 text-center">
        <div className="mxsm:text-[20px] font-gordita text-white font-black text-[50px] leading-[180%] relative">
          Ready to Get Started?
          <div
            className="absolute w-[calc(100%+32px)] h-[6px] left-[-1rem] mxsm:bottom-[10px] bottom-[29px] bg-white opacity-40 z-[1]"></div>
        </div>
        <div className="mxsm:text-[20px] font-gordita text-white font-black text-[50px] leading-[180%] relative">
          Register Now To Stay in the Loop
        </div>
        <div className="mt-[46px]">
          <div
            className={`${styles.shadow_2} border-solid border-[2px] border-white flex font-gordita font-normal text-[14px] leading-[180%] bg-white rounded-full h-[68px]`}>
            <input placeholder="Enter your email..." className="flex-grow-1 pl-2 pr-1 outline-0 rounded-full"/>
            <div className=" mxs:min-w-[60px] static h-auto min-w-[168px] bg-[#0f4fe1] font-gordita rounded-full font-bold text-[15px] leading-[169.5%] text-white px-[32px] mxs:px-[22px] py-[20px] hover:cursor-pointer flex justify-center items-center">
              <div className="mxs:hidden">Register now</div>
              <div className="xs:hidden w-[20px]">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5303 6.53033C19.8232 6.23744 19.8232 5.76256 19.5303 5.46967L14.7574 0.696698C14.4645 0.403804 13.9896 0.403805 13.6967 0.696698C13.4038 0.989591 13.4038 1.46446 13.6967 1.75736L17.9393 6L13.6967 10.2426C13.4038 10.5355 13.4038 11.0104 13.6967 11.3033C13.9896 11.5962 14.4645 11.5962 14.7574 11.3033L19.5303 6.53033ZM6.55671e-08 6.75L19 6.75L19 5.25L-6.55671e-08 5.25L6.55671e-08 6.75Z" fill="white"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterSessionWg