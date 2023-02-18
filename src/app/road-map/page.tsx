import HeroRoadMapWg from "@/components/modules/road-map/hero";
import MilestonesWg from "@/components/modules/road-map/milestones";
import FootersCpn from "@/components/footers";
import RegisterSessionRoadMapWg from "@/components/modules/road-map/register-session";
import Image from "next/image";

export default function Roadmap() {
  return (
    <div className="mxsm:px-0.5 mxsm:pt-[60px] min-h-screen flex-col justify-center">
      <HeroRoadMapWg/>
      <MilestonesWg/>
      <RegisterSessionRoadMapWg/>
      <FootersCpn/>
    </div>
  )
}
