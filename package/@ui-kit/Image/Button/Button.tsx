import clsx from "clsx";

type ButtonProps = {
  title: string;
  type?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  title,
  type = "primary",
  className,
  onClick,
}) => {
  const classes = clsx(
    "py-1 px-4 rounded-[124px] trasition-all duration-150",
    {
      "bg-gradient-to-b from-[#040a24de] to-[#20379c] text-white hover:opacity-90":
        type == "primary",
      "border-2 border-primary hover:shadow-md hover:shadow-primary/60":
        type == "outline",
    },
    className
  );

  return (
    <button onClick={onClick} className={classes}>
      {title}
    </button>
  );
};

export default Button;
