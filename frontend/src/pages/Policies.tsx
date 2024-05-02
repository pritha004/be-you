import { policies } from "../constants";

const Policies = () => {
  return (
    <section className=" sm:px-16 px-8 sm:py-24 py-28">
      <section id="newProducts" className="max-container">
        <div className="flex justify-center gap-5 mb-4">
          <h2 className="text-4xl font-bold font-palanquin capitalize">
            <span className="">Our</span>{" "}
            <span className="text-skin">Policies</span>
          </h2>
        </div>

        <section className="grid w-full">
          <div className="flex justify-center items-center">
            <div className="flex flex-col flex-1 gap-y-4">
              {policies.map((policy) => (
                <div className="my-4" key={policy.id}>
                  <div className="flex text-xl items-center py-2 gap-x-2">
                    <policy.logo fontSize={40} className="text-chocolate-brown" />
                    <h4 className="font-bold">{policy.title}</h4>
                  </div>
                  <div>
                    <p className="text-slate-700">{policy.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Policies;
