import { CartCard } from "../components";
import { BsFillBagHeartFill } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";
import useCart from "../contexts/cart";
import { CartProduct } from "../models/Product";

const Cart = () => {
  const { cart } = useCart();
  return (
    <section className=" sm:px-16 px-8 sm:py-24 py-28 dark:text-white">
      <section id="cart" className="max-container">
        <div className="flex justify-center gap-5 mb-4">
          <h2 className="text-4xl font-bold font-palanquin capitalize">
            <span className="">Shopping</span>{" "}
            <span className="text-skin">Cart</span>
          </h2>
        </div>
        {cart.length > 0 ? (
          <div>
            {cart.map((product) => (
              <CartCard key={product.id} {...product} />
            ))}
            <div className="md:border my-2"></div>
            <div className="grid md:grid-cols-12 w-full max-md:shadow-md max-md:p-2 max-md:rounded-md max-md:border max-sm:w-full dark:text-white max-md:bg-white max-md:dark:bg-[#0c1324] max-md:dark:border-black">
              <div className="flex col-span-full md:col-span-8"></div>
              <div className="px-4 flex col-span-full md:col-span-4 justify-between items-center md:justify-center gap-x-4 md:gap-x-10">
                <span className="text-xl font-semibold">Total Amount:</span>
                <p className="font-montserrat leading-normal flex items-center text-xl font-semibold">
                  <MdCurrencyRupee />
                  {cart.reduce(function (a, b: CartProduct) {
                    return a + b.price * b.quantity;
                  }, 0)}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-4 flex flex-col items-center justify-center gap-4">
            <BsFillBagHeartFill fontSize={200} className="text-rose-400/80" />
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-lg">Hey, it feels so light!</p>
              <p className="text-center italic dark:text-slate-400">
                There is nothing in your bag. Let's add some items.
              </p>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default Cart;
