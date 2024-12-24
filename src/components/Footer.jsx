"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/constants";

const footerLinks = {
  services: [
    { name: "Market Entry", href: "/services#market-entry" },
    { name: "Advisory", href: "/services#advisory" },
    { name: "Research", href: "/services#research" },
  ],
  insights: [
    { name: "Industries", href: "/insights/industries" },
    { name: "Regions", href: "/insights/regions" },
    { name: "Case Studies", href: "/insights/cases" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Contact", href: "/contact" },
  ],
  offices: [
    { name: "Washington DC", href: "/contact#dc" },
    { name: "Nairobi", href: "/contact#nairobi" },
    { name: "Lagos", href: "/contact#lagos" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        {/* Main Footer */}
        <div className="pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={siteConfig.logo.main}
                  alt={siteConfig.name}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="ml-3 text-sm text-gray-900">
                  {siteConfig.name}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {siteConfig.description}
              </p>
            </motion.div>

            {/* Empty space for gap */}
            <div className="md:col-span-1" />

            {/* Services */}
            <motion.div
              className="md:col-span-2 md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Insights */}
            <motion.div
              className="md:col-span-2 md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
                Insights
              </h3>
              <ul className="space-y-2">
                {footerLinks.insights.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              className="md:col-span-2 md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900">
                Terms of Use
              </Link>
            </div>
            <div>
              <span className="text-sm text-gray-600">
                © {new Date().getFullYear()} {siteConfig.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
