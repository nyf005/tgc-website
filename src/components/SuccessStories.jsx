"use client";

import React, { useState } from "react";
import Image from "@/components/ui/Image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import Link from "next/link";

const stories = [
  {
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    location: "West Africa",
    image: images.successStories.manufacturing,
    challenge:
      "Needed to establish manufacturing operations in West Africa while navigating complex regulatory environments.",
    solution:
      "Provided comprehensive market entry strategy and regulatory compliance framework.",
    results: [
      "Successfully established operations in 3 countries",
      "30% reduction in setup time",
      "Created 500+ local jobs",
    ],
    slug: "global-manufacturing",
  },
  {
    client: "TechServe Solutions",
    industry: "Technology",
    location: "East Africa",
    image: images.successStories.technology,
    challenge:
      "Sought to expand digital services across East African markets with local partnerships.",
    solution:
      "Developed partnership strategy and facilitated key stakeholder relationships.",
    results: [
      "Secured 5 strategic partnerships",
      "Achieved 200% YoY growth",
      "Reached 1M+ new users",
    ],
    slug: "techserve-solutions",
  },
  {
    client: "AgriGrow International",
    industry: "Agriculture",
    location: "Southern Africa",
    image: images.successStories.agriculture,
    challenge:
      "Required supply chain optimization for agricultural products across multiple countries.",
    solution:
      "Implemented integrated logistics network and distribution strategy.",
    results: [
      "40% reduction in logistics costs",
      "Improved delivery times by 50%",
      "Enhanced product quality control",
    ],
    slug: "agrigrow-international",
  },
];

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-light text-gray-900 mb-6">
          Client Success <span className="font-semibold">Stories</span>
        </h2>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          We've helped numerous organizations achieve remarkable results across
          African markets.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {stories.map((story, index) => (
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
                alt={`${story.client} - ${story.industry}`}
                fill
                className="object-cover transition-transform duration-500 
                  group-hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {story.client}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 font-light">
                  <span>{story.industry}</span>
                  <span>•</span>
                  <span>{story.location}</span>
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
                {stories[activeStory].solution}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Key Results
              </h3>
              <ul className="space-y-4">
                {stories[activeStory].results.map((result, index) => (
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
              href={`/insights/cases/${stories[activeStory].slug}`}
              className="px-8 py-4 bg-blue-800 text-white text-lg font-light 
              rounded hover:bg-blue-900 transition-colors duration-300 inline-block"
            >
              Read Full Case Study
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={stories[activeStory].image}
              alt={stories[activeStory].client}
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
