const jobs = [
  {
    title: "Picker & Packer",
    country: "Saudi Arabia",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
  {
    title: "Mechanic",
    country: "UAE",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc",
  },
  {
    title: "Security Guard",
    country: "Dubai",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },
  {
    title: "Driver",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    title: "Warehouse Worker",
    country: "Saudi Arabia",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c",
  },
  {
    title: "Construction Worker",
    country: "UAE",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
  },
];

export default function Jobs() {
  return (
    <section
      id="jobs"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-yellow-500 uppercase tracking-wider">
            Open Positions
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Available Jobs
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Explore exciting overseas opportunities and start
            building your international career today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <img
                src={job.image}
                alt={job.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm mb-3">
                  {job.country}
                </span>

                <h3 className="text-2xl font-bold mb-3">
                  {job.title}
                </h3>

                <p className="text-gray-600 mb-5">
                  International opportunity with competitive
                  salary and growth potential.
                </p>

                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}