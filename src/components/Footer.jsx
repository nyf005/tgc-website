"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

const footerLinks = {
  services: [
    { name: "Strategic Business Development", href: "/services#strategic-business-development" },
    { name: "International Representation", href: "/services#international-representation" },
    { name: "Access to Resources", href: "/services#access-to-resources" },
  ],
  caseStudies: [
    { name: "Global Manufacturing", href: "/insights/global-manufacturing" },
    { name: "TechServe", href: "/insights/techserve-digital-transformation" },
    { name: "AgriGrow", href: "/insights/agrigrow-market-expansion" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  connect: [
    { name: "Email", label: "tgc@consulttgc.com", href: "mailto:tgc@consulttgc.com", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ) },
    { name: "Phone", label: "302-317-1510", href: "tel:3023171510", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ) },
    { name: "Location", label: "Newark, Delaware", href: "/contact", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ) },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white mt-auto">
      {/* Main Footer Content */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 border-t border-blue-100">
        <div className="container mx-auto px-4 md:px-8 pt-12 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Logo and Info Section */}
            <div className="lg:col-span-4 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={siteConfig.logo.main}
                    alt={siteConfig.name}
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="ml-3 text-md font-semibold text-gray-900">
                    {siteConfig.shortName}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {siteConfig.description}
                </p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-12 gap-y-8 gap-x-4 md:gap-x-2 lg:gap-x-4">
                {/* Services */}
                <motion.div
                  className="sm:col-span-1 md:col-span-4 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Services
                  </h3>
                  <ul className="space-y-2.5">
                    {footerLinks.services.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 group flex items-center"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-600 group-hover:w-2 group-hover:h-2 mr-2 transition-all duration-300"></span>
                          <span className="text-sm">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Case Studies */}
                <motion.div
                  className="sm:col-span-1 md:col-span-3 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Case Studies
                  </h3>
                  <ul className="space-y-2.5">
                    {footerLinks.caseStudies.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 group flex items-center"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-600 group-hover:w-2 group-hover:h-2 mr-2 transition-all duration-300"></span>
                          <span className="text-sm">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Company */}
                <motion.div
                  className="sm:col-span-1 md:col-span-2 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Company
                  </h3>
                  <ul className="space-y-2.5">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 group flex items-center"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-blue-600 group-hover:w-2 group-hover:h-2 mr-2 transition-all duration-300"></span>
                          <span className="text-sm">{link.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Connect */}
                <motion.div
                  className="sm:col-span-1 md:col-span-3 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                    Connect
                  </h3>
                  <ul className="space-y-2.5">
                    {footerLinks.connect.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                        >
                          <span className="text-blue-500 group-hover:text-blue-600 mr-2">{link.icon}</span>
                          <span className="text-sm">{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white mt-4">
          <div className="container mx-auto px-4 md:px-8 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-1 text-sm font-light">
                <Link href="/privacy" className="hover:text-blue-100 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-blue-100 transition-colors duration-300">
                  Terms of Use
                </Link>
              </div>
              <div>
                <span className="text-sm font-light opacity-90">
                  © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}