"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationSync } from "@/hooks/useAnimationSync";

const services = [
  {
    title: "Market Entry Strategy",
    description:
      "Comprehensive market analysis and entry strategies tailored to your business objectives.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Strategic Advisory",
    description:
      "Expert guidance on business strategy, operational excellence, and growth opportunities.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Implementation Support",
    description:
      "End-to-end support in executing market entry plans and business transformation.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Research & Analysis",
    description:
      "In-depth market research, competitor analysis, and industry insights.",
    icon: (
      <svg
        className="w-8 h-8 text-blue-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

const CoreServices = () => {
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
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl py-24">
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={containerAnimation}
        >
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            variants={itemAnimation}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our Core <span className="font-semibold">Services</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Comprehensive solutions to help your business succeed in African
              markets
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerAnimation}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="bg-white p-8 rounded-lg border border-gray-100 hover:border-blue-100 
                  transition-all duration-300 group hover:shadow-lg"
              >
                <div
                  className="mb-6 p-2 inline-block rounded-lg bg-blue-50 
                  group-hover:bg-blue-100 transition-colors duration-300"
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;
