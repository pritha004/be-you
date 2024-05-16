import { CartCard } from "../components";
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

        {cart.map((product) => <CartCard {...product}/>)}
      </section>
    </section>
  );
};

export default Cart;
