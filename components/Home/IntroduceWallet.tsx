"use client";
import React, { useRef, useEffect } from "react";
import Button from "@/package/@ui-kit/Image/Button/Button";
import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import banner_introduce from "@/public/assets/banner_Introduce.png";

const IntroduceWallet: React.FC = () => {
  const items = [
    { src: "/assets/introduce_1.png" },
    { src: "/assets/introduce_2.png" },
    { src: "/assets/introduce_3.png" },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      if (!ref.current) return;
      isDown = true;
      ref.current.classList.add("active");
      startX = e.pageX - ref.current.offsetLeft;
      scrollLeft = ref.current.scrollLeft;
    };

    const onMouseLeave = () => {
      if (!ref.current) return;
      isDown = false;
      ref.current.classList.remove("active");
    };

    const onMouseUp = () => {
      if (!ref.current) return;
      isDown = false;
      ref.current.classList.remove("active");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown || !ref.current) return;
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 2; // Tốc độ cuộn
      ref.current.scrollLeft = scrollLeft - walk;
    };

    ref.current?.addEventListener("mousedown", onMouseDown);
    ref.current?.addEventListener("mouseleave", onMouseLeave);
    ref.current?.addEventListener("mouseup", onMouseUp);
    ref.current?.addEventListener("mousemove", onMouseMove);

    return () => {
      ref.current?.removeEventListener("mousedown", onMouseDown);
      ref.current?.removeEventListener("mouseleave", onMouseLeave);
      ref.current?.removeEventListener("mouseup", onMouseUp);
      ref.current?.removeEventListener("mousemove", onMouseMove);
    };
  };

  useEffect(() => {
    handleScroll(scrollRef);
  }, []);

  return (
    <div className="relative">
      <ImageComp
        src={banner_introduce.src}
        className="h-screen object-contain brightness-90 absolute top-0 left-0 right-0 z-[-1]"
      />
      <div className="flex flex-col gap-4 pt-[172px] max-md:pt-[100px] max-w-desktop mx-auto">
        <Button
          title="Payments are now available on Telegram"
          type="outline"
          className="w-fit mx-auto"
        />
        <div>
          <p className="text-center text-[57px] max-md:text-[30px] leading-[70px] max-md:leading-[40px] font-sf-pro-bold">
            Smart wallet, simple life.
          </p>
          <p className="text-center text-[57px] max-md:text-[30px] leading-[70px] max-md:leading-[40px] font-sf-pro-bold">
            Your financial world, simplified.
          </p>
        </div>
        <p className="text-grays text-center text-2xl">
          Simplify and socialize the way you interact with digital assets.
        </p>
      </div>
      <div className="mt-[172px] max-md:mt-[100px] max-w-desktop mx-auto">
        <p className="text-3xl px-4 md:pl-10">
          <span className="text-primary font-sf-pro-bold">Connect. </span>{" "}
          <span className="text-grays2 font-sf-pro-bold">
            All StarkNet ecosystem to socials
          </span>
        </p>
        <div
          className="flex gap-4 mt-8 overflow-auto px-4 md:px-10 cursor-grabbing max-w-[1440px] mx-auto"
          ref={scrollRef}
        >
          <div className="rounded-[24px] px-6 py-8 bg-black min-w-[387px] max-md:min-w-[280px] flex flex-col justify-between gap-10 pointer-events-none select-none flex-1">
            <div className="flex gap-y-2 flex-col ">
              <p className="text-grays3 ">Wallet on Telegram</p>
              <p className="font-sf-pro-bold text-white text-xl">
                Account Abstraction
              </p>
              <p className="text-grays3">
                {`Now StarkNet's users are able to experience the best
                applications on Telegram like never before.`}
              </p>
            </div>
            <ImageComp src="/assets/introduce_1.svg" className="w-full" />
          </div>
          <div className="rounded-[24px] px-6 py-8 bg-[#F2F2F7] min-w-[387px] max-md:min-w-[280px] flex flex-col justify-between gap-10 pointer-events-none select-none flex-1">
            <div className="flex gap-y-2 flex-col ">
              <p className="text-[#FF2D55]">Defi connection</p>
              <p className="font-sf-pro-bold text-xl">
                All Defi needs in one place
              </p>
              <p className="text-[#8E8E93]">
                Lending, borrowing, swapping, everything related to Defi are all
                here.
              </p>
            </div>
            <ImageComp src="/assets/introduce_2.svg" className="w-full" />
          </div>
          <div className="rounded-[24px] px-6 py-8 bg-black min-w-[387px] max-md:min-w-[280px] flex flex-col justify-between gap-10 pointer-events-none select-none flex-1">
            <div className="flex gap-y-2 flex-col ">
              <p className="text-grays3 ">Digital collectibles</p>
              <p className="font-sf-pro-bold text-white text-xl">
                Trade. Bid. Transfer NFTs
              </p>
              <p className="text-grays3">
                Never been so easy when trading your digital assets and managing
                your porfolio.
              </p>
            </div>
            <ImageComp src="/assets/introduce_3.svg" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceWallet;
