"use client";
import Button from "@/package/@ui-kit/Image/Button/Button";
import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import logo_spirit_black from "@/public/assets/logo_spirit_black.svg";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

type HeaderItem = {
  name: string;
  href: string;
};

const Header = () => {
  const [isShowMenu, toggleMenu] = useState(false);

  const items: HeaderItem[] = [
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Support",
      href: "/support",
    },
  ];

  const Dropdown = () => {
    return (
      <div className="absolute top-full right-0 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] animate-fade-down animate-duration-150 w-[120px]">
        {items.map((item, index) => {
          return (
            <div key={index} className="p-2 border border-collapse">
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] fixed top-0 z-[10] bg-white">
      <div className="h-[72px] max-w-desktop px-4 mx-auto w-full flex justify-between items-center relative">
        <div className="flex gap-2 items-center">
          <ImageComp src={logo_spirit_black.src} className="w-[35px] h-auto" />
          <p className="font-title">Spirit</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-6 items-center max-md:hidden">
            {items.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-grays/50 hover:text-black cursor-pointer transition-all"
                >
                  {item.name}
                </p>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => {
                window.open("https://t.me/spirit_wallet", "_blank");
              }}
              title="Open Telegram"
            />
            <IoMenu
              onClick={() => toggleMenu((prev) => !prev)}
              className="hidden max-md:block text-2xl cursor-pointer"
            />
          </div>
        </div>
        {isShowMenu && <Dropdown />}
      </div>
    </div>
  );
};

export default Header;
