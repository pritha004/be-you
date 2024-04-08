import { CiWheat } from "react-icons/ci";
import { socialMedia, footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="flex justify-center items-center ">
            <CiWheat size={40} />
          </a>
          <p className="mt-4 text-base text-justify leading-7 font-montserrat sm:max-w-sm">
            "Discover the secret to enhancing your natural beauty with our
            minimal skincare and makeup collection. Our products are carefully
            curated to accentuate your unique features, allowing your true
            radiance to shine through effortlessly.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-pale-skin"
                key={icon.alt}
              >
                <icon.logo className="text-black" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-around lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-xl font-bold leading-normal mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal hover:text-pale-skin"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          &copy;
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
