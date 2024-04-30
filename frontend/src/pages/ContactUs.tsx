import { Button } from "../components";

const ContactUs = () => {
  return (
    <section className="bg-pale-skin/30 sm:px-16 px-8 sm:py-24 py-28">
      <section id="contactUs" className="max-container">
        <div className="flex gap-x-2 justify-around">

        
        <div className="flex flex-col gap-5 mb-4">
          <h2 className="text-4xl font-bold font-palanquin capitalize">
            Get In <span className="text-chocolate-brown">Touch</span>
          </h2>
          <p className="text-xl font-semibold">
            Our friendly team would love to hear from you!
          </p>
          <div>
            <form className="flex flex-col gap-2 text-md">
              <div className="flex items-center gap-2 ">
                <label className="inline-block mb-1 pl-1 w-28">Name</label>
                <input
                  type="text"
                  className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-chocolate-brown`}
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="inline-block mb-1 pl-1 w-28">Email</label>
                <input
                  type="email"
                  className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-chocolate-brown`}
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="inline-block mb-1 pl-1 w-28">Phone number</label>
                <input
                  type="text"
                  className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-chocolate-brown`}
                />
              </div>
              <div className="flex items-start gap-2">
                <label className="inline-block mb-1 pl-1 w-28">Message</label>
                <textarea
                  name="Text1"
                  cols={24}
                  rows={4}
                  className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-chocolate-brown`}
                ></textarea>
              </div>
              <div className="flex flex-wrap gap-2 mt-8 max-lg:justify-center">
                <Button label="Send Message" />
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center max-lg:hidden">
            <img className="h-[450px]" src="https://images.unsplash.com/photo-1631730486784-5456119f69ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2tpbmNhcmUlMjBwcm9kdWN0c3xlbnwwfDF8MHx8fDI%3D"/>
        </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
