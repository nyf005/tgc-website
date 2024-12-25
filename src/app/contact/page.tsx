"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAnimationSync } from "@/hooks/useAnimationSync";
import { HeroBackground } from "@/components/ui/BackgroundShapes";

const offices = [
  {
    city: "Washington DC",
    address: "1701 Pennsylvania Avenue NW",
    postal: "Washington, DC 20006",
    phone: "+1 (202) 555-0123",
    email: "dc@tungsten.com",
  },
  {
    city: "Nairobi",
    address: "The Oval, Ring Road Parklands",
    postal: "Nairobi, Kenya",
    phone: "+254 20 555 0123",
    email: "nairobi@tungsten.com",
  },
  {
    city: "Lagos",
    address: "Victoria Island Business District",
    postal: "Lagos, Nigeria",
    phone: "+234 1 555 0123",
    email: "lagos@tungsten.com",
  },
];

export default function ContactPage() {
  const isVisible = useAnimationSync();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    interest: "Market Entry",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main>
      {/* Hero Section */}
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
              Let&apos;s Start a <span className="font-semibold">Conversation</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Connect with our experts to discuss how we can help your business
              succeed in African markets.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid lg:grid-cols-2 gap-16"
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            {/* Form */}
            <motion.div variants={itemAnimation}>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-light text-gray-600 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none 
                        focus:border-blue-800 font-light transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-600 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none 
                        focus:border-blue-800 font-light transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-light text-gray-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none 
                        focus:border-blue-800 font-light transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-gray-600 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none 
                        focus:border-blue-800 font-light transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-600 mb-2">
                    Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) =>
                      setFormData({ ...formData, interest: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none 
                      focus:border-blue-800 font-light bg-white transition-all duration-300"
                  >
                    <option>Market Entry</option>
                    <option>Strategic Advisory</option>
                    <option>Implementation Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-600 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none 
                      focus:border-blue-800 font-light transition-all duration-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-800 text-white font-light rounded 
                    hover:bg-blue-900 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Offices */}
            <motion.div variants={itemAnimation}>
              <h2 className="text-2xl font-light text-gray-900 mb-8">
                Our Offices
              </h2>
              <motion.div
                className="space-y-12"
                variants={containerAnimation}
              >
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    variants={itemAnimation}
                    className="space-y-2"
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {office.city}
                    </h3>
                    <div className="text-gray-600 font-light space-y-1">
                      <p>{office.address}</p>
                      <p>{office.postal}</p>
                      <p>{office.phone}</p>
                      <p>{office.email}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 