interface Props{
    label:string;
    bgColor?:string;
    textColor?:string;
    borderColor?:string
}

const Button = ({label, bgColor,textColor,borderColor}:Props) => {
    return (
      <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      ${bgColor? `${bgColor} ${textColor} ${borderColor}`:` bg-chocolate-brown text-white border-coral-red`}`}>
          {label}
      </button>
    )
  }
  
  export default Button