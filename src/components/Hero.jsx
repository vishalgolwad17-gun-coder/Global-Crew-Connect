import { Phone, ArrowRight } from "lucide-react";
import heroImg from "../images/heroimg.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Hero() {
  const features = [
    {
      title: "Verified Employers",
      description:
        "We partner with trusted international employers to provide secure overseas job opportunities.",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&q=80",
    },
    {
      title: "Career Guidance",
      description:
        "Professional consultation and support throughout your recruitment journey.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    },
    {
      title: "Global Opportunities",
      description:
        "Explore rewarding careers across UAE, Saudi Arabia, Australia and beyond.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-[#08142c] text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full border border-yellow-400/20 text-sm">
              Overseas Recruitment & Career Consultancy
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mt-6">
              Your Potential.
              <br />
              Global Opportunities.
              <br />
              <span className="text-yellow-400">
                Better Future.
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
              Connecting skilled and unskilled workers with
              international employers across Gulf countries,
              UAE, Saudi Arabia, Dubai and Australia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact" className="w-full sm:w-auto bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition text-center">
                Apply Now
              </Link>

              <Link
                to="/about"
                className="border border-yellow-400 px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition text-center"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-10 space-y-3">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                +91 99879 56826
              </p>

              <p className="flex items-center gap-2">
                <Phone size={18} />
                +91 88502 16636
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full"></div>

            <img
              src={heroImg}
              alt="Career Abroad"
              className="relative z-10 rounded-3xl shadow-2xl w-full max-h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">

        <div className="absolute w-[700px] h-[700px] bg-blue-100 rounded-full blur-3xl opacity-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">

            <span className="text-yellow-500 font-semibold uppercase tracking-widest">
              About Us
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#08142c] mt-4">
              Building Better Futures Through Global Opportunities
            </h2>

            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
              Global Crew Connect helps skilled and unskilled workers
              secure overseas employment opportunities by connecting
              them with trusted employers and providing professional
              recruitment support.
            </p>

            <Link
  to="/about"
  className="mt-8 inline-flex items-center gap-2 bg-[#08142c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#102447] transition duration-300 group"
>
  Learn More

  <ArrowRight
    size={18}
    className="group-hover:translate-x-1 transition-transform"
  />
</Link>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 md:h-56 w-full object-cover"
                />

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#08142c] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}