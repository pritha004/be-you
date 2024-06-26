import { useState } from "react";
import { navLinks } from "../constants";
import { CiWheat } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import useTheme from "../contexts/theme";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "./Badge";
import useCart from "../contexts/cart";

const Nav = () => {
  const { themeMode } = useTheme();
  const {cart}=useCart();

  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={`px-4 py-6 z-10 w-full ${
        themeMode === "light"
          ? "text-black bg-white/60"
          : "text-white bg-black/50"
      }  fixed`}
    >
      <nav className="flex justify-between items-center max-container">
        <Link to="/" className="flex justify-center items-center ">
          <CiWheat size={40} />
          <p className="font-palanquin text-lg font-bold">BE U</p>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="font-sans leading-normal text-lg font-semibold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <div className="flex gap-x-3">
            {!isOpen && (
              <>
                <ThemeBtn />
                <Link to="/cart" className="relative">
                  <FaShoppingCart
                    className=" text-slate-700 dark:text-white"
                    fontSize={30}
                  />  
                  {cart.length>0 && <Badge label={cart.length} />}
                    
                </Link>
              </>
            )}
          </div>
          <div className="hidden max-lg:flex max-lg:justify-around max-lg:px-4 max-lg:gap-4">
            {isOpen && (
              <ul className="flex flex-col gap-y-2 px-2 text-right">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="font-sans leading-normal text-lg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {isOpen ? (
              <RxCross2 className="mt-1" onClick={handleMenu} fontSize={25} />
            ) : (
              <GiHamburgerMenu onClick={handleMenu} fontSize={30} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
