import { ReviewCard } from "../components";
import { reviews } from "../constants";

const Feedback = () => {
  return (
    <section className="max-container">
      <h2 className="font-palanquin text-4xl font-bold">
        What Our <span className="text-chocolate-brown">Customers</span> Say?
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
