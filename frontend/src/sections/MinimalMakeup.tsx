import { ProductCard } from "../components";
import { minimalMakeupProducts } from "../constants";
import { Link } from "react-router-dom";

const MinimalMakeup = () => {
  return (
    <section id="newProducts" className="max-container">
      <div className="flex flex-row justify-between items-end gap-5 mb-4">
        <h2 className="text-4xl font-bold font-palanquin dark:text-slate-300">
          Discover <span className="text-skin">Your</span> Essence
        </h2>
        <Link
          to="/products"
          className=" text-amber-900 dark:text-white font-semibold hover:text-chocolate-brown hover:underline"
        >
          View All
        </Link>
      </div>
      <div className="grid justify-around lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {minimalMakeupProducts.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default MinimalMakeup;
