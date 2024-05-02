import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { faqs } from "../constants";

const Faqs = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (id: number) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <section className=" sm:px-16 px-8 sm:py-24 py-28">
      <section id="newProducts" className="max-container">
        <div className="flex justify-center gap-5 mb-4">
          <h2 className="text-4xl font-bold font-palanquin capitalize">
            <span className="">Frequently Asked</span>{" "}
            <span className="text-skin">Questions</span>
          </h2>
        </div>

        <section className="grid w-full">
          <div className="flex justify-center items-center">
            <div className="flex flex-col flex-1 gap-y-4">
              {faqs.map((item) => (
                <div className="accordion-item" key={item.id}>
                  <div
                    className="accordion-title flex items-center justify-between border-b cursor-pointer"
                    onClick={() => toggle(item.id)}
                  >
                    <div className="text-lg font-semibold py-4">
                      {item.title}
                    </div>
                    <div>
                      {selected === item.id ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </div>
                  </div>
                  {selected === item.id && (
                    <div className="accordion-content text-slate-700">{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Faqs;
