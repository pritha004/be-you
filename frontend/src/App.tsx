import { Footer } from "./sections";

import { Nav } from "./components";
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme";

function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Triggered when the path changes
}

export default function App() {
  useScrollToTop();

  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.remove("light", "dark");
      htmlElement.classList.add(themeMode);
    }
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <main className="relative dark:bg-black">
        <Nav />
        <main>
          <Outlet />
        </main>
        <section className="bg-stone-800 dark:bg-[#0B1120] text-white px-8 p-8">
          <Footer />
        </section>
      </main>
    </ThemeProvider>
  );
}
