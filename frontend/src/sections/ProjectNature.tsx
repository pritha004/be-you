import { projectNature } from "../constants";
import { Button } from "../components";

const ProjectNature = () => {
  return (
    // <section id="projectNature" className="max-container">
    //   <div className="flex gap-5 mb-4">
    //     <div className="flex flex-col">
    //       <h2 className="text-4xl font-bold font-palanquin">
    //         <span className=" text-chocolate-brown">BE U</span> |{" "}
    //         <span className=" text-chocolate-brown">Project</span>{" "}
    //         <span className="text-skin">Nature</span>
    //       </h2>

    //     </div>
    //   </div>
    //   <div className="flex justify-center ">
    //     <div className=" rounded-lg shadow-lg shadow-chocolate-brown">
    //       <img
    //         src={projectNature}
    //         alt="trees"
    //         className="rounded object-contain"
    //         height="30%"
    //       />
    //     </div>
    //     <p className="text-xl text-center">
    //         Every time you purchase a{" "}
    //         <span className="font-bold font-palanquin">BE U</span> , you plant a
    //         tree.
    //       </p>
    //   </div>
    // </section>

    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex flex-1 justify-center items-center">
        <img
          src={projectNature}
          alt="projectnature"
          width={500}
          height={300}
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-skin">BE U</span>{" "}
          <span className="">|</span> {" "}
          <span className="">Project</span>{" "}
          <span className="text-skin">Nature</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Welcome to <span className="font-bold">Project Nature</span>, our commitment to the planet.
         
        </p>
        <p className="mt-6 lg:max-w-lg text-justify">
        For every purchase you make, we pledge to plant a tree. This is our way of giving back to nature, ensuring that with each product you buy, you’re not just receiving, but also contributing to a greener, healthier Earth. Together, let’s grow a forest of hope and sustainability.
        </p>
        <div className="flex flex-wrap gap-2 mt-8">
          <Button label="Read more"/>
        </div>
      </div>
    </section>
  );
};

export default ProjectNature;
