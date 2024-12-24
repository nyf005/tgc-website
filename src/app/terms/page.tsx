"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAnimationSync } from "@/hooks/useAnimationSync";

const sections = [
  {
    title: "Agreement to Terms",
    content: [
      "By accessing our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.",
    ],
  },
  {
    title: "Services Description",
    content: [
      "Our services include:",
      [
        "Strategic consulting and advisory services",
        "Market entry and expansion planning",
        "Research and analysis services",
        "Implementation support and project management",
      ],
      "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content, materials, and deliverables provided through our services are protected by intellectual property rights and remain our property or that of our licensors.",
      [
        "Reports, analyses, and presentations",
        "Methodologies and frameworks",
        "Proprietary data and research",
        "Trademarks and brand assets",
      ],
      "Any unauthorized use of our intellectual property is strictly prohibited.",
    ],
  },
  {
    title: "Confidentiality",
    content: [
      "We maintain strict confidentiality regarding:",
      [
        "Client information and business data",
        "Project details and outcomes",
        "Strategic plans and initiatives",
        "Proprietary methodologies",
      ],
      "All parties must adhere to signed non-disclosure agreements where applicable.",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "Our payment terms include:",
      [
        "Fees are payable as specified in service agreements",
        "Payment is required within 30 days of invoice",
        "Late payments may incur additional charges",
        "All fees are non-refundable unless otherwise specified",
      ],
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "We shall not be liable for:",
      [
        "Indirect or consequential losses",
        "Business interruption or lost profits",
        "Third-party claims",
        "Damages exceeding fees paid for services",
      ],
      "This limitation applies to the maximum extent permitted by law.",
    ],
  },
];

export default function TermsPage() {
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
              Terms of <span className="font-semibold">Service</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Please read these terms carefully before using our services. By
              accessing or using our services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-500 font-light mt-4">
              Last updated: March 15, 2024
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Terms Content */}
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
                Questions About These Terms?
              </h2>
              <p className="text-gray-600 font-light mb-6">
                If you have any questions about these Terms of Service, please contact our legal team:
              </p>
              <div className="space-y-2 text-gray-600 font-light">
                <p>Email: legal@tungsten.com</p>
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