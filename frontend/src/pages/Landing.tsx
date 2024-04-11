import {
  Hero,
  NewLaunches,
  ShopByConcern,
  ProjectNature,
  MinimalMakeup,
  OurValues,
  Feedback,
} from "../sections";

const Landing = () => {
  return (
    <>
      <section className="">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <NewLaunches />
      </section>
      <section className=" bg-pale-skin/30 sm:px-16 px-8 sm:py-8 py-12">
        <ShopByConcern />
      </section>
      <section className="sm:px-16 px-8 sm:py-20 py-12">
        <ProjectNature />
      </section>
      <section className="sm:px-16 px-8 sm:py-20 py-12">
        <MinimalMakeup />
      </section>
      <section className="bg-pale-skin/30 sm:px-16 px-8 sm:py-8 py-12">
        <OurValues />
      </section>
      <section className="sm:px-16 px-8 sm:py-20 py-12">
        <Feedback />
      </section>
    </>
  );
};

export default Landing;
