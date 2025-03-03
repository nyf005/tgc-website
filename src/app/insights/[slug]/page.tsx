"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "@/components/ui/Image";
import { motion } from "framer-motion";
import { HeroBackground } from "@/components/ui/BackgroundShapes";
import { caseStudies } from "@/data/case-studies";
import { images } from "@/lib/images";
import ReactMarkdown from "react-markdown";

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  
  // Find the case study with the matching slug
  const caseStudy = caseStudies.find(cs => cs.slug === slug);
  
  // If case study is not found, show an error message
  if (!caseStudy) {
    return (
      <div className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Case Study Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">The case study you're looking for could not be found.</p>
        <Link 
          href="/insights" 
          className="px-6 py-3 bg-blue-800 text-white text-sm font-light rounded hover:bg-blue-900 transition-colors duration-300"
        >
          Back to Case Studies
        </Link>
      </div>
    );
  }
  
  // Extract key sections from the markdown content
  const clientChallenge = caseStudy.content.match(/## Client Challenge\n\n([\s\S]*?)(?=\n##)/)?.[1] || "";
  const approach = caseStudy.content.match(/## Our Approach\n\n([\s\S]*?)(?=\n##)/)?.[1] || "";
  const results = caseStudy.content.match(/## Results Achieved\n\n([\s\S]*?)(?=\n##)/)?.[1] || "";
  const impact = caseStudy.content.match(/## Long-Term Impact\n\n([\s\S]*?)(?=$)/)?.[1] || "";
  
  // Extract bullet points from results section
  const resultPoints = results.match(/- \*\*(.*?)\*\*: (.*?)(?=\n|$)/g)?.map(point => {
    const [_, title, description] = point.match(/- \*\*(.*?)\*\*: (.*?)(?=\n|$)/) || [];
    return { title, description };
  }) || [];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-6 min-h-[320px] flex items-center">
          <div className="max-w-4xl relative z-10">
            <h1 className="text-5xl font-light text-gray-900 mb-8">
              {caseStudy.title}
            </h1>
            <div className="flex items-center text-gray-600">
              <Link href="/insights" className="hover:text-blue-800 transition-colors duration-300">
                Case Studies
              </Link>
              <span className="mx-2">→</span>
              <span className="text-blue-800">{caseStudy.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-stone-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden shadow-md h-80 lg:h-96">
                <Image
                  src={images.successStories[caseStudy.image]}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 h-full flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-600 font-light mb-3">
                  <span>{caseStudy.date}</span>
                  <span>•</span>
                  <span>{caseStudy.readTime}</span>
                </div>
                <h2 className="text-2xl font-light text-gray-900 mb-4">About This Case Study</h2>
                <p className="text-gray-600 font-light mb-6">
                  {caseStudy.excerpt}
                </p>
                {caseStudy.author && (
                  <div className="text-sm text-gray-600 font-light">
                    <span className="text-blue-800 font-medium">Case Lead:</span> {caseStudy.author}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16">
        <motion.div 
          className="container mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-10">
                {/* Introduction */}
                <div className="mb-8">
                  <h2 className="text-2xl font-light text-blue-800 mb-4">Client Challenge</h2>
                  <div className="text-gray-600 font-light leading-relaxed prose prose-blue max-w-none">
                    <ReactMarkdown>{clientChallenge}</ReactMarkdown>
                  </div>
                </div>
                
                {/* Approach */}
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">Our Approach</h3>
                  <div className="text-gray-600 font-light leading-relaxed prose prose-blue max-w-none">
                    <ReactMarkdown>{approach}</ReactMarkdown>
                  </div>
                </div>
                
                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">Results Achieved</h3>
                  {resultPoints.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {resultPoints.map((item, i) => (
                        <div key={i} className="bg-stone-50 p-4 rounded-lg border border-gray-100">
                          <h4 className="text-lg font-light text-blue-800 mb-2">{item.title}</h4>
                          <p className="text-gray-600 font-light">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-gray-600 font-light leading-relaxed prose prose-blue max-w-none">
                      <ReactMarkdown>{results}</ReactMarkdown>
                    </div>
                  )}
                </div>
                
                {/* Long-Term Impact */}
                <div className="bg-stone-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    Long-Term Impact
                  </h3>
                  <div className="text-gray-600 font-light leading-relaxed prose prose-blue max-w-none">
                    <ReactMarkdown>{impact}</ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-stone-50 rounded-xl p-8 shadow-sm sticky top-24 border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Key Outcomes</h3>
                <ul className="space-y-4 mb-8">
                  {resultPoints.length > 0 ? (
                    resultPoints.slice(0, 5).map((point, i) => (
                      <li key={i} className="flex items-start text-gray-600 font-light">
                        <svg className="w-5 h-5 text-blue-800 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span><span className="font-medium">{point.title}:</span> {point.description}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-600 font-light">
                      Significant improvements in operational efficiency and business outcomes.
                    </li>
                  )}
                </ul>
                <div className="space-y-4">
                  <Link 
                    href="/contact#form" 
                    className="w-full block text-center px-6 py-4 bg-blue-800 text-white text-sm font-light rounded-lg hover:bg-blue-900 transition-all duration-300 hover:shadow-lg"
                  >
                    Discuss Your Project
                  </Link>
                  <Link 
                    href="/insights" 
                    className="w-full block text-center px-6 py-4 border border-blue-800 text-blue-800 text-sm font-light rounded-lg hover:bg-blue-50 transition-all duration-300"
                  >
                    View All Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Case Studies */}
      <section className="bg-stone-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
            More Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies
              .filter(cs => cs.slug !== slug)
              .map((relatedCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
              >
                <Link href={`/insights/${relatedCase.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={images.successStories[relatedCase.image]}
                      alt={relatedCase.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-light text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                    {relatedCase.title}
                  </h3>
                  <p className="text-gray-600 font-light mb-6 line-clamp-3">
                    {relatedCase.excerpt}
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 group-hover:bg-stone-50 transition-colors duration-300">
                  <Link 
                    href={`/insights/${relatedCase.slug}`}
                    className="flex justify-center items-center gap-2 py-2 px-4 bg-blue-50 rounded-lg text-blue-800 font-medium transition-all duration-300 hover:bg-blue-100 hover:shadow-md"
                  >
                    Read Case Study
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-light mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 font-light mb-12">
              Let's discuss how our expertise can help your business achieve similar results in African markets.
            </p>
            <Link
              href="/contact#form"
              className="px-8 py-4 bg-white text-blue-800 text-lg font-light rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}