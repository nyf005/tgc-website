import React from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data/case-studies";

export default function CaseStudies() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-light text-gray-900 mb-8">
              Success <span className="font-semibold">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Discover how we&apos;ve helped businesses succeed across African markets through 
              strategic insights and local expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden 
                  hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video relative bg-gray-100">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={study.id === 1}
                    loading={study.id === 1 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-blue-800 text-sm rounded-full">
                      {study.industry}
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-800 text-sm rounded-full">
                      {study.region}
                    </span>
                  </div>
                  <Link
                    href={`/insights/cases/${study.slug}`}
                    className="text-blue-800 hover:text-blue-900 font-medium flex items-center gap-2
                      group transition-colors duration-300"
                  >
                    Read full case study
                    <svg
                      className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M5 12h14M12 5l7 7-7 7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
