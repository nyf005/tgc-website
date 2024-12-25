"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationSync } from "@/hooks/useAnimationSync";
import { HeroBackground } from "@/components/ui/BackgroundShapes";

const services = [
  {
    category: "Market Entry & Expansion",
    description: "Strategic solutions for companies entering African markets",
    services: [
      {
        title: "Market Assessment",
        description: "Comprehensive analysis of market opportunities, risks, and competitive landscape",
        features: [
          "Market size and growth potential",
          "Competitive analysis",
          "Regulatory environment",
          "Risk assessment",
        ],
      },
      {
        title: "Entry Strategy",
        description: "Customized market entry strategies aligned with your business objectives",
        features: [
          "Market entry models",
          "Partnership strategies",
          "Route-to-market planning",
          "Investment structuring",
        ],
      },
    ],
  },
  {
    category: "Strategic Advisory",
    description: "Expert guidance for sustainable growth and operational excellence",
    services: [
      {
        title: "Business Development",
        description: "Comprehensive support for business growth and expansion",
        features: [
          "Growth strategy",
          "Business model optimization",
          "Strategic partnerships",
          "Performance improvement",
        ],
      },
      {
        title: "Operational Excellence",
        description: "Enhancing operational efficiency and effectiveness",
        features: [
          "Process optimization",
          "Supply chain management",
          "Quality management",
          "Cost optimization",
        ],
      },
    ],
  },
  {
    category: "Implementation",
    description: "Turn strategy into reality with our comprehensive implementation services",
    services: [
      {
        title: "Project Management",
        description: "End-to-end project management ensuring successful execution",
        features: [
          "Project planning and execution",
          "Risk management",
          "Stakeholder coordination",
          "Progress monitoring and reporting",
        ],
      },
      {
        title: "Change Management",
        description: "Facilitating smooth transitions and organizational alignment",
        features: [
          "Change readiness assessment",
          "Stakeholder engagement",
          "Training and capability building",
          "Cultural transformation",
        ],
      },
    ],
  },
  {
    category: "Research & Analysis",
    description: "Data-driven insights to inform strategic decision-making",
    services: [
      {
        title: "Market Intelligence",
        description: "Comprehensive analysis of market dynamics and trends",
        features: [
          "Market size and segmentation",
          "Consumer behavior analysis",
          "Competitor benchmarking",
          "Industry trend analysis",
        ],
      },
      {
        title: "Economic Research",
        description: "In-depth analysis of economic factors and indicators",
        features: [
          "Economic impact assessment",
          "Policy analysis",
          "Investment climate analysis",
          "Regional economic trends",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  const isVisible = useAnimationSync();

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
              Comprehensive Solutions for{" "}
              <span className="font-semibold">African Markets</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We offer end-to-end consulting services to help your business
              navigate, enter, and thrive in Africa&apos;s dynamic markets.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section - Subtle warm background */}
      <section className="bg-stone-50 py-24">
        <div className="container mx-auto px-6">
          {services.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              id={category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
              className="mb-32 last:mb-0"
            >
              <div className="max-w-3xl mb-16">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-4xl font-light text-gray-900 mb-6"
                >
                  {category.category}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 w-16 h-1 bg-blue-800"/>
                  <p className="text-xl text-gray-600 font-light pt-6">
                    {category.description}
                  </p>
                </motion.div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg 
                      transition-all duration-300 group"
                  >
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-lg bg-stone-50 flex items-center justify-center mr-4 
                          group-hover:bg-blue-50 transition-colors duration-300">
                          <svg
                            className="w-6 h-6 text-blue-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-light text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 font-light mb-8 min-h-[60px]">
                        {service.description}
                      </p>
                      <ul className="space-y-4 mb-8">
                        {service.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-600 font-light"
                          >
                            <svg 
                              className="w-5 h-5 text-blue-800 mr-3 mt-0.5 flex-shrink-0" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-8 py-6 bg-gray-50 group-hover:bg-stone-50 transition-colors duration-300">
                      <button className="text-blue-800 font-light group-hover:text-blue-900 
                        transition-colors duration-300 inline-flex items-center">
                        Explore {service.title}
                        <svg
                          className="w-4 h-4 ml-2 transform transition-transform 
                            duration-300 group-hover:translate-x-1"
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
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Clean blue background */}
      <section className="bg-blue-800 py-32">
        <motion.div 
          className="container mx-auto px-6 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                Ready to Expand Your <span className="font-medium">Business</span>?
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-xl text-blue-100 font-light mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Let&apos;s discuss how we can help you achieve your business objectives
              in African markets.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="px-8 py-4 bg-white text-blue-800 text-lg font-light 
                rounded-lg hover:bg-blue-50 transition-all duration-300 
                hover:shadow-lg w-full sm:w-auto">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border border-blue-200/30 text-white text-lg 
                font-light rounded-lg hover:border-blue-200/50 hover:bg-white/5 
                transition-all duration-300 group w-full sm:w-auto">
                Download Our Brochure
                <svg
                  className="w-4 h-4 ml-2 inline-block transform transition-transform 
                    duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
} 