import { navLinks } from "../constants";
import { CiWheat } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
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
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <GiHamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
