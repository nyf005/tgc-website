"use client";

import React from "react";
import Image from "@/components/ui/Image";
import { motion } from "framer-motion";
import { useAnimationSync } from "@/hooks/useAnimationSync";
import { images } from "@/lib/images";
import { HeroBackground } from "@/components/ui/BackgroundShapes";
import { stats, values, team, mission, journey } from "@/data/about";

export default function AboutPage() {
  const isVisible = useAnimationSync();

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
    <main>
      {/* Hero Section - Clean white */}
      <section className="relative bg-white overflow-hidden">
        <HeroBackground />
        <motion.div
          className="container mx-auto px-6 min-h-[480px] flex items-center"
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={containerAnimation}
        >
          <motion.div className="max-w-4xl relative z-10" variants={itemAnimation}>
            <h1 className="text-5xl font-light text-gray-900 mb-8">
              Shaping the Future of{" "}
              <span className="font-semibold">Business in Africa</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Tungsten Global Consulting bridges the gap between American enterprise
              and African opportunity, creating sustainable value through deep
              expertise and local knowledge.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Subtle warm background */}
      <section className="bg-stone-50 py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="text-center"
              >
                <h3 className="text-4xl font-light text-blue-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-light">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Clean design with accent color */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-20 items-center"
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            <motion.div variants={itemAnimation}>
              <div className="space-y-16">
                <div>
                  <h2 className="text-4xl font-light text-gray-900 mb-4">
                    {mission.title}
                  </h2>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemAnimation}
              className="relative h-[700px]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images.office.main}
                  alt="Our Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-4">{journey.title}</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              {journey.description}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section - Light gray background */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" animate={isVisible ? "show" : "hidden"} variants={containerAnimation}>
            <motion.div className="max-w-3xl mx-auto text-center mt-20" variants={itemAnimation}>
              <div className="bg-blue-800 rounded-xl p-10 text-white shadow-lg">
                <h3 className="text-2xl font-light mb-4">
                  Partner With Us
                </h3>
                <p className="font-light mb-8 text-blue-100">
                  We're ready to help your business navigate the complexities of African markets and achieve sustainable growth.
                </p>
                <a
                  href="/contact#form"
                  className="inline-flex items-center bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Contact Us
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}