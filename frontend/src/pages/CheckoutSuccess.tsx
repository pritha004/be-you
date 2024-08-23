import { Link } from 'react-router-dom';
import { AiOutlineCheck } from "react-icons/ai";
import { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/cart';

const Success = () => {
  const { resetCart } = useContext(CartContext);

  useEffect(() => {
    console.log("reset");
    
    resetCart();

  }, []);
  
  return (
    <section className=" sm:px-16 px-8 sm:py-24 py-28 dark:text-white">
      <section id="aboutUs" className="max-container">
        <div className="mb-4"></div>
        <section className="grid w-full">
          <div className="flex flex-col justify-center items-center">
                <div className='flex justify-center items-center my-2 p-2 rounded-full border-4 border-chocolate-brown text-chocolate-brown'>
                    <AiOutlineCheck fontSize={100} />
                </div>
                <p className="my-4 text-center">
                  <p className='font-bold text-2xl'>Your Order is Confirmed!</p>
                  We received your purchase request; we'll be in touch shortly!
                </p>
                <Link className="my-4 px-4 py-2 text-lg bg-chocolate-brown rounded text-white" to={"/"}>
                  Go to Home
                </Link>          
          </div>
        </section>
      </section>
    </section>
  );
};

export default Success;