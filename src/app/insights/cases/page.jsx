import React from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const caseStudies = [
  {
    id: 1,
    title: "Global Manufacturing Corp",
    description: "Manufacturing operations expansion in West Africa",
    industry: "Manufacturing",
    region: "West Africa",
    image: images.successStories.manufacturing,
    slug: "global-manufacturing",
  },
  {
    id: 2,
    title: "TechServe Solutions",
    description: "Digital services expansion across East Africa",
    industry: "Technology",
    region: "East Africa",
    image: images.successStories.technology,
    slug: "techserve-solutions",
  },
  {
    id: 3,
    title: "AgriGrow International",
    description: "Supply chain optimization across Southern Africa",
    industry: "Agriculture",
    region: "Southern Africa",
    image: images.successStories.agriculture,
    slug: "agrigrow-international",
  },
];

export default function CaseStudies() {
  return (
    <div className="py-16">
      <h1 className="text-display-lg font-light text-gray-900 mb-8">
        Success Stories
      </h1>
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
                priority={study.id === 1} // Prioritize loading first image
                loading={study.id === 1 ? "eager" : "lazy"} // Lazy load others
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
  );
}
