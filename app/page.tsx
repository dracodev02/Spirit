import IntroduceWallet from "./Home/IntroduceWallet";
import SimplifyCommands from "./Home/SimplifyCommands";
import SimplifySection from "./Home/SimplifyJourney";
import WhatNext from "./Home/WhatNext";

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
