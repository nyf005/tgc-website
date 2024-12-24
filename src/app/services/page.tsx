"use client";

import React from "react";
import { motion } from "framer-motion";

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
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-light text-gray-900 mb-8">
              Comprehensive Solutions for{" "}
              <span className="font-semibold">African Markets</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We offer end-to-end consulting services to help your business
              navigate, enter, and thrive in Africa&apos;s dynamic markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          {services.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              id={category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
              className="mb-20 last:mb-0"
            >
              <div className="max-w-3xl mb-16">
                <h2 className="text-3xl font-light text-gray-900 mb-4">
                  {category.category}
                </h2>
                <p className="text-xl text-gray-600 font-light">
                  {category.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 border border-gray-100 hover:border-blue-100 
                      transition-all duration-300 group hover:shadow-lg"
                  >
                    <h3 className="text-2xl font-light text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 font-light mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 font-light"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-8 border-t border-gray-100">
                      <button className="text-blue-800 font-light group-hover:text-blue-900 
                        transition-colors duration-300 inline-flex items-center">
                        Learn More
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

      {/* CTA Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              Ready to Expand Your Business?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12">
              Let&apos;s discuss how we can help you achieve your business objectives
              in African markets.
            </p>
            <button className="px-8 py-4 bg-blue-800 text-white text-lg font-light 
              rounded hover:bg-blue-900 transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 