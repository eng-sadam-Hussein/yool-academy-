import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

import logo from "../assets/logoY.jpg";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academy", path: "/academy" },
    { name: "Programs", path: "/programs" },
    { name: "Consultancy", path: "/consultancy" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const programs = [
    "Computer Application",
    "Graphic Design",
    "Video Editing",
    "Data Analysis",
    "Digital Marketing",
    "Project Management",
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Effects */}
      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-sky-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Top CTA */}
        <div className="mb-16 rounded-[36px] bg-gradient-to-r from-[#063B63] to-[#2196F3] p-8 shadow-2xl md:flex md:items-center md:justify-between md:p-10">
          <div>
            <h2 className="text-3xl font-black md:text-4xl">
              Ready to build your future skills?
            </h2>
            <p className="mt-3 max-w-2xl text-white/90">
              Join Yool Academy and start practical training designed for the
              modern job market.
            </p>
          </div>

          <Link
            to="/apply"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-black text-[#063B63] transition hover:-translate-y-1 hover:bg-blue-50 md:mt-0"
          >
            Apply Now <FaArrowRight />
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Yool Academy Logo"
                className="h-16 w-16 object-contain"
              />

              <div>
                <h3 className="text-2xl font-black">Yool Academy</h3>
                <p className="text-sm font-semibold text-blue-300">
                  Skills • Training • Consultancy
                </p>
              </div>
            </Link>

            <p className="mt-6 leading-8 text-slate-300">
              Yool Academy is a technology-driven training and consultancy
              center that builds practical technical and professional skills for
              students, graduates, professionals, and organizations.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { icon: <FaFacebookF />, link: "https://facebook.com" },
                { icon: <FaInstagram />, link: "https://instagram.com" },
                { icon: <FaTiktok />, link: "https://tiktok.com" },
                { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-[#2196F3]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black">Quick Links</h4>

            <div className="mt-6 grid gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center gap-3 text-slate-300 transition hover:text-white"
                >
                  <span className="h-2 w-2 rounded-full bg-[#2196F3] transition group-hover:w-4" />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-black">Programs</h4>

            <div className="mt-6 grid gap-3">
              {programs.map((program) => (
                <Link
                  key={program}
                  to="/programs"
                  className="group flex items-center gap-3 text-slate-300 transition hover:text-white"
                >
                  <span className="h-2 w-2 rounded-full bg-[#2196F3] transition group-hover:w-4" />
                  {program}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-black">Contact Info</h4>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:info@yoolacademy.com"
                className="flex gap-4 text-slate-300 transition hover:text-white"
              >
                <span className="mt-1 text-[#2196F3]">
                  <FaEnvelope />
                </span>
                info@yoolacademy.com
              </a>

              <a
                href="tel:+252617527288"
                className="flex gap-4 text-slate-300 transition hover:text-white"
              >
                <span className="mt-1 text-[#2196F3]">
                  <FaPhoneAlt />
                </span>
                +252 61 7527288
              </a>

              <a
                href="https://wa.me/252617527288"
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 text-slate-300 transition hover:text-white"
              >
                <span className="mt-1 text-[#2196F3]">
                  <FaWhatsapp />
                </span>
                WhatsApp Support
              </a>

              <div className="flex gap-4 text-slate-300">
                <span className="mt-1 text-[#2196F3]">
                  <FaMapMarkerAlt />
                </span>
                Mogadishu, Somalia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-sm font-semibold text-slate-400">
            © {new Date().getFullYear()} Yool Academy. All rights reserved.
          </p>

          <div className="mt-4 flex gap-6 text-sm font-semibold text-slate-400 md:mt-0">
            <Link to="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}