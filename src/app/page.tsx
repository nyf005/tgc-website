"use client";

import React from "react";
import Hero from "@/components/Hero";
import CoreServices from "@/components/CoreServices";
import SuccessStories from "@/components/SuccessStories";
import { motion } from "framer-motion";
import Image from "@/components/ui/Image";
import { images } from "@/lib/images";

export default function Home() {
  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
        <Hero />
      </section>
      <CoreServices />
      
      {/* Updated container styling for consistency */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl py-16">
          <SuccessStories />
        </div>
      </section>
      
      {/* Updated Featured Insight section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h2 className="text-5xl font-light text-gray-900">
                  Latest <span className="font-medium">Insights</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover our latest analysis on African markets and opportunities.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-gray-900">
                  The Future of Digital Commerce in Africa
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Explore how digital transformation is reshaping African markets
                  and creating new opportunities for global businesses.
                </p>
                <button className="group inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300">
                  <span className="font-medium">Read More</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Updated image container */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] w-full"
            >
              <Image
                src={images.insights.digitalCommerce}
                alt="Digital Commerce in Africa"
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <h2 className="text-5xl font-light">
                Ready to Expand Your Business?
              </h2>
              <p className="text-xl font-light text-blue-100 leading-relaxed">
                Let&apos;s discuss how we can help you achieve your business objectives
                in African markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-8 py-4 bg-white text-blue-800 text-lg font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Contact Us
                </button>
                <button className="px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
