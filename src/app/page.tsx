import HeroWg from "@/components/modules/home/hero";
import Reinforcing from "@/components/modules/home/reinforcing";
import RegisterSession from "@/components/modules/home/register-session";
import FeaturesWg from "@/components/modules/home/features";
import FaqWg from "@/components/modules/home/faq";
import Footers from "@/components/footers";
import Head from "next/head";

export default function Home() {
  return (
    <div className="mxsm:px-0.5 mxsm:pt-[60px] min-h-screen flex-col justify-center">

      <HeroWg/>
      <Reinforcing/>
      <RegisterSession/>
      <FeaturesWg/>
      <FaqWg/>
      <RegisterSession/>
      <Footers/>
    </div>
  )
}
