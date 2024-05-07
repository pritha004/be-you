import { Link } from "react-router-dom";
import { ShopByConcernCategoryCard } from "../components";
import { shopByConcernCategories } from "../constants";

const ShopByConcern = () => {
  return (
    <section id="shopByConcern" className="max-container">
      <div className="flex flex-col justify-center gap-5 mb-4">
        <h2 className="text-4xl font-bold font-palanquin dark:text-white">
          Shop By <span className="text-chocolate-brown">Concern</span>
        </h2>
      </div>
      <div className="">
        <div className="grid justify-around lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {shopByConcernCategories.map((category) => (
            <Link to={`/${category.concern}`}>
              <ShopByConcernCategoryCard key={category.name} {...category} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByConcern;
