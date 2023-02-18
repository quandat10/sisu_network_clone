import Image from "next/image";
import Link from "next/link";

const FootersCpn = ()=>{
  return (
    <div className="flex flex-col items-center">
      <Image className="mxs:hidden mt-[136px]" src="/images/logo.svg" alt="Sisu" width={128} height={114.25}/>
      <div className="font-gordita mt-[89px] font-[700] text-[17px] leading-[24px] text-center">
        Sisu, Inc. © 2022 All rights reserved.
      </div>
      <div className="mt-[50px] flex flex-row justify-center items-center gap-3 mb-[134px]">
        <Link href="https://twitter.com/sisunetwork" target="_blank" rel="noreferrer">
          <Image src="/images/twitter.svg" alt="Twitter" width={22} height={20}/>
        </Link>
        <Link href="https://discord.gg/DT7xAKCQJD" target="_blank" rel="noreferrer">
          <Image src="/images/discord.svg" alt="Discord" width={22} height={20}/>
        </Link>
        <Link href="https://github.com/sisu-network" target="_blank" rel="noreferrer">
          <Image src="/images/github.svg" alt="Github" width={22} height={20}/>
        </Link>
      </div>
    </div>
  )
}

export default FootersCpn