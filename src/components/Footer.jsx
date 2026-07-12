
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

export default function Footer() {
  return (
    <footer className="bg-[#08142c] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>
           

            <p className="text-gray-300 leading-relaxed">
              Global Crew Connect helps skilled and unskilled
              workers find overseas employment opportunities
              across Gulf countries and international destinations.
            </p>
          </div>

          {/* Quick Links */}
<div>
  <h3 className="text-2xl font-bold mb-6">
    Quick Links
  </h3>

  <ul className="space-y-3 text-gray-300">
    <li>
      <Link
        to="/"
        className="hover:text-yellow-400 transition duration-300"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        to="/about"
        className="hover:text-yellow-400 transition duration-300"
      >
        About Us
      </Link>
    </li>

    <li>
      <Link
        to="/services"
        className="hover:text-yellow-400 transition duration-300"
      >
        Services
      </Link>
    </li>

    <li>
      <Link
        to="/about"
        className="hover:text-yellow-400 transition duration-300"
      >
        Jobs
      </Link>
    </li>

    <li>
      <Link
        to="/contact"
        className="hover:text-yellow-400 transition duration-300"
      >
        Contact
      </Link>
    </li>
  </ul>
</div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>International Placement</li>
              <li>Gulf Recruitment</li>
              <li>Career Guidance</li>
              <li>Worker Placement</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-300 mb-6">
              Connect withnpm run build us and start your international
              career journey today.
            </p>

            <div className="flex gap-4">
  <a
    href="https://www.facebook.com/profile.php?id=61591241608224"
    className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition text-xl"
  >
   <i class="ri-facebook-circle-fill"></i>
  </a>

  <a
    href="https://www.instagram.com/globalcrewconnect/"
    className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition text-xl"
  >
   <i class="ri-instagram-line"></i>
  </a>

  <a
    href="https://www.linkedin.com/company/Globalcrewconnect"
    className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition text-xl"
  >
    <i class="ri-linkedin-fill"></i>
  </a>
  <a
    href="https://x.com/GlobalCrewCo"
    className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition text-xl"
  >
    <i class="ri-twitter-x-line"></i>
  </a>
</div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between">

          <p className="text-gray-400">
            © 2026 Global Crew Connect. All Rights Reserved.
          </p>

          <p className="text-gray-400">
            Overseas Recruitment & Career Consultancy
          </p>

        </div>
      </div>

    </footer>
  );
}