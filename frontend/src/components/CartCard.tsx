import { MdCurrencyRupee } from "react-icons/md";
import { CartProduct } from "../models/Product";
import useCart from "../contexts/cart";
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";

const CartCard = ({ id, imgURL, name, price, quantity }: CartProduct) => {
  const { updateProductQuantity, removeFromCart } = useCart();

  return (
    <div className="my-3 grid md:grid-cols-12 gap-y-4 w-full max-md:shadow-md max-md:p-2 max-md:rounded-md max-md:border max-sm:w-full dark:text-white max-md:bg-white max-md:dark:bg-[#0c1324] max-md:dark:border-black">
      <div className="flex col-span-full md:col-span-6">
        <img
          src={imgURL}
          alt={name}
          className="h-36 w-36 rounded-lg border object-cover"
        />
        <div className="px-4 flex flex-col justify-center gap-y-2">
          <h3 className="text-md leading-normal font-semibold font-palanquin">
            {name}
          </h3>
          <p className="font-montserrat leading-normal flex items-center">
            <MdCurrencyRupee />
            {price}
          </p>
        </div>
      </div>
      <div className="px-4 flex col-span-full md:col-span-3 md:justify-center">
        <p className="flex items-center font-semibold text-center font-montserrat leading-normal ">
          <span className="flex items-center gap-4">
            <button
              onClick={() =>
                quantity > 1
                  ? updateProductQuantity(id, "-")
                  : updateProductQuantity(id, "")
              }
            >
              <IoIosRemoveCircle fontSize={30} />
            </button>
            {quantity}
            <button onClick={() => updateProductQuantity(id, "+")}>
              <IoIosAddCircle fontSize={30} />
            </button>
          </span>
        </p>
      </div>
      <div className="px-4 flex col-span-full justify-between md:col-span-3 md:justify-center gap-x-4 md:gap-x-10">
        <p className="font-montserrat leading-normal flex items-center font-bold">
          <MdCurrencyRupee />
          {price * quantity}
        </p>
        <button onClick={() => removeFromCart(id)}>
          <RiDeleteBinFill fontSize={30} />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
