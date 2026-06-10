export default function WhyChooseUs() {
  const features = [
    {
      title: "Verified Employers",
      description:
        "We connect candidates with trusted and verified international employers.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      title: "Fast Recruitment Process",
      description:
        "Quick and transparent hiring process to help you start sooner.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    },
    {
      title: "Global Opportunities",
      description:
        "Job placements across Saudi Arabia, UAE, Dubai and Australia.",
      image:
        "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=800&q=80",
    },
    {
      title: "Career Guidance",
      description:
        "Professional support throughout your overseas employment journey.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    },
    {
      title: "Skilled & Unskilled Jobs",
      description:
        "Opportunities for drivers, mechanics, warehouse workers and more.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    },
    {
      title: "Complete Assistance",
      description:
        "From documentation to placement, we assist at every step.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 bg-[#08142c] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-yellow-400 uppercase tracking-widest font-medium">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Trusted Partner For
            <span className="text-yellow-400">
              {" "}International Careers
            </span>
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Global Crew Connect helps skilled and unskilled workers
            secure overseas employment opportunities through
            trusted employers, expert guidance and end-to-end support.
          </p>
        </div>

        {/* Hero Block */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Left Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
              alt="Global Recruitment"
              className="rounded-3xl shadow-2xl"
            />

            
          </div>

          {/* Content */}
          <div>
            <h3 className="text-4xl font-bold mb-6">
              Building Better Futures Through Global Opportunities
            </h3>

            <p className="text-gray-300 leading-relaxed mb-8">
              We specialize in connecting job seekers with
              international employers across Saudi Arabia,
              UAE, Dubai and Australia. Our mission is to
              simplify the overseas recruitment process and
              help candidates build successful careers abroad.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                ✅ Verified International Employers
              </li>

              <li className="flex items-center gap-3">
                ✅ Multiple Overseas Destinations
              </li>

              <li className="flex items-center gap-3">
                ✅ Skilled & Unskilled Job Opportunities
              </li>

              <li className="flex items-center gap-3">
                ✅ Complete Documentation Support
              </li>

              <li className="flex items-center gap-3">
                ✅ Transparent Recruitment Process
              </li>
            </ul>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-60 w-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
        
      </div>
    </section>
  );
}