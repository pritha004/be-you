import { heroImage } from "../constants"

const Hero = () => {
  return (
    <section id="Home" className="grid max-container">
      <div className="bg-cover bg-center">
       <img src={heroImage} alt="" className="h-full w-full object-cover"/>
      </div>
    </section>
  )
}

export default Hero