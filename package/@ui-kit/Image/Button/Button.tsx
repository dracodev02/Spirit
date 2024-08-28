import clsx from "clsx";

type ButtonProps = {
  title: string;
  type?: "primary" | "outline";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  title,
  type = "primary",
  className,
}) => {
  const classes = clsx(
    "py-1 px-4 rounded-[124px]",
    {
      "bg-gradient-to-b from-[#040a24de] to-[#20379c] text-white":
        type == "primary",
      "border-2 border-primary": type == "outline",
    },
    className
  );

  return <button className={classes}>{title}</button>;
};

export default Button;
