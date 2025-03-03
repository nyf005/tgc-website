"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';

interface ServiceProps {
  service: {
    title: string;
    description: string;
    features: string[];
    learnMoreLabel: string;
  }
}

export function ServiceCard({ service }: ServiceProps) {
  const [expanded, setExpanded] = useState(false);
  const summaryText = service.description.split('\n\n')[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      <div className="p-8 flex-grow">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-lg bg-stone-50 flex items-center justify-center mr-4 group-hover:bg-blue-50 transition-colors duration-300">
            <svg className="w-6 h-6 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-light text-gray-900">{service.title}</h3>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 font-light text-lg leading-relaxed">{summaryText}</p>
        </div>

        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          <div className="space-y-6 border-t border-gray-100 pt-6">
            <div className="prose prose-blue max-w-none">
              <ReactMarkdown>
                {service.description.split('\n\n').slice(1).join('\n\n')}
              </ReactMarkdown>
            </div>
          </div>
        </motion.div>

        <ul className="space-y-4 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start text-gray-600 font-light">
              <svg className="w-5 h-5 text-blue-800 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="px-8 py-6 bg-gray-50 group-hover:bg-stone-50 transition-colors duration-300">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 py-2 px-4 bg-blue-50 rounded-lg text-blue-800 font-medium transition-all duration-300 hover:bg-blue-100 hover:shadow-md"
        >
          {expanded ? "Show less" : service.learnMoreLabel}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
