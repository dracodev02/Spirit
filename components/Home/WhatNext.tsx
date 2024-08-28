"use client";
import React, { useRef, useEffect } from "react";
import WhatNextCard from "./WhatNextCard";
import phone2 from "@/public/assets/phone2.png";
import desktop from "@/public/assets/desktop.png";
import ImageComp from "@/package/@ui-kit/Image/ImageComp";

type WhatNextCardProps = {
  subTitle: string;
  title: string;
  description: string;
};

const WhatNext: React.FC = () => {
  const items: WhatNextCardProps[] = [
    {
      subTitle: "Smart Wallet",
      title: "Developed Spirit Wallet",
      description:
        "Spirit Wallet will be available on Web extension, and mobile app, which will focus on daily user basis.",
    },
    {
      subTitle: "Smart Wallet",
      title: "TON Wallet",
      description:
        "Native on TON that able to connect StarkNet and Telegram users.",
    },
    {
      subTitle: "Payment gateway",
      title: "P2P Gateway API",
      description:
        "From users to merchants, aggressively transforming the financial world with the future technology.",
    },
    {
      subTitle: "Smart Trading",
      title: "Automatic Trading",
      description:
        "Automate your trading with limit orders: TP, SL. Automate dip buying at the market cap/price.",
    },
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
    <div className="pb-16">
      <p className="text-3xl px-4 md:pl-10">
        <span className="text-[#AF52DE] font-sf-pro-bold">{`What's next? `}</span>{" "}
        <span className="text-grays2 font-sf-pro-bold">
          Elevating user experience with innovations
        </span>
      </p>
      <div className="flex flex-col gap-4 mt-8">
        <div
          className="flex gap-4 overflow-auto px-4 md:pl-10 cursor-grabbing"
          ref={scrollRef}
        >
          {items.map((item, index) => (
            <WhatNextCard
              key={index}
              subTitle={item.subTitle}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="relative mx-auto w-fit max-w-full mt-8">
        <ImageComp
          src={phone2.src}
          className="w-[200px] max-md:w-[100px] inline-block"
        />
        <ImageComp
          src={desktop.src}
          className="w-[600px] max-w-full inline-block -ml-[100px] max-md:-ml-[70px] max-md:w-[300px] relative -z-[1]"
        />
      </div>
    </div>
  );
};

export default WhatNext;
