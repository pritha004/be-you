import { BsTransparency } from "react-icons/bs";
import { GiTransparentTubes } from "react-icons/gi";
import { FaBottleDroplet } from "react-icons/fa6";

const OurValues = () => {
  return (
    <section id="ourValues" className="max-container">
      <div className="flex flex-col">
        <h2 className="text-4xl text-center font-bold font-palanquin mb-6">
          Our <span className="text-chocolate-brown">Values</span>
        </h2>
      </div>

      <div className="mt-4">
        <div className="grid justify-around md:grid-cols-3 sm:grid-cols-1 gap-10">
          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <div className="flex justify-center">
              <BsTransparency fontSize={50} />
            </div>
            <div className="flex justify-center">
              <h3 className="m-1 text-xl text-center text-chocolate-brown leading-normal font-bold font-palanquin">
                Transparency
              </h3>
            </div>
            <div className="flex justify-center">
              <p className="text-center">
                No hidden ingredients, no opacity. Full disclosure of
                ingredients used & their concentration.
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <div className="flex justify-center">
              <GiTransparentTubes fontSize={50} />
            </div>
            <div className="flex justify-center">
              <h3 className="m-1 text-xl text-center text-chocolate-brown  leading-normal font-bold font-palanquin">
                Efficacy
              </h3>
            </div>
            <div className="flex justify-center">
              <p className="text-center">
                Each product is launched on back of proven science only.       
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <div className="flex justify-center">
              <FaBottleDroplet fontSize={50} />
            </div>
            <div className="flex justify-center">
              <h3 className="m-1 text-xl text-center text-chocolate-brown  leading-normal font-bold font-palanquin">
                Affordable
              </h3>
            </div>
            <div className="flex justify-center">
              <p className="text-center">
                Skincare, providing affordable, quality products and skin health
                education for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
