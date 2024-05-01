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
    <section className="sm:px-16 px-8 sm:py-24 py-28">
      <section id="project-nature" className="flex max-container">
        <div className="flex flex-col gap-5 mb-4">
          <h2 className="text-4xl font-bold font-palanquin capitalize">
            <span className="">Frequently Asked</span>{" "}
            <span className="text-skin">Questions</span>
          </h2>
          <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-col flex-1">
              {faqs.map((item) => (
                <div className="accordion-item" key={item.id}>
                  <div
                    className="accordion-title flex items-center justify-between"
                    onClick={() => toggle(item.id)}
                  >
                    <div>{item.title}</div>
                    <div>
                      {selected===item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                  </div>
                  {selected===item.id && (
                    <div className="accordion-content">{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Faqs;
