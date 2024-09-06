import FadeInVisible from "@/components/Animations/FadeInVisible";
import IntroduceWallet from "../components/Home/IntroduceWallet";
import SimplifyCommands from "../components/Home/SimplifyCommands";
import SimplifySection from "../components/Home/SimplifyJourney";
import WhatNext from "../components/Home/WhatNext";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[172px] max-md:gap-y-[100px]">
      <FadeInVisible>
        <IntroduceWallet />
      </FadeInVisible>
      <FadeInVisible>
        <SimplifySection />
      </FadeInVisible>
      <FadeInVisible>
        <SimplifyCommands />
      </FadeInVisible>
      <FadeInVisible>
        <WhatNext />
      </FadeInVisible>
    </div>
  );
}
