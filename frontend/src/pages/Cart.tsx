import { CartCard } from "../components";
import { BsFillBagHeartFill } from "react-icons/bs";
import useCart from "../contexts/cart";

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
              <CartCard {...product} />
            ))}
          </div>
        ) : (
          <div className="pt-4 flex flex-col items-center justify-center gap-4">
            <BsFillBagHeartFill fontSize={200} className="text-rose-400/80"/>
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-lg">Hey, it feels so light!</p>
              <p className="text-center italic dark:text-slate-400">There is nothing in your bag. Let's add some items.</p>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default Cart;
