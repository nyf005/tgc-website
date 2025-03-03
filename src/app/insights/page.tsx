"use client";

import React, { useState } from "react";
import Image from "@/components/ui/Image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAnimationSync } from "@/hooks/useAnimationSync";
import { HeroBackground } from "@/components/ui/BackgroundShapes";
import { caseStudies } from "@/data/case-studies";
import { images } from "@/lib/images";

export default function CaseStudiesPage() {
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
              Case <span className="font-semibold">Studies</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Success stories from our clients across various industries and markets in Africa.
              Explore how we've helped businesses overcome challenges and achieve remarkable results.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer bg-white hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden"
              >
                <Link href={`/insights/${caseStudy.slug}`} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={images.successStories[caseStudy.image]}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 font-light mb-4">
                    <span>{caseStudy.category}</span>
                    <span>•</span>
                    <span>{caseStudy.date}</span>
                    <span>•</span>
                    <span>{caseStudy.readTime}</span>
                  </div>
                  <Link href={`/insights/${caseStudy.slug}`} className="block">
                    <h2 className="text-2xl font-light text-gray-900 group-hover:text-blue-800 
                      transition-colors duration-300 mb-4">
                      {caseStudy.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">
                    {caseStudy.excerpt}
                  </p>
                  <Link href={`/insights/${caseStudy.slug}`} className="inline-flex items-center text-blue-800 font-light group-hover:translate-x-2 
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
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12">
              Contact us to discuss how we can help your business succeed in African markets.
            </p>
            <Link href="/contact" className="px-8 py-4 bg-blue-800 text-white font-light rounded 
              hover:bg-blue-900 transition-colors duration-300 inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 