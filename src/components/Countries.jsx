const countries = [
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    image:
      "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6",
    jobs: "Construction, Drivers, Security",
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    jobs: "Warehouse, Hospitality, Logistics",
  },
  {
    name: "Dubai",
    flag: "🇦🇪",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    jobs: "Drivers, Construction, Security",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
    jobs: "Skilled Trades, Mechanics, Labor",
  },
];

export default function Countries() {
  return (
    <section
      id="countries"
      className="py-24 bg-[#08142c] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-yellow-400 uppercase tracking-wider">
            Work Abroad
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Recruitment Destinations
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Explore exciting overseas employment opportunities
            across some of the world's fastest-growing economies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {countries.map((country, index) => (
            <div
              key={index}
              className="group bg-[#102447] rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={country.image}
                  alt={country.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-4 left-4 bg-white/90 text-black px-3 py-2 rounded-full text-lg font-semibold">
                  {country.flag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {country.name}
                </h3>

                <p className="text-gray-300 mb-5">
                  Popular opportunities in:
                </p>

                <div className="text-yellow-400 font-medium">
                  {country.jobs}
                </div>

                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}