import { Clock3, Users, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background Circle */}
      <div className="absolute w-[700px] h-[700px] bg-blue-100 rounded-full blur-3xl opacity-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-yellow-500 font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Global Crew Connect – Your Gateway To International Careers
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            We help skilled and unskilled workers secure overseas employment
            opportunities across Saudi Arabia, UAE, Dubai, Australia and other
            international destinations. Our dedicated team provides complete
            recruitment support, career guidance and placement assistance.
          </p>

          <button className="mt-8 bg-[#08142c] text-white px-8 py-4 rounded-lg hover:bg-[#102447] transition">
            Learn More →
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <Clock3 className="text-yellow-500" size={30} />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Fast Recruitment
            </h3>

            <p className="text-gray-600">
              Quick and efficient hiring process connecting candidates
              with verified international employers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <Users className="text-yellow-500" size={30} />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Expert Guidance
            </h3>

            <p className="text-gray-600">
              Professional support throughout your overseas employment
              journey, from application to placement.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="text-yellow-500" size={30} />
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Trusted Opportunities
            </h3>

            <p className="text-gray-600">
              We work with reliable employers and provide secure,
              transparent recruitment services.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-28">
  <div className="text-center mb-14">
    <span className="text-yellow-500 font-semibold uppercase tracking-wider">
      Our Team
    </span>

    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
      Meet Our Recruitment Experts
    </h2>

    <p className="text-gray-600 mt-6 max-w-3xl mx-auto">
      Our dedicated professionals work closely with candidates
      and employers to create successful overseas career
      opportunities.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80"
        alt="Recruitment Manager"
        className="h-80 w-full object-cover"
      />

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">
          Recruitment Manager
        </h3>

        <p className="text-yellow-500 mt-2">
          Overseas Placement Specialist
        </p>
      </div>
    </div>

    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80"
        alt="Career Consultant"
        className="h-80 w-full object-cover"
      />

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">
          Career Consultant
        </h3>

        <p className="text-yellow-500 mt-2">
          Candidate Guidance Expert
        </p>
      </div>
    </div>

    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80"
        alt="HR Specialist"
        className="h-80 w-full object-cover"
      />

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900">
          HR Specialist
        </h3>

        <p className="text-yellow-500 mt-2">
          Recruitment & Documentation
        </p>
      </div>
    </div>

  </div>
</div>
    </section>
  );
}