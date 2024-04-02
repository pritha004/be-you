import ShopByConcernCategoryCard from "../components/ShopByConcernCategoryCard";
import { shopByConcernCategories } from "../constants";

const ShopByConcern = () => {
  return (
    <section id="newProducts" className="max-container">
      <div className="flex flex-col justify-center gap-5 mb-4">
        <h2 className="text-4xl font-bold font-palanquin">
          Shop By <span className="text-chocolate-brown">Concern</span>
        </h2>
      </div>
      <div className="">
        <div className="grid justify-around lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {shopByConcernCategories.map((category) => (
            <ShopByConcernCategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByConcern;
