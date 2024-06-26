import { Link } from "react-router-dom";
import { ProductCard } from "../components";
import { newLaunchProducts } from "../constants";

const NewLaunches = () => {
  return (
    <section id="newProducts" className="max-container">
      <div className="flex flex-row justify-between items-end gap-5 mb-4">
        <h2 className="text-4xl font-bold font-palanquin dark:text-white">
          <span className="text-skin">New</span> Launches
        </h2>
        <Link
          to="/products"
          className=" text-amber-900 dark:text-white font-semibold hover:text-chocolate-brown hover:underline"
        >
          View All
        </Link>
      </div>
      <div className="grid justify-around lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {newLaunchProducts.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default NewLaunches;
