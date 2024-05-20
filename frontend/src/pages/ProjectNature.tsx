import { FaQuoteLeft } from "react-icons/fa";
import { projectNature2 } from "../constants";

const ProjectNature = () => {
  return (
    <section className="sm:px-16 px-8 sm:py-24 py-28 dark:text-white">
      <section id="project-nature" className="flex max-container">
        <div className="flex flex-col gap-5 mb-4">
          <h2 className="text-4xl font-bold font-palanquin capitalize">
            <span className="">Project</span>{" "}
            <span className="text-skin">Nature</span>
          </h2>
          <div className="flex flex-1 justify-center items-center gap-x-8 max-lg:flex-col max-lg:gap-y-4">
            <div className="flex flex-col flex-1">
              <p className="mt-6 lg:max-w-lg text-justify">
                At Project Nature, we believe that every action counts. Our
                commitment to the planet goes beyond mere words—it’s a promise
                we make with every purchase you make. Welcome to a world where
                shopping isn’t just about receiving; it’s about giving back to
                nature.
                <span className="block font-palanquin text-xl text-center py-4 px-2 font-semibold">
                  Planting Trees, One Product at a Time
                </span>
                For every item you buy, we pledge to plant a tree. Yes, you read
                that right! With each purchase, you’re not just adding to your
                wardrobe or home decor; you’re contributing to a greener,
                healthier Earth. Our mission is simple: let’s grow a forest of
                hope and sustainability together.
                <br />
                <br />
                Let’s turn every purchase into a seed of change. Let’s transform
                barren lands into lush forests. Let’s leave a legacy for
                generations to come. Welcome to Project Nature—where fashion
                meets purpose, and every tree planted is a step toward a
                brighter, greener future.
              </p>
            </div>

            <div className="flex flex-1 justify-center items-center">
              <img
                src={projectNature2}
                alt="projectnature"
                width={600}
                className="object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div className="flex justify-center py-4 px-2 text-2xl gap-x-2 ">
            <FaQuoteLeft />
            <p className="mt-3 max-w-sm text-justify text-chocolate-brown font-semibold italic ">
              Buy. Plant. Thrive.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectNature;
