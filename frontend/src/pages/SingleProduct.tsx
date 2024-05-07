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
    <section className=" sm:px-16 px-8 sm:py-24 py-28 dark:text-white">
      <section id="product" className="max-container">
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-4 my-4">
            <img src={product?.imgURL} />
            <div className="">
              <h2 className="text-justify font-bold capitalize text-4xl">{product?.name}</h2>
              <p>{product?.desc}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SingleProduct;
