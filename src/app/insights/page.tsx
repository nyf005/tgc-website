"use client";

import React, { useState } from "react";
import Image from "@/components/ui/Image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import { useAnimationSync } from "@/hooks/useAnimationSync";
import { HeroBackground } from "@/components/ui/BackgroundShapes";

const categories = ["All", "Market Analysis", "Industry Trends", "Case Studies", "Research"];

const insights = [
  {
    title: "The Future of Digital Commerce in Africa",
    category: "Industry Trends",
    date: "March 2024",
    readTime: "8 min read",
    image: images.insights.digitalCommerce,
    excerpt: "Exploring the rapid growth of e-commerce and digital payment solutions across African markets.",
  },
  {
    title: "Renewable Energy Investment Opportunities",
    category: "Market Analysis",
    date: "February 2024",
    readTime: "12 min read",
    image: images.insights.renewableEnergy,
    excerpt: "Analysis of sustainable energy investment landscape in key African markets.",
  },
  {
    title: "Supply Chain Optimization Success Story",
    category: "Case Studies",
    date: "January 2024",
    readTime: "6 min read",
    image: images.insights.supplyChain,
    excerpt: "How a U.S. manufacturer optimized their African distribution network.",
  },
  {
    title: "African Consumer Behavior Report 2024",
    category: "Research",
    date: "January 2024",
    readTime: "15 min read",
    image: images.insights.consumerReport,
    excerpt: "Comprehensive analysis of changing consumer preferences across major African markets.",
  },
];

export default function InsightsPage() {
  const isVisible = useAnimationSync();
  const [activeCategory, setActiveCategory] = useState("All");

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const filteredInsights = activeCategory === "All" 
    ? insights
    : insights.filter(insight => insight.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
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
              Insights & <span className="font-semibold">Perspectives</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Expert analysis, industry trends, and strategic insights on doing
              business in African markets.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto py-4 space-x-8 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-light whitespace-nowrap px-2 py-2 border-b-2 transition-colors duration-300 ${
                  activeCategory === category
                    ? "border-blue-800 text-blue-800"
                    : "border-transparent text-gray-600 hover:text-blue-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {filteredInsights.map((insight, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer bg-white hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 font-light mb-4">
                    <span>{insight.category}</span>
                    <span>•</span>
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-light text-gray-900 group-hover:text-blue-800 
                    transition-colors duration-300 mb-4">
                    {insight.title}
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    {insight.excerpt}
                  </p>
                  <div className="inline-flex items-center text-blue-800 font-light group-hover:translate-x-2 
                    transition-transform duration-300">
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
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Stay Informed
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12">
              Subscribe to receive our latest insights and analysis on African
              markets.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border border-gray-200 rounded focus:outline-none 
                  focus:border-blue-800 font-light"
              />
              <button className="px-8 py-4 bg-blue-800 text-white font-light rounded 
                hover:bg-blue-900 transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 