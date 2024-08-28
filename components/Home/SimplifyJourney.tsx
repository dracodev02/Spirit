"use client";
import React, { useRef, useEffect } from "react";
import SimplifyCard from "./SimplifyCard";

type SimplifyCardProps = {
  logos: { src: string }[];
  content: React.ReactNode | string;
};

const SimplifySection: React.FC = () => {
  const items1: SimplifyCardProps[] = [
    {
      logos: [{ src: "/assets/argentX.png" }, { src: "/assets/braavos.png" }],
      content: (
        <p className="text-[22px] max-md:text-base font-sf-pro-bold">
          Social payments is never been so easy. Just type{" "}
          <span className="text-[#34C759]">{`“send 0.005 ETH to...”`}</span> and
          here we go
        </p>
      ),
    },
    {
      logos: [{ src: "/assets/nimbora.png" }, { src: "/assets/zkLend.png" }],
      content: (
        <p className="text-[22px] max-md:text-base font-sf-pro-bold">
          <span className="text-[#AF52DE]">
            {`“Hey, let's stake 100 STRK on Nimbora”`}
          </span>{" "}
          {`and that's how you do staking`}
        </p>
      ),
    },
    {
      logos: [
        { src: "/assets/nimbora.png" },
        { src: "/assets/zkLend.png" },
        { src: "/assets/tripo.png" },
      ],
      content: (
        <p className="text-[22px] max-md:text-base font-sf-pro-bold">
          Wanna borrow from the top tier protocol on Starknet, type{" "}
          <span className="text-[#007AFF]">{`“start zkLend app"`}</span>
        </p>
      ),
    },
  ];

  const items2: SimplifyCardProps[] = [
    {
      logos: [{ src: "/assets/argentX.png" }, { src: "/assets/braavos.png" }],
      content: (
        <p className="text-[22px] max-md:text-base font-sf-pro-bold">
          Bulk transactions within single command. Type{" "}
          <span className="text-[#294BD9]">
            {`"send 0.2 STRK to Mark and Ralph"`}
          </span>
        </p>
      ),
    },
    {
      logos: [{ src: "/assets/ekubo.png" }, { src: "/assets/vivona.png" }],
      content: (
        <p className="text-[22px] max-md:text-base font-sf-pro-bold">
          Wanna trade your favorite tokens with your entry?{" "}
          <span className="text-[#EF2323]">{"“Notify BTC at $60,000”"}</span>
        </p>
      ),
    },
    {
      logos: [{ src: "/assets/argentX.png" }, { src: "/assets/braavos.png" }],
      content: (
        <p className="text-[22px] max-md:text-base font-sf-pro-bold">
          <span className="text-[#39B8E3]">{"“Export my portfolio”"}</span> and
          you can start screening your digital assets
        </p>
      ),
    },
  ];

  const scrollRef1 = useRef<HTMLDivElement | null>(null);
  const scrollRef2 = useRef<HTMLDivElement | null>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent | TouchEvent) => {
      if (!ref.current) return;
      isDown = true;
      ref.current.classList.add("active");
      startX =
        e instanceof MouseEvent
          ? e.pageX - ref.current.offsetLeft
          : e.touches[0].pageX - ref.current.offsetLeft;
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

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown || !ref.current) return;
      e.preventDefault();
      const x =
        e instanceof MouseEvent
          ? e.pageX - ref.current.offsetLeft
          : e.touches[0].pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 2;
      ref.current.scrollLeft = scrollLeft - walk;
    };

    ref.current?.addEventListener("mousedown", onMouseDown);
    ref.current?.addEventListener("mouseleave", onMouseLeave);
    ref.current?.addEventListener("mouseup", onMouseUp);
    ref.current?.addEventListener("mousemove", onMouseMove);

    ref.current?.addEventListener("touchstart", onMouseDown);
    ref.current?.addEventListener("touchend", onMouseUp);
    ref.current?.addEventListener("touchmove", onMouseMove);

    return () => {
      ref.current?.removeEventListener("mousedown", onMouseDown);
      ref.current?.removeEventListener("mouseleave", onMouseLeave);
      ref.current?.removeEventListener("mouseup", onMouseUp);
      ref.current?.removeEventListener("mousemove", onMouseMove);

      ref.current?.removeEventListener("touchstart", onMouseDown);
      ref.current?.removeEventListener("touchend", onMouseUp);
      ref.current?.removeEventListener("touchmove", onMouseMove);
    };
  };

  useEffect(() => {
    handleScroll(scrollRef1);
    handleScroll(scrollRef2);
  }, []);

  return (
    <div>
      <p className="text-3xl px-4 md:pl-10">
        <span className="text-primary font-sf-pro-bold">
          Simplify your web3 journey.{" "}
        </span>{" "}
        <span className="text-grays2 font-sf-pro-bold">
          Shaping your on-chain daily activities
        </span>
      </p>
      <div className="flex flex-col gap-4 mt-8">
        <div className="marquee-container" ref={scrollRef1}>
          <div className="marquee">
            {[
              ...items1,
              ...items1,
              ...items1,
              ...items1,
              ...items1,
              ...items1,
            ].map((item, index) => (
              <SimplifyCard
                key={index}
                logos={item.logos}
                content={item.content}
              />
            ))}
          </div>
        </div>
        <div className="marquee-container pl-20" ref={scrollRef2}>
          <div className="marquee">
            {[
              ...items2,
              ...items2,
              ...items2,
              ...items2,
              ...items2,
              ...items2,
            ].map((item, index) => (
              <SimplifyCard
                key={index}
                logos={item.logos}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplifySection;
