"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import servicesData from "../../data/service.json";

interface Service {
  id: number;
  title: string;
  slug: string;
  icon: string;
  details: string;
  parent?: string | null;
}

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface HeaderProps {
  isMenuOpen?: boolean;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const menuOpen = isMenuOpen ?? internalMenuOpen;
  const setMenuOpen = setIsMenuOpen ?? setInternalMenuOpen;

  const navLinks: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Team", href: "/team" },
    { label: "Blogs", href: "https://mohiuddinsumon.com/wp/blog" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/career" },
  ];

  const mainServices = (servicesData.services as Service[]).filter(
    (s) => !s.parent
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // ✅ Fixed transition typing (ease is now ["easeOut"])
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: ["easeOut"] },
    },
  };

  return (
    <header className="z-50 relative min-h-[80px]">
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-8 relative z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.nav
          className="relative rounded-xl py-3 sm:py-4 bg-white/5 backdrop-blur-md border border-white/10 max-w-screen-2xl mx-auto"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between px-5">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="cursor-pointer flex items-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <motion.div
              className="hidden lg:flex items-center space-x-6 xl:space-x-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((nav) => (
                <motion.div
                  key={nav.label}
                  variants={itemVariants}
                  className="relative"
                >
                  {nav.hasDropdown ? (
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      ref={dropdownRef}
                      className="relative"
                    >
                      <motion.button
                        className="text-white/80 hover:text-[#22d3ee] transition-colors flex items-center space-x-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span>{nav.label}</span>
                        <motion.div
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-0 right-0 top-full mt-2 bg-slate-900 shadow-2xl z-50"
                            style={{
                              width: "1220px",
                              marginLeft: "calc(-41vw + 50%)",
                            }}
                          >
                            <div className="px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
                              {mainServices.map((service, i) => (
                                <motion.div
                                  key={service.id}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: i * 0.05,
                                  }}
                                >
                                  <Link
                                    href={`/services/${service.slug}`}
                                    className="block p-5 rounded-xl bg-slate-800/50 transition-all duration-300 group hover:bg-slate-700 border border-transparent hover:border-[#22d3ee]/30"
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    <div className="flex">
                                      <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#22d3ee]/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                                        <Image
                                          src={service.icon}
                                          alt={service.title}
                                          width={32}
                                          height={32}
                                          className="object-contain"
                                        />
                                      </div>
                                      <div className="ml-4">
                                        <h4 className="text-white font-semibold text-sm mb-2 group-hover:text-[#22d3ee] transition-colors">
                                          {service.title}
                                        </h4>
                                        <p className="text-white/60 text-xs leading-relaxed line-clamp-3">
                                          {service.details}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>

                            <div className="text-center pt-6 border-t border-white/10">
                              <Link
                                href="/services"
                                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#22d3ee] to-blue-500 text-white font-semibold rounded-full hover:from-[#22d3ee]/90 hover:to-blue-500/90 shadow-lg transition"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                View All Services
                                <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg]" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={nav.href}
                      className="text-white/80 hover:text-[#22d3ee] transition-colors"
                    >
                      {nav.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden lg:block bg-[#07F4Fa] text-black px-5 py-2 rounded-full shadow-lg text-sm sm:text-base"
            >
              Get Started
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-8 h-8 text-white hover:text-cyan-400"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </motion.nav>
      </motion.div>
    </header>
  );
};

export default Header;
