import { heroImage } from "../constants";
import useTheme from "../contexts/theme";

const Hero = () => {
  const { themeMode } = useTheme();
  return (
    <section id="Home" className="grid max-container">
      <div className="bg-cover bg-center">
        <img
          src={heroImage}
          alt=""
          className={`h-full w-full object-cover ${
            themeMode === "dark" ? "brightness-75" : ""
          } `}
        />
      </div>
    </section>
  );
};

export default Hero;
