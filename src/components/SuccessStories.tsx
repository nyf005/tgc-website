"use client";

import React, { useState } from "react";
import Image from "@/components/ui/Image";
import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/lib/data/case-studies";

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-light text-gray-900 mb-6">
          Client Success <span className="font-semibold">Stories</span>
        </h2>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          We&apos;ve helped numerous organizations achieve remarkable results across
          African markets.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {caseStudies.map((story, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`cursor-pointer group ${
              activeStory === index
                ? "border-blue-800"
                : "border-gray-100 hover:border-blue-100"
            } border bg-white p-8 transition-all duration-300`}
            onClick={() => setActiveStory(index)}
          >
            <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
              <Image
                src={story.image}
                alt={`${story.title} - ${story.industry}`}
                fill
                className="object-cover transition-transform duration-500 
                  group-hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {story.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 font-light">
                  <span>{story.industry}</span>
                  <span>•</span>
                  <span>{story.region}</span>
                </div>
              </div>
              <p className="text-gray-600 font-light leading-relaxed">
                {story.challenge}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed View */}
      <motion.div
        key={activeStory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 p-12 rounded-lg"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Solution Provided
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {caseStudies[activeStory].solution}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Key Results
              </h3>
              <ul className="space-y-4">
                {caseStudies[activeStory].results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 font-light"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={`/insights/cases/${caseStudies[activeStory].slug}`}
              className="px-8 py-4 bg-blue-800 text-white text-lg font-light 
              rounded hover:bg-blue-900 transition-colors duration-300 inline-block"
            >
              Read Full Case Study
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={caseStudies[activeStory].image}
              alt={caseStudies[activeStory].title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SuccessStories;
