import { Footer } from "./sections";

import { Nav } from "./components";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <main>
        <Outlet />
      </main>
      <section className="bg-stone-800 text-white px-8 p-8">
        <Footer />
      </section>
    </main>
  );
}
