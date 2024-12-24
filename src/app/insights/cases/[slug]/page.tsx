import React from "react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data/case-studies";
import { notFound } from "next/navigation";

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              {study.title}
            </h1>
            <div className="flex gap-4 mb-8">
              <span className="px-4 py-2 bg-blue-50 text-blue-800 text-sm rounded-full">
                {study.industry}
              </span>
              <span className="px-4 py-2 bg-blue-50 text-blue-800 text-sm rounded-full">
                {study.region}
              </span>
            </div>
          </div>

          <div className="aspect-video relative mb-12 rounded-lg overflow-hidden">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                Challenge
              </h2>
              <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                Solution
              </h2>
              <p className="text-gray-600 leading-relaxed">{study.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                Results
              </h2>
              <ul className="space-y-4">
                {study.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-3" />
                    {result}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-12 mb-20">
            <Link
              href="/insights/cases"
              className="inline-flex items-center text-blue-800 hover:text-blue-900 group transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Success Stories
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
} 