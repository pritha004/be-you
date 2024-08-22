import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
    <section className=" sm:px-16 px-8 sm:py-24 py-28 dark:text-white">
      <section id="aboutUs" className="max-container">
        <div className="mb-4"></div>
        <section className="grid w-full">
          <div className="flex flex-col justify-center items-center">
                <TbError404 fontSize={250}/>
                <p className="my-4">
                  Oops! We can't find the page you are looking for.
                </p>
                <Link className="px-4 py-2 text-lg bg-chocolate-brown rounded text-white" to={"/"}>
                  Go to Home
                </Link>          
          </div>
        </section>
      </section>
    </section>
  );
};

export default NotFound;
