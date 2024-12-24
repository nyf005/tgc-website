"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationSync } from "@/hooks/useAnimationSync";

const positions = [
  {
    title: "Senior Strategy Consultant",
    location: "Washington DC",
    type: "Full-time",
    department: "Advisory",
    description: "Lead strategic consulting projects for major clients entering African markets.",
    requirements: [
      "8+ years of management consulting experience",
      "Track record of successful market entry projects",
      "Strong expertise in African markets",
      "MBA from top-tier institution",
    ],
  },
  {
    title: "Market Research Analyst",
    location: "Nairobi",
    type: "Full-time",
    department: "Research",
    description: "Conduct in-depth market research and analysis across African regions.",
    requirements: [
      "3-5 years of market research experience",
      "Strong analytical and quantitative skills",
      "Experience in African markets",
      "Advanced degree in Economics or related field",
    ],
  },
  {
    title: "Project Manager",
    location: "Lagos",
    type: "Full-time",
    department: "Implementation",
    description: "Manage complex implementation projects for international clients.",
    requirements: [
      "5+ years of project management experience",
      "PMP certification preferred",
      "Experience in West African markets",
      "Strong stakeholder management skills",
    ],
  },
];

const values = [
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, delivering exceptional results for our clients.",
  },
  {
    title: "Innovation",
    description: "We embrace creative solutions and new approaches to solve complex challenges in African markets.",
  },
  {
    title: "Integrity",
    description: "We operate with unwavering ethical standards and transparency in all our dealings.",
  },
  {
    title: "Impact",
    description: "We are committed to creating lasting positive change in the communities we serve.",
  },
];

export default function CareersPage() {
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
              Join Our <span className="font-semibold">Team</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Be part of a dynamic team shaping the future of business in Africa.
              We offer exciting opportunities for growth and impact.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
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
                Our Values
              </h2>
              <p className="text-xl text-gray-600 font-light">
                The principles that guide our work and culture
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerAnimation}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemAnimation}
                  className="bg-white p-8 rounded-lg border border-gray-100 
                    hover:border-blue-100 transition-all duration-300"
                >
                  <h3 className="text-xl font-light text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-light">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            <motion.div variants={itemAnimation}>
              <h2 className="text-4xl font-light text-gray-900 mb-12">
                Open Positions
              </h2>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerAnimation}
            >
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  variants={itemAnimation}
                  className="bg-white border border-gray-100 rounded-lg p-8 
                    hover:border-blue-100 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center 
                    lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-light text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 
                        font-light">
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                        <span>•</span>
                        <span>{position.department}</span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 px-6 py-3 bg-blue-800 
                      text-white font-light rounded hover:bg-blue-900 
                      transition-colors duration-300">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-600 font-light mb-6">
                    {position.description}
                  </p>
                  <div>
                    <h4 className="text-lg font-light text-gray-900 mb-4">
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {position.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600 font-light"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 