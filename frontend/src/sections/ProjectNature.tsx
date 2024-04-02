import { projectNature } from "../constants";

const ProjectNature = () => {
  return (
    <section id="newProducts" className="max-container">
      <div className="flex justify-center gap-5 mb-4">
        <div className="flex flex-col text-center">
          <h2 className="text-4xl font-bold font-palanquin">
            <span className=" text-chocolate-brown">BE U</span> |{" "}
            <span className=" text-chocolate-brown">Project</span>{" "}
            <span className="text-skin">Nature</span>
          </h2>
          <p className="text-xl text-center">
            Every time you purchase a{" "}
            <span className="font-bold font-palanquin">BE U</span> , you plant a
            tree.
          </p>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="rounded-lg shadow-lg shadow-chocolate-brown">
          <img
            src={projectNature}
            alt="trees"
            className="rounded object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectNature;
