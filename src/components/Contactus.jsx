import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      {/* CONTACT SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-yellow-500 uppercase tracking-wider font-semibold">
              Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Start Your Global Career Journey
            </h2>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
              Get in touch with our recruitment experts and discover
              overseas employment opportunities tailored to your skills.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div className="bg-[#08142c] text-white rounded-3xl p-10">

              <h3 className="text-3xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">

                <div className="flex gap-4">
                  <Phone className="text-yellow-400" />

                  <div>
                    <h4 className="font-semibold text-lg">
                      Phone Numbers
                    </h4>

                    <p>+91 99879 56826</p>
                    <p>+91 88502 16636</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-yellow-400" />

                  <div>
                    <h4 className="font-semibold text-lg">
                      Email Address
                    </h4>

                    <p>crewconnectglobal@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-yellow-400" />

                  <div>
                    <h4 className="font-semibold text-lg">
                      Office Location
                    </h4>

                    <p>Mumbai, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-yellow-400" />

                  <div>
                    <h4 className="font-semibold text-lg">
                      Working Hours
                    </h4>

                    <p>Mon - Sat : 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

              </div>

              {/* Extra Image */}
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
                alt="Career Guidance"
                className="mt-10 rounded-2xl h-64 w-full object-cover"
              />

            </div>

              {/* RIGHT SIDE */}
<div className="bg-white rounded-3xl overflow-hidden shadow-xl">

  <img
    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
    alt="Global Careers"
    className="h-72 w-full object-cover"
  />

  <div className="p-10">

    <span className="text-yellow-500 font-semibold uppercase tracking-wider">
      Why Choose Us
    </span>

    <h3 className="text-3xl font-bold mt-4">
      Your Gateway To Global Opportunities
    </h3>

    <p className="text-gray-600 mt-6 leading-relaxed">
      Global Crew Connect helps skilled and unskilled workers
      secure overseas employment opportunities with trusted
      employers across Saudi Arabia, UAE, Dubai and Australia.
    </p>

    <div className="mt-8 space-y-4">

      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <p>Verified International Employers</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <p>Professional Career Guidance</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <p>End-To-End Recruitment Support</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <p>Opportunities Across Multiple Countries</p>
      </div>

    </div>

    <a
      href="tel:+919987956826"
      className="inline-block mt-8 bg-[#08142c] text-white px-8 py-4 rounded-xl hover:bg-[#102447] transition"
    >
      Call Us Now
    </a>

  </div>
</div>

            </div>

          </div>

      </section>

      {/* WHY CONTACT US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-yellow-500 uppercase tracking-wider font-semibold">
              Why Contact Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Your Career Journey Starts Here
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Fast Response
              </h3>

              <p className="text-gray-600">
                Our team responds quickly to guide you through
                available overseas opportunities.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Verified Opportunities
              </h3>

              <p className="text-gray-600">
                We connect candidates with trusted employers
                and genuine job openings.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Complete Support
              </h3>

              <p className="text-gray-600">
                From application to departure, we assist you
                throughout the recruitment process.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="relative rounded-3xl overflow-hidden">

            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
              alt="Global Careers"
              className="h-[450px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#08142c]/75"></div>

            <div className="absolute inset-0 flex items-center justify-center text-center px-6">

              <div>

                <h2 className="text-4xl md:text-6xl font-bold text-white">
                  Ready To Work Abroad?
                </h2>

                <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
                  Contact Global Crew Connect today and explore
                  exciting international career opportunities
                  across Gulf countries and beyond.
                </p>

                

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}