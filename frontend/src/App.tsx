import {
  Hero,
  NewLaunches,
  UpgradeRoutine,
  ProjectNature,
  OurValues,
  Feedback,
  Footer,
} from "./sections";

export default function App() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <NewLaunches />
      </section>
      <section>
        <UpgradeRoutine />
      </section>
      <section>
        <ProjectNature />
      </section>
      <section>
        <OurValues />
      </section>
      <section>
        <Feedback />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
