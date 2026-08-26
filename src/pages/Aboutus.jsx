import {Globe,Target,Users,Briefcase,CheckCircle,ArrowRight} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
          alt="Global Team"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#08142c]/80"></div>

        <div className="relative z-10 text-center text-white px-6">
          <span className="text-yellow-400 uppercase tracking-widest">
            About Global Crew Connect
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Connecting Talent
            <br />
            With Global Opportunities
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-300">
            Your trusted partner for overseas recruitment,
            career guidance and international job placement.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-yellow-500 font-semibold">
                OUR STORY
              </span>

              <h2 className="text-5xl font-bold mt-4">
                Building Better Futures Across Borders
              </h2>

              <p className="text-gray-600 mt-6 leading-relaxed">
                Global Crew Connect was founded with a mission
                to help skilled and unskilled workers access
                better employment opportunities overseas.
              </p>

              <p className="text-gray-600 mt-4 leading-relaxed">
                We specialize in connecting candidates with
                trusted employers across Saudi Arabia, UAE,
                Dubai and Australia while providing guidance
                throughout the recruitment process.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
              alt="Recruitment Team"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* MISSION VISION */}
      <section className="bg-[#08142c] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-[#102447] p-10 rounded-3xl">
              <Target
                size={40}
                className="text-yellow-400 mb-6"
              />

              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-gray-300">
                To provide reliable overseas employment
                opportunities and help individuals build
                successful careers internationally.
              </p>
            </div>

            <div className="bg-[#102447] p-10 rounded-3xl">
              <Globe
                size={40}
                className="text-yellow-400 mb-6"
              />

              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-gray-300">
                To become one of the most trusted recruitment
                consultancies connecting talent with global
                employers.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">
              Why Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <Users
                size={40}
                className="text-yellow-500 mb-4"
              />

              <h3 className="text-2xl font-bold mb-3">
                Expert Guidance
              </h3>

              <p className="text-gray-600">
                Professional support throughout your
                recruitment journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <Briefcase
                size={40}
                className="text-yellow-500 mb-4"
              />

              <h3 className="text-2xl font-bold mb-3">
                Verified Opportunities
              </h3>

              <p className="text-gray-600">
                Access jobs from trusted employers
                worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <CheckCircle
                size={40}
                className="text-yellow-500 mb-4"
              />

              <h3 className="text-2xl font-bold mb-3">
                End-To-End Support
              </h3>

              <p className="text-gray-600">
                Assistance with documentation,
                interviews and placement.
              </p>
            </div>

          </div>

        </div>
      </section>
{/* COUNTRIES WE SERVE */}
<section className="py-24 bg-[#102447]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <span className="text-yellow-500 font-semibold uppercase tracking-wider">
        Global Reach
      </span>

      <h2 className="text-5xl font-bold mt-4 text-white">
        Countries We Serve
      </h2>

      <p className="text-white mt-6 max-w-3xl mx-auto">
        Connecting candidates with trusted employers across
        leading international destinations.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
flag: "🇧🇪",
name: "Belgium",
image:
"https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80",
},
{
flag: "🇷🇴",
name: "Romania",
image:
"https://images.unsplash.com/photo-1566827954254-0c0692424c04?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
flag: "🇩🇰",
name: "Denmark",
image:
"https://images.unsplash.com/photo-1513622118278-bc041b3c13ed?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{
flag: "🇩🇪",
name: "Germany",
image:
"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80",
},
{
flag: "🇸🇦",
name: "Saudi Arabia",
image:
"https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1200&q=80",
},
{
flag: "🇦🇪",
name: "United Arab Emirates",
image:
"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
},
{
flag: "🏙️",
name: "Dubai",
image:
"https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200&q=80",
},
{
flag: "🇦🇺",
name: "Australia",
image:
"https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=80",
},
{
flag: "🇧🇬",
name: "Bulgaria",
image:
"https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1200&q=80",
},
].map((country) => (
        <div
          key={country.name}
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
        >
          <img
            src={country.image}
            alt={country.name}
            className="h-56 w-full object-cover"
          />

          <div className="p-6 text-center">
            <div className="text-5xl mb-3">
              {country.flag}
            </div>

            <h3 className="text-2xl font-bold">
              {country.name}
            </h3>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="bg-gray-50 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-black">
            Ready To Start Your
            International Career?
          </h2>

          <p className="mt-6 text-black">
            Contact Global Crew Connect today and
            explore overseas opportunities.
          </p>

          <Link
  to="/contact"
  className="group inline-flex items-center gap-3 mt-8 px-8 py-4 bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
>
  Contact Us Today
  <ArrowRight
    size={20}
    className="transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

        </div>
      </section>

    </main>
  );
}