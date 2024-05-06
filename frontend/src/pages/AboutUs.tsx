import useTheme from "../contexts/theme";

const AboutUs = () => {
  const { themeMode } = useTheme();
  return (
    <section className=" sm:px-16 px-8 sm:py-24 py-28 dark:text-slate-300">
      <section id="newProducts" className="max-container">
        <div className="mb-4">
          <h2 className="text-4xl font-bold font-palanquin capitalize my-4">
            <span className="">Welcome to</span>{" "}
            <span className="text-skin">BE U</span>{" "}
          </h2>
          <p className="text-2xl font-palanquin capitalize">
            your sanctuary for{" "}
            <span className="font-bold">minimal skincare </span>
            and <span className="font-bold">Makeup</span>
          </p>
        </div>
        <section className="grid w-full">
          <div className="flex justify-center items-center">
            <div className="flex flex-col flex-1 gap-y-8">
              <div className="grid grid-cols-2 gap-4 my-4">
                <p className="my-4 text-justify">
                  Our philosophy is simple:{" "}
                  <span className="font-bold">less is more</span>. In a world
                  where beauty routines are often cluttered with endless
                  products and complicated regimens, we bring a breath of fresh
                  air with our streamlined collection.
                  <br />
                  <br />
                  <span className="block font-semibold text-xl text-skin">
                    Our Journey
                  </span>{" "}
                  BE U was born from the desire to create a beauty brand that
                  stands for{" "}
                  <span className="font-bold">authenticity and simplicity</span>
                  . We believe that every individual possesses a unique charm
                  that doesn't require layers of makeup to be appreciated. Our
                  founder, a passionate advocate for natural beauty, envisioned
                  a brand that would empower people to{" "}
                  <span className="font-bold">
                    enhance their features, not hide them
                  </span>
                  .
                  <br />
                  <br />
                  <span className="block font-semibold text-xl text-skin">
                    Our Collection
                  </span>{" "}
                  Our carefully curated collection is designed to{" "}
                  <span className="font-bold">
                    nourish, protect, and highlight
                  </span>{" "}
                  your natural beauty. Each product is a testament to our
                  commitment to quality and sustainability. From our{" "}
                  <span className="font-bold">hydrating serums </span> to our{" "}
                  <span className="font-bold">lightweight foundations </span>,
                  every item is crafted to give you a flawless finish without
                  feeling heavy or overdone.
                </p>
                <img
                  className={`rounded ${
                    themeMode === "dark" ? "brightness-75" : ""
                  }`}
                  src="https://images.unsplash.com/photo-1620987278429-ab178d6eb547?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 my-4">
                <img
                  className={`rounded ${
                    themeMode === "dark" ? "brightness-75" : ""
                  }`}
                  src="https://images.unsplash.com/photo-1653784097013-786a8965ea3b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <p className=" text-justify">
                  <span className="block font-semibold text-xl text-skin">
                    Our Promise
                  </span>{" "}
                  At BE U, we promise to always uphold the values of{" "}
                  <span className="font-bold">minimalism and transparency</span>
                  . We use only the finest ingredients that are{" "}
                  <span className="font-bold">
                    ethical and kind to your skin
                  </span>
                  . Our products are free from unnecessary additives, ensuring
                  that what you're putting on your skin is{" "}
                  <span className="font-bold">pure and beneficial</span>.
                  <br />
                  <br />
                  <span className="block font-semibold text-xl text-skin">
                    Our Vision
                  </span>{" "}
                  We envision a world where beauty is a source of confidence,
                  not anxiety. A world where you can feel great about the
                  products you use, knowing they're{" "}
                  <span className="font-bold">
                    gentle on your skin and the environment
                  </span>
                  . Join us on this journey to embrace a more{" "}
                  <span className="font-bold">
                    mindful and radiant approach to beauty
                  </span>
                  .
                  <br />
                  <br />
                  <span className="block font-semibold text-xl text-skin">
                    Your Radiance, Effortlessly Enhanced
                  </span>{" "}
                  Discover the secret to enhancing your natural beauty with{" "}
                  <span className="font-bold">BE U</span>. Because when you feel
                  good, you glow differently.
                </p>
              </div>

              <p className="my-4 text-center text-xl font-palanquin">
                We invite you to explore our collection and find the perfect
                products to reveal your best self. <br />
                <br />
                <span className="text-chocolate-brown font-bold">BE U</span> -
                where beauty meets simplicity.
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default AboutUs;
