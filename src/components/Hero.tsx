"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { images } from "@/lib/images";

const Hero = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-[85vh] bg-white overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={images.office.main}
          alt="African business district"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/50">
          {/* Add subtle colored overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/20 mix-blend-multiply" />
        </div>
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-1" />

      {/* Content */}
      <div className="relative z-10 min-h-[85vh] flex items-center">
        <div className="w-full">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                className="space-y-8 z-10 pt-20 pb-16 lg:py-0"
                initial="hidden"
                animate="show"
                variants={containerAnimation}
              >
                {/* Main Content */}
                <motion.div className="space-y-6" variants={itemAnimation}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                    Unlock Growth in{" "}
                    <span className="font-medium">African Markets</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                    Navigate complex markets, identify opportunities, and
                    implement winning strategies with our expert guidance and
                    local knowledge.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  variants={itemAnimation}
                >
                  <Link
                    href="/contact#form"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 
                    text-white text-lg font-medium rounded-lg shadow-xl shadow-primary-600/20 hover:shadow-primary-600/30 
                    hover:-translate-y-0.5 transition-all duration-300 border border-primary-500/20"
                  >
                    Start Your Journey
                  </Link>
                  <Link
                    href="/insights"
                    className="inline-flex items-center justify-center px-8 py-4 
                    border border-secondary-300 text-gray-700 text-lg font-medium rounded-lg 
                    hover:border-secondary-400 hover:text-secondary-600 transition-all duration-300
                    bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:-translate-y-0.5 shadow-lg shadow-secondary-200/10
                    hover:shadow-secondary-200/20"
                  >
                    Explore Insights
                  </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-8 pt-12 mb-12 lg:mb-0 border-t border-gray-100"
                  variants={containerAnimation}
                >
                  <motion.div
                    variants={itemAnimation}
                    className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-primary-100 shadow-lg shadow-primary-200/10"
                  >
                    <h4 className="text-3xl font-semibold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">15+</h4>
                    <p className="text-sm text-gray-600 mt-1 font-medium">
                      Years of Excellence
                    </p>
                  </motion.div>
                  <motion.div
                    variants={itemAnimation}
                    className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-secondary-100 shadow-lg shadow-secondary-200/10"
                  >
                    <h4 className="text-3xl font-semibold bg-gradient-to-r from-secondary-500 to-secondary-600 bg-clip-text text-transparent">25+</h4>
                    <p className="text-sm text-gray-600 mt-1 font-medium">
                      African Markets
                    </p>
                  </motion.div>
                  <motion.div
                    variants={itemAnimation}
                    className="bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-accent-100 shadow-lg shadow-accent-200/10"
                  >
                    <h4 className="text-3xl font-semibold bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">200+</h4>
                    <p className="text-sm text-gray-600 mt-1 font-medium">
                      Success Stories
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Column - Empty to maintain layout with background image */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
