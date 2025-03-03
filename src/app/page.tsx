"use client";

import React from "react";
import Hero from "@/components/Hero";
import CoreServices from "@/components/CoreServices";
import SuccessStories from "@/components/SuccessStories";
import { motion } from "framer-motion";
import Image from "@/components/ui/Image";
import Link from "next/link";
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
                <Link href="/contact#form" className="px-8 py-4 bg-white text-blue-800 text-lg font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Contact Us
                </Link>
                <Link href="/services" className="px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-lg hover:bg-white/10 transition-all duration-300">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
