"use client";

import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceDetail, ServiceBulletPoint } from "@/types";
import { HeroBackground } from "@/components/ui/BackgroundShapes";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  
  // Find the service with the matching slug
  let service = null;
  let category = null;
  
  // Search through all categories and services to find the matching service
  for (const cat of services) {
    const found = cat.services.find(s => s.slug === slug);
    if (found) {
      service = found;
      category = cat;
      break;
    }
  }
  
  // If service is not found, show an error message
  if (!service) {
    return (
      <div className="container mx-auto py-24 px-6">
        <h1 className="text-4xl font-light text-gray-900 mb-8">Service Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">The service you're looking for could not be found.</p>
        <Link 
          href="/services" 
          className="px-6 py-3 bg-blue-800 text-white text-sm font-light rounded hover:bg-blue-900 transition-colors duration-300"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  // Check if fullDescription is a ServiceDetail object (not a string)
  const isStructuredContent = typeof service.fullDescription !== 'string';
  const serviceDetail = isStructuredContent ? service.fullDescription as ServiceDetail : null;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-6 min-h-[320px] flex items-center">
          <div className="max-w-4xl relative z-10">
            <h1 className="text-5xl font-light text-gray-900 mb-8">
              {service.title}
            </h1>
            <div className="flex items-center text-gray-600">
              <Link href="/services" className="hover:text-blue-800 transition-colors duration-300">
                Services
              </Link>
              <span className="mx-2">→</span>
              <Link href={`/services#${category?.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-blue-800 transition-colors duration-300">
                {category?.category}
              </Link>
              <span className="mx-2">→</span>
              <span className="text-blue-800">{service.title}</span>
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
              {isStructuredContent ? (
                <div className="space-y-10">
                  {/* Introduction */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-light text-blue-800 mb-4">{serviceDetail?.title}</h2>
                    <p className="text-gray-600 font-light leading-relaxed">{serviceDetail?.introduction}</p>
                  </div>
                  
                  {/* Approach */}
                  <div className="mb-8">
                    <h3 className="text-xl font-light text-gray-900 mb-3">Our Approach</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{serviceDetail?.approach}</p>
                  </div>
                  
                  {/* Service Sections */}
                  <div className="space-y-10">
                    {serviceDetail?.sections.map((section, index) => (
                      <div key={index} className="mb-8">
                        <h3 className="text-xl font-medium text-gray-800 mb-4">{section.title}</h3>
                        {Array.isArray(section.content) ? (
                          <div className="grid md:grid-cols-2 gap-6">
                            {(section.content as ServiceBulletPoint[]).map((item, i) => (
                              <div key={i} className="bg-stone-50 p-4 rounded-lg border border-gray-100">
                                <h4 className="text-lg font-light text-blue-800 mb-2">{item.title}</h4>
                                <p className="text-gray-600 font-light">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-600 font-light leading-relaxed">{section.content}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Deliverables */}
                  <div className="mb-8">
                    <h3 className="text-xl font-medium text-gray-800 mb-4">Deliverables</h3>
                    <ul className="space-y-2">
                      {serviceDetail?.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start text-gray-600 font-light">
                          <svg className="w-5 h-5 text-blue-800 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Success Story */}
                  {serviceDetail?.successStory && (
                    <div className="bg-stone-50 p-6 rounded-lg border border-blue-100">
                      <h3 className="text-xl font-medium text-gray-800 mb-3">
                        {serviceDetail.successStory.title || "Client Success Story"}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {serviceDetail.successStory.content}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                // Fallback for simple presentation
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-light text-blue-800 mb-4">{service.title}</h2>
                    <p className="text-gray-600 font-light leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-600 font-light">
                          <svg className="w-5 h-5 text-blue-800 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="bg-stone-50 rounded-xl p-8 shadow-sm sticky top-24 border border-gray-100">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Key Benefits</h3>
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
                <div className="space-y-4">
                  <Link 
                    href="/contact#form" 
                    className="w-full block text-center px-6 py-4 bg-blue-800 text-white text-sm font-light rounded-lg hover:bg-blue-900 transition-all duration-300 hover:shadow-lg"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/services" 
                    className="w-full block text-center px-6 py-4 border border-blue-800 text-blue-800 text-sm font-light rounded-lg hover:bg-blue-50 transition-all duration-300"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Services Section */}
      {category?.services && category.services.length > 1 && (
        <section className="bg-stone-50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              Related Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services
                .filter(s => s.slug !== slug)
                .map((relatedService, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-light text-gray-900 mb-4">
                      {relatedService.title}
                    </h3>
                    <p className="text-gray-600 font-light mb-6 line-clamp-3">
                      {relatedService.description}
                    </p>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 group-hover:bg-stone-50 transition-colors duration-300">
                    <Link 
                      href={`/services/${relatedService.slug}`}
                      className="flex justify-center items-center gap-2 py-2 px-4 bg-blue-50 rounded-lg text-blue-800 font-medium transition-all duration-300 hover:bg-blue-100 hover:shadow-md"
                    >
                      View Details
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
      )}

      {/* CTA Section */}
      <section className="bg-blue-800 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-light mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 font-light mb-12">
              Let's discuss how our {service.title} service can help you achieve your business objectives in African markets.
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