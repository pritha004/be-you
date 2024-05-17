interface Props {
  label: number;
}

const Badge = ({ label, ...props }: Props) => {
  return (
    <span
      className={`absolute -top-2 left-5 flex justify-center items-center bg-red-700 text-white rounded-full h-5 w-5`}
      {...props}
    >
      {label}
    </span>
  );
};

export default Badge;
