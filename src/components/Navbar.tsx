"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "@/components/ui/Image";
import { siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navLinks to include all footer destinations
  const navLinks = [
    { href: "/", label: "Home" },
    {
      href: "/about",
      label: "About Us",
      matches: ["/about", "/careers"],
    },
    {
      href: "/services",
      label: "Services",
      matches: [
        "/services",
        "/services#strategic-business-development",
        "/services#international-representation",
        "/services#access-to-resources",
      ],
      dropdown: [
        { label: "Strategic Business Development", href: "/services#strategic-business-development" },
        { label: "International Representation", href: "/services#international-representation" },
        { label: "Access to Resources", href: "/services#access-to-resources" },
      ],
    },
    {
      href: "/insights",
      label: "Case Studies",
      matches: [
        "/insights",
      ],
    },
    {
      href: "/contact",
      label: "Contact",
      matches: [
        "/contact",
        "/contact#dc",
        "/contact#nairobi",
        "/contact#lagos",
      ],
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 header ${
        isScrolled ? "shadow-md bg-white/95 backdrop-blur-md" : "bg-white/90 backdrop-blur-sm"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={siteConfig.logo.main}
              alt={siteConfig.name}
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div className="flex flex-col">
              <span
                className="text-sm font-semibold tracking-wider text-gray-900 
                hover:underline decoration-blue-800 underline-offset-4 cursor-pointer"
              >
                {siteConfig.shortName}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative px-4 first:pl-8 last:pr-8"
              >
                <Link
                  href={link.href}
                  className={`text-sm tracking-wide transition-all duration-300 hover:text-primary-600 
                    inline-flex items-center whitespace-nowrap ${
                      link.matches?.some((path) => pathname.startsWith(path)) ||
                      pathname === link.href
                        ? "text-primary-700 font-semibold after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:rounded-full"
                        : "text-gray-600 font-light"
                    }`}
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.href)
                  }
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
                {link.dropdown && activeDropdown === link.href && (
                  <div
                    className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-800"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact#form"
              className="ml-8 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-medium
              tracking-wide rounded-lg shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 hover:-translate-y-0.5
              transition-all duration-300 border border-primary-500/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-sm tracking-wide transition-all duration-300 
                    hover:text-primary-600 ${
                      link.matches?.some((path) => pathname.startsWith(path)) ||
                      pathname === link.href
                        ? "text-primary-700 font-semibold border-l-2 border-blue-500 pl-2"
                        : "text-gray-600 font-light"
                    }`}
                  onClick={() => {
                    if (!link.dropdown) setIsMobileMenuOpen(false);
                    setActiveDropdown(
                      activeDropdown === link.href ? null : link.href
                    );
                  }}
                >
                  <span className="flex items-center justify-between">
                    {link.label}
                    {link.dropdown && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.href ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </span>
                </Link>
                {link.dropdown && activeDropdown === link.href && (
                  <div className="pl-4 py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact#form"
              className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm 
              font-medium tracking-wide rounded-lg shadow-lg shadow-primary-600/20 
              border border-primary-500/20 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
