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
      <Hero />
      <CoreServices />
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <SuccessStories />
        </div>
      </section>
      
      {/* Featured Insight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl font-light text-gray-900">
                  Latest <span className="font-semibold">Insights</span>
                </h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  Discover our latest analysis on African markets and opportunities.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-gray-900">
                  The Future of Digital Commerce in Africa
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Explore how digital transformation is reshaping African markets
                  and creating new opportunities for global businesses.
                </p>
                <button className="inline-flex items-center text-blue-800 font-light hover:translate-x-2 transition-transform duration-300">
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
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
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] w-full"
            >
              <Image
                src={images.insights.digitalCommerce}
                alt="Digital Commerce in Africa"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-light mb-6">
                Ready to Expand Your Business?
              </h2>
              <p className="text-xl font-light text-blue-100">
                Let&apos;s discuss how we can help you achieve your business objectives
                in African markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-800 text-lg font-light rounded hover:bg-blue-50 transition-colors duration-300">
                  Contact Us
                </button>
                <button className="px-8 py-4 border-2 border-white text-white text-lg font-light rounded hover:bg-blue-700 transition-colors duration-300">
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
