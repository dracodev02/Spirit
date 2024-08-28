type WhatNextCardProps = {
  subTitle: string;
  title: string;
  description: string;
};

const WhatNextCard: React.FC<WhatNextCardProps> = ({
  subTitle,
  title,
  description,
}) => {
  return (
    <div className="px-6 py-8 flex gap-2 flex-col flex-1 min-w-[400px] max-md:min-w-[300px] bg-[#F2F2F7] rounded-3xl select-none">
      <p className="text-[#5856D6]">{subTitle}</p>
      <p className="text-[22px] max-md:text-base font-sf-pro-bold">{title}</p>
      <p className="text-grays2 text-sm">{description}</p>
    </div>
  );
};

export default WhatNextCard;
