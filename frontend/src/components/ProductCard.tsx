import { FaStar } from "react-icons/fa";
import { Product } from "../models/Product";

const ProductCard = ({ imgURL, name, price, rating, reviewsNum }:Product) => {
  return (
    <div className="flex flex-1 flex-col w-full rounded-md border max-sm:w-full shadow-lg">
      <img
        src={imgURL}
        alt={name}
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="mt-8 flex justify-center gap-2.5">
        <p className="font-montserrat leading-normal">
          <span className="flex justify-center items-center gap-1">
            <FaStar className="text-chocolate-brown" />
            <span>{rating}</span>
            <span className="text-sm text-slate-500">({reviewsNum} reviews)</span>
          </span>
        </p>
      </div>
      <div className="flex flex-col justify-center mt-2">
        <h3 className="m-1 text-md text-center leading-normal font-semibold font-palanquin">
          {name}
        </h3>
        <p className="m-1 text-center font-montserrat leading-normal">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
