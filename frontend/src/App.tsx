import { Footer } from "./sections";

import { Nav } from "./components";
import { Outlet } from "react-router-dom";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Triggered when the path changes
}

export default function App() {
  useScrollToTop();
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
