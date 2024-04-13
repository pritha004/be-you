import { allProducts } from "../constants";
import { ProductCard } from "../components";
import { Product } from "../models/Product";
import { useEffect, useState } from "react";

type Props = {
  type?: string;
};

const AllProducts = ({ type }: Props) => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    const filterProducts = allProducts.filter(
      (product) => product.category.toLowerCase() === type
    );
    if (filterProducts) {
      setProducts(filterProducts);
    } else {
      setProducts(allProducts);
    }
  }, [type]);

  return (
    <>
      <section className=" sm:px-16 px-8 sm:py-24 py-28">
        <section id="newProducts" className="max-container">
          <div className="flex justify-center gap-5 mb-4">
            <h2 className="text-4xl font-bold font-palanquin capitalize">
             {type}
            </h2>
          </div>
          <div className="grid justify-around lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {products?.map((product: Product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default AllProducts;
