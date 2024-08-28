import IntroduceWallet from "../components/Home/IntroduceWallet";
import SimplifyCommands from "../components/Home/SimplifyCommands";
import SimplifySection from "../components/Home/SimplifyJourney";
import WhatNext from "../components/Home/WhatNext";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-[172px] max-md:gap-y-[100px]">
      <IntroduceWallet />
      <SimplifySection />
      <SimplifyCommands />
      <WhatNext />
    </div>
  );
}
