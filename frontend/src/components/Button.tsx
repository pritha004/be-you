interface Props {
  label: string;
  bgColor?: string;
  onHoverBg?: string;
  textColor?: string;
  onHoverText?: string;
  borderColor?: string;
  width?: string;
  onClick?: () => void;
}

const Button = ({
  label,
  bgColor,
  textColor,
  borderColor,
  onHoverBg,
  onHoverText,
  width,
  ...props
}: Props) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-6 py-2 border text-lg leading-none rounded-full ${width}
      ${
        bgColor
          ? `${bgColor} ${textColor} ${borderColor} hover:${onHoverBg} hover:${onHoverText}`
          : ` bg-chocolate-brown text-white`
      }`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
