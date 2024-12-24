"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationSync } from "@/hooks/useAnimationSync";

const sections = [
  {
    title: "Information Collection",
    content: [
      "We collect information that you provide directly to us, including:",
      [
        "Contact information (name, email, phone number)",
        "Company details and business information",
        "Communication preferences and history",
        "Information shared during consultations",
      ],
    ],
  },
  {
    title: "Use of Information",
    content: [
      "We use the collected information for the following purposes:",
      [
        "Providing consulting and advisory services",
        "Communicating about our services and offerings",
        "Analyzing and improving our services",
        "Complying with legal obligations",
      ],
    ],
  },
  {
    title: "Information Sharing",
    content: [
      "We may share your information with:",
      [
        "Service providers and business partners",
        "Professional advisors and consultants",
        "Regulatory authorities when required",
        "Affiliated companies within our group",
      ],
      "We do not sell your personal information to third parties.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate security measures to protect your information:",
      [
        "Encryption of sensitive data",
        "Regular security assessments",
        "Access controls and authentication",
        "Employee training on data protection",
      ],
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the following rights regarding your personal information:",
      [
        "Access and review your information",
        "Request corrections or updates",
        "Opt-out of marketing communications",
        "Request deletion of your information",
      ],
      "Contact our privacy team to exercise these rights.",
    ],
  },
];

export default function PrivacyPage() {
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
              Privacy <span className="font-semibold">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We are committed to protecting your privacy and ensuring the security
              of your personal information. This policy explains how we collect,
              use, and safeguard your data.
            </p>
            <p className="text-sm text-gray-500 font-light mt-4">
              Last updated: March 15, 2024
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Policy Content */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="mb-16 last:mb-0"
              >
                <h2 className="text-2xl font-light text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((item, idx) => (
                    typeof item === "string" ? (
                      <p key={idx} className="text-gray-600 font-light">
                        {item}
                      </p>
                    ) : (
                      <ul key={idx} className="list-disc pl-6 space-y-2">
                        {item.map((bullet, bulletIdx) => (
                          <li
                            key={bulletIdx}
                            className="text-gray-600 font-light"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact Section */}
            <motion.div
              variants={itemAnimation}
              className="mt-16 p-8 bg-white rounded-lg border border-gray-100"
            >
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 font-light mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-600 font-light">
                <p>Email: privacy@tungsten.com</p>
                <p>Phone: +1 (202) 555-0123</p>
                <p>Address: 1701 Pennsylvania Avenue NW, Washington, DC 20006</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 