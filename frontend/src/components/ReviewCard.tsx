import { FaQuoteLeft } from "react-icons/fa";
import { FaStar  } from "react-icons/fa";

interface Props {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({ imgURL, customerName, rating, feedback }: Props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[100px] h-[100px] bg-slate-300 shadow-md shadow-chocolate-brown"
      />
      <div className="flex gap-x-2">
        <FaQuoteLeft />
        <p className="mt-3 max-w-sm text-justify text-chocolate-brown italic ">
          {feedback}
        </p>
      </div>
      <div className="mt-3 flex justify-center items-center gap-1">
        {Array(5)
          .fill(null)
          .map((_, i) => {
            const ratingValue = i + 1;
            return (
              <div key={i}>
                <FaStar 
                  className="star"
                  color={ratingValue <= rating ? "#D5B4B4" : "#e4e5e9"}
                  size={20}
                />
              </div>
            );
          })}
      </div>
      <p className="mt-1 text-xl font-bold">{customerName}</p>
    </div>
  );
};

export default ReviewCard;
