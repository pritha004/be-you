import { projectNature } from "../constants";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";

const ProjectNature = () => {
  const navigate = useNavigate();

  return (
    <section id="projectNature" className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container dark:text-white">
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
          <Button label="Read more" onClick={()=>navigate("/project-nature")}></Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectNature;
