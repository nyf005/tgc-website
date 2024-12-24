import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

// This would typically come from your CMS or API
const getCaseStudy = async (slug) => {
  const caseStudies = {
    "global-manufacturing": {
      title: "Global Manufacturing Corp",
      description: "Manufacturing operations expansion in West Africa",
      fullDescription: `
        Global Manufacturing Corp needed to establish manufacturing operations in West Africa 
        while navigating complex regulatory environments.
      `,
      challenge: `
        Needed to establish manufacturing operations in West Africa while navigating complex 
        regulatory environments.
      `,
      solution: `
        Provided comprehensive market entry strategy and regulatory compliance framework.
      `,
      results: [
        "Successfully established operations in 3 countries",
        "30% reduction in setup time",
        "Created 500+ local jobs",
      ],
      industry: "Manufacturing",
      region: "West Africa",
      image: images.successStories.manufacturing,
    },
    "techserve-solutions": {
      title: "TechServe Solutions",
      description: "Digital services expansion across East Africa",
      fullDescription: `
        TechServe Solutions sought to expand digital services across East African markets 
        with local partnerships.
      `,
      challenge: `
        Sought to expand digital services across East African markets with local partnerships.
      `,
      solution: `
        Developed partnership strategy and facilitated key stakeholder relationships.
      `,
      results: [
        "Secured 5 strategic partnerships",
        "Achieved 200% YoY growth",
        "Reached 1M+ new users",
      ],
      industry: "Technology",
      region: "East Africa",
      image: images.successStories.technology,
    },
    "agrigrow-international": {
      title: "AgriGrow International",
      description: "Supply chain optimization across Southern Africa",
      fullDescription: `
        AgriGrow International required supply chain optimization for agricultural products 
        across multiple countries.
      `,
      challenge: `
        Required supply chain optimization for agricultural products across multiple countries.
      `,
      solution: `
        Implemented integrated logistics network and distribution strategy.
      `,
      results: [
        "40% reduction in logistics costs",
        "Improved delivery times by 50%",
        "Enhanced product quality control",
      ],
      industry: "Agriculture",
      region: "Southern Africa",
      image: images.successStories.agriculture,
    },
  };

  return caseStudies[slug] || null;
};

export default async function CaseStudy({ params }) {
  const caseStudy = await getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-display-lg font-light text-gray-900 mb-4">
            {caseStudy.title}
          </h1>
          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 bg-blue-50 text-blue-800 text-sm rounded-full">
              {caseStudy.industry}
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-800 text-sm rounded-full">
              {caseStudy.region}
            </span>
          </div>
        </div>

        <div className="relative aspect-video w-full mb-12">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Overview</h2>
          <p className="text-gray-600 whitespace-pre-line mb-8">
            {caseStudy.fullDescription}
          </p>

          <h2 className="text-2xl font-light text-gray-900 mb-4">Challenge</h2>
          <p className="text-gray-600 whitespace-pre-line mb-8">
            {caseStudy.challenge}
          </p>

          <h2 className="text-2xl font-light text-gray-900 mb-4">
            Our Solution
          </h2>
          <p className="text-gray-600 whitespace-pre-line mb-8">
            {caseStudy.solution}
          </p>

          <h2 className="text-2xl font-light text-gray-900 mb-4">Results</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {caseStudy.results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/insights/cases"
            className="text-blue-800 hover:text-blue-900 font-medium flex items-center gap-2"
          >
            <svg
              className="w-4 h-4 rotate-180"
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
            Back to all case studies
          </Link>
        </div>
      </div>
    </div>
  );
}
