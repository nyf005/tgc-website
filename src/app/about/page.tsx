"use client";

import React from "react";
import Image from "@/components/ui/Image";
import { motion } from "framer-motion";
import { useAnimationSync } from "@/hooks/useAnimationSync";
import { images } from "@/lib/images";
import { HeroBackground } from "@/components/ui/BackgroundShapes";

const stats = [
  { number: "25+", label: "Years of Experience" },
  { number: "150+", label: "Projects Completed" },
  { number: "30+", label: "African Countries" },
  { number: "500M+", label: "Market Value Created" },
];

const values = [
  {
    title: "Deep Expertise",
    description: "Unparalleled knowledge of African markets and business environments",
  },
  {
    title: "Client Focus",
    description: "Tailored solutions that align with your strategic objectives",
  },
  {
    title: "Local Insight",
    description: "Strong relationships with key stakeholders across the continent",
  },
  {
    title: "Proven Results",
    description: "Track record of successful market entries and business growth",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    bio: "Former McKinsey partner with 20+ years of experience in African markets. Led major transformation projects across the continent.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Okonjo",
    role: "Managing Director, East Africa",
    bio: "15+ years experience in strategic consulting. Expert in technology and financial services sectors across East Africa.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Amina Diallo",
    role: "Head of Research",
    bio: "PhD in Economics, specialized in African market dynamics. Previously led research at World Bank's Africa division.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chang",
    role: "Director of Operations",
    bio: "Former BCG consultant with extensive experience in operational transformation and supply chain optimization.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function AboutPage() {
  const isVisible = useAnimationSync();

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main>
      {/* Hero Section - Clean white */}
      <section className="relative bg-white overflow-hidden">
        <HeroBackground />
        <motion.div
          className="container mx-auto px-6 min-h-[480px] flex items-center"
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={containerAnimation}
        >
          <motion.div className="max-w-4xl relative z-10" variants={itemAnimation}>
            <h1 className="text-5xl font-light text-gray-900 mb-8">
              Shaping the Future of{" "}
              <span className="font-semibold">Business in Africa</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Tungsten Global Consulting bridges the gap between American enterprise
              and African opportunity, creating sustainable value through deep
              expertise and local knowledge.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Subtle warm background */}
      <section className="bg-stone-50 py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                className="text-center"
              >
                <h3 className="text-4xl font-light text-blue-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-light">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Clean design with accent color */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-20 items-center"
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            <motion.div variants={itemAnimation}>
              <div className="space-y-16">
                <div>
                  <h2 className="text-4xl font-light text-gray-900 mb-4">
                    Our <span className="font-semibold text-blue-800">Mission</span>
                  </h2>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    We empower American businesses to successfully navigate and thrive
                    in Africa&apos;s diverse markets. Through strategic insight and local
                    expertise, we transform challenges into opportunities.
                  </p>
                </div>

                <motion.div 
                  className="grid grid-cols-2 gap-x-12 gap-y-10"
                  variants={containerAnimation}
                >
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      variants={itemAnimation}
                      className="group"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 
                        group-hover:text-blue-800 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 font-light">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemAnimation}
              className="relative h-[700px]"
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images.office.main}
                  alt="Our Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Light gray background */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              variants={itemAnimation}
            >
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Meet Our <span className="font-semibold text-blue-800">Leadership</span>
              </h2>
              <p className="text-xl text-gray-600 font-light">
                A diverse team of experts committed to bridging opportunities
                between American enterprise and African markets.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerAnimation}
            >
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemAnimation}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-sm 
                    hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 
                        group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform 
                      translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                      <p className="text-sm font-light leading-relaxed">
                        {member.bio}
                      </p>
                      <div className="flex space-x-4 mt-4">
                        <a
                          href={member.social.linkedin}
                          className="text-white/80 hover:text-white transition-colors duration-300"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href={member.social.twitter}
                          className="text-white/80 hover:text-white transition-colors duration-300"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-blue-800 font-light text-sm">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Join the Team CTA */}
            <motion.div 
              className="max-w-3xl mx-auto text-center mt-20"
              variants={itemAnimation}
            >
              <div className="bg-blue-800 rounded-xl p-10 text-white shadow-lg">
                <h3 className="text-2xl font-light mb-4">
                  Join Our Vision for Africa
                </h3>
                <p className="font-light mb-8 text-blue-100">
                  We're looking for passionate individuals ready to make an impact
                  in one of the world's most dynamic markets.
                </p>
                <a
                  href="/careers"
                  className="inline-flex items-center bg-white text-blue-800 px-6 py-3 
                    rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Explore Opportunities
                  <svg
                    className="w-4 h-4 ml-2"
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
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 