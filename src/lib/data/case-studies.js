import { images } from "@/lib/images";

export const caseStudies = [
  {
    id: 1,
    client: "Global Manufacturing Corp",
    title: "Global Manufacturing Corp",
    slug: "global-manufacturing",
    industry: "Manufacturing",
    region: "West Africa",
    image: images.successStories.manufacturing,
    description: "Manufacturing operations expansion in West Africa",
    challenge:
      "Needed to establish manufacturing operations in West Africa while navigating complex regulatory environments.",
    solution:
      "Provided comprehensive market entry strategy and regulatory compliance framework.",
    results: [
      "Successfully established operations in 3 countries",
      "30% reduction in setup time",
      "Created 500+ local jobs",
    ],
  },
  {
    id: 2,
    client: "TechServe Solutions",
    title: "TechServe Solutions",
    slug: "techserve-solutions",
    industry: "Technology",
    region: "East Africa",
    image: images.successStories.technology,
    description: "Digital services expansion across East Africa",
    challenge:
      "Sought to expand digital services across East African markets with local partnerships.",
    solution:
      "Developed partnership strategy and facilitated key stakeholder relationships.",
    results: [
      "Secured 5 strategic partnerships",
      "Achieved 200% YoY growth",
      "Reached 1M+ new users",
    ],
  },
  {
    id: 3,
    client: "AgriGrow International",
    title: "AgriGrow International",
    slug: "agrigrow-international",
    industry: "Agriculture",
    region: "Southern Africa",
    image: images.successStories.agriculture,
    description: "Supply chain optimization across Southern Africa",
    challenge:
      "Required supply chain optimization for agricultural products across multiple countries.",
    solution:
      "Implemented integrated logistics network and distribution strategy.",
    results: [
      "40% reduction in logistics costs",
      "Improved delivery times by 50%",
      "Enhanced product quality control",
    ],
  },
];
