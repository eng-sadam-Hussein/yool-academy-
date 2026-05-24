import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

import logo from "../assets/logoY.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const searchRef = useRef(null);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Training", path: "/Training" },
    { name: "Programs", path: "/programs" },
    { name: "Consultancy", path: "/consultancy" },
    { name: "Events", path: "/events" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const searchData = [
    {
      title: "Build Your Future Skills With Yool Academy",
      category: "Home",
      path: "/",
      text: "Yool Academy practical skills training technology consultancy professional development.",
    },
    {
      title: "Graphic Design",
      category: "Course",
      path: "/programs",
      text: "Photoshop Illustrator posters branding social media design creative design.",
    },
    {
      title: "Video Editing",
      category: "Course",
      path: "/programs",
      text: "Premiere Pro video production editing transitions storytelling content creation.",
    },
    {
      title: "Computer Applications",
      category: "Course",
      path: "/programs",
      text: "Microsoft Word Excel PowerPoint Access office skills computer training.",
    },
    {
      title: "Data Analysis",
      category: "Course",
      path: "/programs",
      text: "Advanced Excel Power BI data visualization reports decision making.",
    },
    {
      title: "Digital Marketing",
      category: "Course",
      path: "/programs",
      text: "Social media marketing content strategy branding online promotion advertising.",
    },
    {
      title: "Project Management",
      category: "Course",
      path: "/programs",
      text: "Planning project execution monitoring evaluation leadership management skills.",
    },
    {
      title: "Financial Management for NGOs",
      category: "Course",
      path: "/programs",
      text: "Budgeting reporting accountability NGO finance financial control.",
    },
    {
      title: "Entrepreneurship & Business",
      category: "Course",
      path: "/programs",
      text: "Business planning startup skills market research entrepreneurship growth.",
    },
    {
      title: "Research Methodology",
      category: "Course",
      path: "/programs",
      text: "Research design data collection analysis report writing academic research.",
    },
    {
      title: "Monitoring & Evaluation",
      category: "Course",
      path: "/programs",
      text: "M&E framework indicators reporting evaluation program monitoring.",
    },
    {
      title: "Training Services",
      category: "Academy",
      path: "/academy",
      text: "Practical learning professional training small class sizes certificates.",
    },
    {
      title: "Consultancy Services",
      category: "Consultancy",
      path: "/consultancy",
      text: "Business consultancy IT consultancy digital transformation organizational support.",
    },
    {
      title: "About Yool Academy",
      category: "About",
      path: "/about",
      text: "Technology driven training and consultancy center in Mogadishu.",
    },
    {
      title: "Contact Information",
      category: "Contact",
      path: "/contact",
      text: "yoolacademy4@gmail.com Mogadishu Somalia phone WhatsApp support.",
    },
    {
      title: "Apply Now",
      category: "Registration",
      path: "/apply",
      text: "Register now limited seats student application course enrollment.",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return [];

    return searchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.text.toLowerCase().includes(q)
      );
    });
  }, [query]);

  const goToResult = (path) => {
    navigate(path);
    setQuery("");
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };

  const hasSearched = query.trim().length > 0;

  const linkClass = ({ isActive }) =>
    `flex items-center gap-1 whitespace-nowrap text-[13px] font-black transition-all duration-300 xl:text-[14px] ${
      isActive ? "text-[#063B63]" : "text-black hover:text-[#063B63]"
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white">
      {/* TOP BAR */}
      <div className="bg-[#31378F] text-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-start px-4 py-1.5 text-[10px] font-black sm:text-[11px] md:text-xs">
          <div className="flex items-center gap-5">
            <a
              href="mailto:yoolacademy4@gmail.com"
              className="flex items-center gap-2 transition hover:text-blue-100"
            >
              <FaEnvelope className="text-[11px]" />
              <span>yoolacademy4@gmail.com</span>
            </a>

            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[11px]" />
              <span>Mogadishu, Somalia</span>
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-slate-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-2">
          {/* LOGO */}
          <NavLink to="/" className="flex shrink-0 items-center gap-3">
            <img
              src={logo}
              alt="Yool Academy Logo"
              className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            />

            <div className="hidden sm:block">
              <h1 className="text-lg font-black leading-none text-[#063B63] lg:text-[20px]">
                Yool Academy
              </h1>
              <p className="mt-0.5 text-[10px] font-bold text-[#2196F3]">
                Skills • Training • Consultancy
              </p>
            </div>
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
                <FaChevronDown className="text-[9px]" />
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <div ref={searchRef} className="relative">
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm text-black transition-all duration-300 hover:border-[#063B63] hover:text-[#063B63] hover:shadow-lg"
                aria-label="Search"
              >
                <FaSearch />
              </button>

              {isSearchOpen && (
                <div className="absolute right-0 top-14 z-[9999] w-[390px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl">
                  <div className="border-b border-slate-100 p-3">
                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2.5 focus-within:border-[#063B63]">
                      <FaSearch className="text-sm text-slate-400" />
                      <input
                        autoFocus
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search anything..."
                        className="w-full bg-transparent text-sm font-semibold text-slate-700 outline-none"
                      />
                    </div>
                  </div>

                  <div className="max-h-[320px] overflow-y-auto py-2">
                    {!hasSearched ? (
                      <div className="p-5 text-center">
                        <p className="text-sm font-semibold text-slate-500">
                          Type what you want to search.
                        </p>
                      </div>
                    ) : filteredResults.length > 0 ? (
                      filteredResults.map((item) => (
                        <button
                          key={`${item.title}-${item.path}`}
                          onClick={() => goToResult(item.path)}
                          className="w-full px-4 py-3 text-left transition hover:bg-blue-50"
                        >
                          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#063B63]">
                            {item.category}
                          </span>

                          <h3 className="mt-2 text-sm font-black text-slate-900">
                            {item.title}
                          </h3>

                          <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                            {item.text}
                          </p>
                        </button>
                      ))
                    ) : (
                      <div className="p-5 text-center">
                        <p className="text-sm font-bold text-red-500">
                          Not found.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/apply"
              className="rounded-full bg-[#063B63] px-5 py-2.5 text-xs font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2196F3] hover:shadow-xl"
            >
              Apply Now
            </NavLink>
          </div>

          {/* MOBILE RIGHT */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="text-lg text-black"
              aria-label="Search"
            >
              <FaSearch />
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="text-xl text-black"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH */}
        {isSearchOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 focus-within:border-[#063B63]">
              <FaSearch className="text-slate-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search anything..."
                className="w-full bg-transparent text-sm font-semibold outline-none"
              />
            </div>

            <div className="mt-3 grid max-h-[360px] gap-2 overflow-y-auto">
              {!hasSearched ? (
                <p className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-500">
                  Type what you want to search.
                </p>
              ) : filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <button
                    key={`${item.title}-${item.path}`}
                    onClick={() => goToResult(item.path)}
                    className="rounded-xl bg-slate-50 px-4 py-3 text-left"
                  >
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#063B63]">
                      {item.category}
                    </span>

                    <h3 className="mt-2 text-sm font-black text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </button>
                ))
              ) : (
                <p className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-red-500">
                  Not found.
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* MOBILE SIDE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/55 lg:hidden">
          <div className="h-full w-[82%] max-w-[340px] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Yool Academy Logo"
                  className="h-12 w-12 object-contain"
                />

                <div>
                  <h2 className="text-lg font-black text-[#063B63]">
                    Yool Academy
                  </h2>
                  <p className="text-[11px] font-bold text-[#2196F3]">
                    Skills • Training • Consultancy
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[#063B63]"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            <nav className="px-5 py-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-slate-100 px-1 py-4 text-[15px] font-bold transition ${
                      isActive
                        ? "text-[#063B63]"
                        : "text-slate-600 hover:text-[#063B63]"
                    }`
                  }
                >
                  {link.name}
                  <FaChevronDown className="text-[10px] text-slate-400" />
                </NavLink>
              ))}

              <NavLink
                to="/apply"
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 flex items-center justify-center rounded-xl bg-[#063B63] py-4 font-black text-white"
              >
                Apply Now
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 flex items-center justify-center rounded-xl border border-[#063B63] py-4 font-black text-[#063B63]"
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}