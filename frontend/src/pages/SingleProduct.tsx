import { useParams } from "react-router-dom";
import { allProducts } from "../constants";
import { useEffect, useState } from "react";
import { Product } from "../models/Product";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const foundProduct = allProducts.find(
      (product) => product.id === Number(id)
    );
    setProduct(foundProduct);
  }, [id]);
  return (
    <section className=" sm:px-16 px-8 sm:py-24 py-28 dark:text-slate-300">
      <section id="newProducts" className="max-container">
        <div className="mb-4">
          <h2 className="text-4xl font-bold font-palanquin capitalize my-4">
            <span className=""></span> <span className="text-skin">{id}</span>{" "}
          </h2>
          {product?.name}
          {product?.price}
        </div>
      </section>
    </section>
  );
};

export default SingleProduct;
