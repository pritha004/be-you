import React, { useId } from "react";

type Props = {
  options: string[];
  label: string;
  className: string;
  // Add any other props you expect to pass to the select element
};

const Select = React.forwardRef<HTMLSelectElement, Props>(
  ({ options, label, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className={`w-full`}>
        <select
          {...props}
          id={id}
          ref={ref}
          className={`autofill:shadow-innerColor px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-chocolate-brown w-full ${className}`}
        >
          <option value="" selected disabled>
            {label}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className={`hover:bg-chocolate-brown`}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
