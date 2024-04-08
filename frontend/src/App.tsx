import {
  Hero,
  NewLaunches,
  ShopByConcern,
  ProjectNature,
  OurValues,
  Feedback,
  Footer,
} from "./sections";

import { Nav } from "./components";

export default function App() {
  return (
    <main  className='relative'>
      <Nav/>
      <section className="">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <NewLaunches />
      </section>
      <section className=" bg-pale-skin/30 sm:px-16 px-8 sm:py-8 py-12">
        <ShopByConcern />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <ProjectNature />
      </section>
      <section className="sm:px-16 px-8 sm:pt-4 sm:pb-24 py-12">
        <OurValues />
      </section>
      <section className="sm:px-16 px-8 sm:pt-4 sm:pb-24 py-12">
        <Feedback />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
