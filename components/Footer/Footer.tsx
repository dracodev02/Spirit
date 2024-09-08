"use client";
import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import logo_pririt_white from "@/public/assets/logo_spirit_white.svg";

type FooterItem = {
  title: string;
  subItems: { name: string; href: string; target: string }[];
};

const Footer = () => {
  const items: FooterItem[] = [
    {
      title: "Download",
      subItems: [
        {
          name: "Connect Telegram",
          href: "#",
          target: "_self",
        },
      ],
    },
    {
      title: "Resources",
      subItems: [
        {
          name: "Features",
          href: "#",
          target: "_self",
        },
        {
          name: "Blog",
          href: "#",
          target: "_self",
        },
        {
          name: "Account Abstraction",
          href: "#",
          target: "_self",
        },
        {
          name: "Smart Contract Wallet",
          href: "#",
          target: "_self",
        },
      ],
    },
    {
      title: "Company",
      subItems: [
        {
          name: "FaQ",
          href: "#",
          target: "_self",
        },
        {
          name: "Docs",
          href: "#",
          target: "_self",
        },
        {
          name: "Media Kit",
          href: "#",
          target: "_self",
        },
        {
          name: "Privacy Policy",
          href: "#",
          target: "_self",
        },
        {
          name: "Terms of Use",
          href: "#",
          target: "_self",
        },
      ],
    },
    {
      title: "Socials",
      subItems: [
        {
          name: "Website",
          href: "https://myspiritwallet.com",
          target: "_blank",
        },
        {
          name: "X account",
          href: "https://x.com/Spirit_wallet",
          target: "_blank",
        },

        {
          name: "Telegram",
          href: "https://t.me/spirit_wallet",
          target: "_blank",
        },
        {
          name: "Docs",
          href: "https://docs.myspiritwallet.com",
          target: "_blank",
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
          <p className="font-title text-3xl">Pririt</p>
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
                      target={subItem.target}
                      className="text-grays2 text-sm cursor-pointer hover:text-white transition-all "
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
