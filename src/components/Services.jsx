import { ArrowRight } from "lucide-react";
import Jobs from "./Jobs";
import Footer from "./Footer";

const services = [
  {
    title: "International Job Placement",
    description:
      "Connecting candidates with verified employers across multiple countries.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "Gulf Country Recruitment",
    description:
      "Specialized recruitment solutions for UAE, Saudi Arabia and Gulf regions.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    title: "Career Guidance",
    description:
      "Professional consultation to help candidates build successful international careers.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    title: "Skilled & Unskilled Placement",
    description:
      "Opportunities for workers across construction, logistics, security and more.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  },
];

export default function Services() {
  return (
    <>
    <section
      id="services"
      className="py-24 bg-[#08142c] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 uppercase tracking-wider">
            What We Offer
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Our Recruitment Services
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            We provide end-to-end recruitment solutions and overseas
            career opportunities for skilled and unskilled workers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl h-[350px]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#08142c] via-[#08142cb7] to-transparent"></div>

              <div className="absolute bottom-0 p-8">
                <h3 className="text-3xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-200 mb-4">
                  {service.description}
                </p>

                <button className="flex items-center gap-2 text-yellow-400 font-semibold">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
    <Jobs/>
    <Footer/>
    </>
  );
}