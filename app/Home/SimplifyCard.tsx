import React from "react";

type SimplifyCardProps = {
  logos: { src: string }[];
  content: React.ReactNode | string;
};

const SimplifyCard: React.FC<SimplifyCardProps> = ({ logos, content }) => {
  return (
    <div className="bg-[#F2F2F7] rounded-3xl flex flex-col gap-6 p-6 min-w-[500px] max-md:min-w-[300px] flex-1 select-none">
      <div className="relative h-16">
        {logos.map((logo, index) => {
          return (
            <img
              src={logo.src}
              key={index}
              className={`rounded-full h-16 aspect-square absolute`}
              style={{ left: `${index * 50}px` }}
            />
          );
        })}
      </div>
      {content}
    </div>
  );
};

export default SimplifyCard;
