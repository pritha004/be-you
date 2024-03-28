import { useState } from "react";
import { navLinks } from "../constants";
import { CiWheat } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="px-4 py-6 z-10 w-full text-white bg-black/50 fixed">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex justify-center items-center ">
          <CiWheat size={40} />
          <p>Be U</p>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href="item.href"
                className="font-montserrat leading-normal text-lg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:flex max-lg:justify-around max-lg:px-4 max-lg:gap-4">
          {isOpen && (
            <ul className="flex flex-col gap-y-2 px-2 text-right">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href="item.href"
                    className="font-montserrat leading-normal text-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {isOpen?<RxCross2 className="mt-1" onClick={handleMenu}/>:<GiHamburgerMenu onClick={handleMenu} />}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
