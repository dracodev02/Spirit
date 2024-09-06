"use client";
import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import logo_pririt_white from "@/public/assets/logo_spirit_white.svg";

type FooterItem = {
  title: string;
  subItems: { name: string; href: string }[];
};

const Footer = () => {
  const items: FooterItem[] = [
    {
      title: "Download",
      subItems: [
        {
          name: "Connect Telegram",
          href: "#",
        },
      ],
    },
    {
      title: "Resources",
      subItems: [
        {
          name: "Features",
          href: "#",
        },
        {
          name: "Blog",
          href: "#",
        },
        {
          name: "Account Abstraction",
          href: "#",
        },
        {
          name: "Smart Contract Wallet",
          href: "#",
        },
      ],
    },
    {
      title: "Company",
      subItems: [
        {
          name: "FaQ",
          href: "#",
        },
        {
          name: "Docs",
          href: "#",
        },
        {
          name: "Media Kit",
          href: "#",
        },
        {
          name: "Privacy Policy",
          href: "#",
        },
        {
          name: "Terms of Use",
          href: "#",
        },
      ],
    },
    {
      title: "Socials",
      subItems: [
        {
          name: "Website",
          href: "https://myspiritwallet.com",
        },
        {
          name: "X account",
          href: "https://x.com/Spirit_wallet",
        },

        {
          name: "Telegram",
          href: "https://t.me/spirit_wallet",
        },
        {
          name: "Docs",
          href: "https://docs.myspiritwallet.com",
        },
      ],
    },
  ];

  return (
    <div className="relative text-white">
      <div className="bg-gradient-to-br from-[#040a24] to-[#0a1b64] absolute w-full h-full -z-[1]"></div>
      <div className="max-w-desktop mx-auto flex justify-between py-20 items-start px-4 max-lg:flex-col gap-y-8">
        <div className="flex items-center gap-2">
          <ImageComp src={logo_pririt_white.src} className="w-[50px] h-auto" />
          <p className="font-title">Pririt</p>
        </div>
        <div className="flex gap-x-20 gap-y-8 max-lg:flex-col">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2">
                <p className="font-sf-pro-bold">{item.title}</p>
                {item.subItems.map((subItem, subIndex) => {
                  return (
                    <a
                      href={subItem.href}
                      target="_blank"
                      className="text-grays2 text-sm cursor-pointer"
                      key={subIndex}
                    >
                      {subItem.name}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
