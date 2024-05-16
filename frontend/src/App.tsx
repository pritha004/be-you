import { Footer } from "./sections";

import { Nav } from "./components";
import { Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "./contexts/theme";
import { CartProvider } from "./contexts/cart";
import { CartProduct } from "./models/Product";

function useScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Triggered when the path changes
}

export default function App() {
  useScrollToTop();

  // theme context state and methods
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  //cart context state and methods
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    setCart((prev) => [...prev, product]);
  };

  const updateProductQuantity = (id: number, op: string) => {
    setCart((prev) =>
      prev.map((prevProduct) =>
        prevProduct.id === id
          ? op === "+"
            ? { ...prevProduct, quantity: prevProduct.quantity + 1 }
            : op === "-"
            ? { ...prevProduct, quantity: prevProduct.quantity - 1 }
            : prevProduct
          : prevProduct
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((prevProduct) => prevProduct.id !== id));
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
      <CartProvider
        value={{ cart, addToCart, updateProductQuantity, removeFromCart }}
      >
        <main className="relative dark:bg-black">
          <Nav />
          <main>
            <Outlet />
          </main>
          <section className="bg-stone-800 dark:bg-[#0B1120] text-white px-8 p-8">
            <Footer />
          </section>
        </main>
      </CartProvider>
    </ThemeProvider>
  );
}
