import { useParams } from "react-router-dom";
import { allProducts } from "../constants";
import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import { MdCurrencyRupee } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { Button } from "../components";
import useCart from "../contexts/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyAddedToCart = () => {
  toast.success("Added to cart!", {
    position: "top-right",
    theme: "colored",
    autoClose: 2000,
  });
};

const SingleProduct = () => {
  const { id } = useParams();
  const { cart, addToCart } = useCart();

  const [product, setProduct] = useState<Product>();

  const [quantity, setQuantity] = useState(1);

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
          <div className="grid grid-cols-2 gap-12 my-4 max-xl:grid-cols-1">
            <img src={product?.imgURL} className="rounded" />
            <div className="">
              <h2 className="text-pretty font-bold capitalize text-4xl my-6 text-skin">
                {product?.name}
              </h2>
              <p className="my-4">{product?.desc}</p>
              <p className="my-4 flex items-center text-xl font-semibold text-center font-montserrat leading-normal ">
                MRP: &nbsp;
                <MdCurrencyRupee />
                {product?.price}
              </p>
              <p className="my-4 flex items-center font-semibold text-center font-montserrat leading-normal ">
                Quantity: &nbsp;&nbsp;
                <span className="flex items-center gap-6">
                  <button
                    onClick={() =>
                      quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
                    }
                  >
                    <IoIosRemoveCircle fontSize={30} />
                  </button>
                  {quantity}
                  <button onClick={() => setQuantity(quantity + 1)}>
                    <IoIosAddCircle fontSize={30} />
                  </button>
                </span>
              </p>
              <div className="flex flex-wrap gap-2 mt-8 w-full">
                <Button
                  label="ADD TO CART"
                  borderColor="border-chocolate-brown"
                  width="w-full"
                  onClick={() => {
                    if (product) {
                      if (cart.length > 0) {
                        const foundItem = cart.find(
                          (item) => item.id === product.id
                        );
                        if (!foundItem) {
                          addToCart({ ...product, quantity });
                          notifyAddedToCart();
                        }
                      } else {
                        addToCart({ ...product, quantity });
                        notifyAddedToCart();
                      }
                    }
                  }}
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </section>
  );
};

export default SingleProduct;
