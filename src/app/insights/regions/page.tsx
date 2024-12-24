"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "@/components/ui/Image";
import { useAnimationSync } from "@/hooks/useAnimationSync";

const regions = [
  {
    name: "East Africa",
    countries: ["Kenya", "Tanzania", "Uganda", "Rwanda", "Ethiopia"],
    description: "A dynamic hub for technology, finance, and agriculture, with strong regional integration and growing consumer markets.",
    metrics: ["GDP: $350B+", "Population: 400M+", "Growth: 5.5%"],
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?auto=format&fit=crop&q=80", // Nairobi skyline
  },
  {
    name: "West Africa",
    countries: ["Nigeria", "Ghana", "Côte d'Ivoire", "Senegal"],
    description: "Home to Africa's largest economy and population, with robust opportunities in energy, retail, and digital services.",
    metrics: ["GDP: $700B+", "Population: 400M+", "Growth: 4.8%"],
    image: "https://images.unsplash.com/photo-1588358524496-e0192fac01b5?auto=format&fit=crop&q=80", // Lagos
  },
  {
    name: "Southern Africa",
    countries: ["South Africa", "Botswana", "Zambia", "Mozambique"],
    description: "Advanced infrastructure and sophisticated financial markets, with opportunities in mining, manufacturing, and services.",
    metrics: ["GDP: $450B+", "Population: 200M+", "Growth: 3.5%"],
    image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&q=80", // Johannesburg
  },
  {
    name: "North Africa",
    countries: ["Morocco", "Egypt", "Tunisia"],
    description: "Strategic gateway between Africa and Europe, with strengths in renewable energy, manufacturing, and tourism.",
    metrics: ["GDP: $600B+", "Population: 250M+", "Growth: 4.2%"],
    image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80", // Cairo
  },
];

export default function RegionsPage() {
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
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-white">
        <motion.div
          className="container mx-auto px-6 py-24"
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={containerAnimation}
        >
          <motion.div className="max-w-4xl" variants={itemAnimation}>
            <h1 className="text-5xl font-light text-gray-900 mb-8">
              Regional <span className="font-semibold">Markets</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Strategic insights and market intelligence across Africa&apos;s diverse
              regional economies.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Regions Grid */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            {regions.map((region, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden 
                  hover:border-blue-100 transition-all duration-300 group"
              >
                <div className="relative h-64">
                  <Image
                    src={region.image}
                    alt={region.name}
                    fill
                    className="object-cover transition-transform duration-500 
                      group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h2 className="absolute bottom-6 left-6 text-3xl font-light text-white">
                    {region.name}
                  </h2>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {region.countries.map((country, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-50 text-gray-600 text-sm 
                          font-light rounded"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 font-light mb-6">
                    {region.description}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {region.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="text-center p-4 bg-gray-50 rounded"
                      >
                        <span className="block text-blue-800 font-light">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Market Reports Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            <motion.div className="space-y-8" variants={itemAnimation}>
              <h2 className="text-4xl font-light text-gray-900">
                Download Market Reports
              </h2>
              <p className="text-xl text-gray-600 font-light">
                Access detailed market analysis and insights for each region.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-blue-800 text-white text-lg 
                  font-light rounded hover:bg-blue-900 transition-colors duration-300">
                  Latest Reports
                </button>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 
                  text-lg font-light rounded hover:border-blue-800 hover:text-blue-800 
                  transition-colors duration-300">
                  Subscribe to Updates
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 