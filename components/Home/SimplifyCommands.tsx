"use client";
import ImageComp from "@/package/@ui-kit/Image/ImageComp";
import spirit_text from "@/public/assets/spirit_text.png";
import phone from "@/public/assets/phone.png";
import Button from "@/package/@ui-kit/Image/Button/Button";

const SimplifyCommands = () => {
  return (
    <div className="relative w-full text-white">
      <div className="bg-gradient-to-br from-[#040a24] to-[#0a1b64] absolute w-full h-full z-[-1]">
        <ImageComp
          src={spirit_text.src}
          className="absolute md:w-2/3 left-0 h-full object-cover"
        />
      </div>
      <div className="flex max-w-desktop mx-auto justify-evenly pt-20 max-md:pt-10 max-md:flex-col px-4 gap-y-8">
        <div className="mt-10">
          <p className="text-[57px] max-md:text-[30px] max-w-[600px] font-sf-pro-bold">
            Simplify Your Journey With Commands
          </p>
          <ul className="list-inside list-disc mt-4 text-2xl max-md:text-base">
            <li>Bulk transactions</li>
            <li>Instant notifications</li>
            <li>Portfolio management</li>
            <li>Send / Swap / Borrow / Lend</li>
          </ul>
          <div className="max-md:flex max-md:justify-center">
            <Button
              title="Connect now on Telegram"
              type="outline"
              className="mt-8"
            />
          </div>
        </div>
        <ImageComp
          src={phone.src}
          className="max-md:max-w-[350px] max-md:mx-auto"
        />
      </div>
    </div>
  );
};

export default SimplifyCommands;
