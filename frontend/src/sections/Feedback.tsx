import { ReviewCard } from "../components";
import { reviews } from "../constants";

const Feedback = () => {
  return (
    <section className="max-container dark:text-white">
      <h2 className="font-palanquin text-4xl text-center font-bold">
        What <span className="text-skin">Our Customers</span> Say?
      </h2>
      <div className="mt-8 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Feedback;
