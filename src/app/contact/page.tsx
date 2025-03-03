"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useAnimationSync } from "@/hooks/useAnimationSync";
import { HeroBackground } from "@/components/ui/BackgroundShapes";
import emailjs from '@emailjs/browser';
import EmailJSSetupInfo from "./EmailJSSetupInfo";

const office = {
  city: "Newark",
  address: "Newark",
  postal: "Delaware, USA",
  phone: "302-317-1510",
  email: "tgc@consulttgc.com",
};

export default function ContactPage() {
  const isVisible = useAnimationSync();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    interest: "Strategic Business Development",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // EmailJS service information
  // You'll need to replace these with your actual EmailJS service details
  const emailjsServiceId = "service_gqeqmzm";  // replace with your Service ID
  const emailjsTemplateId = "template_fc9yuza"; // replace with your Template ID
  const emailjsPublicKey = "iuX3Fv_dJUeIY9HtD";   // replace with your Public Key

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitError("");
    
    // Create template parameters for EmailJS
    const templateParams = {
      to_email: office.email,
      from_name: formData.name,
      from_email: formData.email,
      from_company: formData.company,
      from_phone: formData.phone,
      subject: `New contact form submission: ${formData.interest}`,
      message: formData.message,
      interest: formData.interest
    };
    
    // Send email using EmailJS
    emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsPublicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        
        // Reset the form and show success state
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          interest: "Strategic Business Development",
        });
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setSubmitError("There was an error sending your message. Please try again or contact us directly.");
        setIsSubmitting(false);
      });
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
      <section className="bg-gray-50 py-24" id="form">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            variants={containerAnimation}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-5">
                {/* Contact Info Panel */}
                <div className="lg:col-span-2 bg-blue-800 text-white p-10 lg:p-12">
                  <motion.div variants={itemAnimation} className="h-full flex flex-col">
                    <div>
                      <h2 className="text-3xl font-light mb-6">Contact Us</h2>
                      <p className="text-blue-100 font-light mb-12">
                        We're here to help you navigate African markets and achieve your business objectives.
                      </p>
                    </div>
                    
                    <div className="space-y-8 mb-10">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 mr-4">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Location</h3>
                          <p className="text-blue-100 font-light">{office.city}, {office.postal}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 mr-4">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Phone</h3>
                          <p className="text-blue-100 font-light">{office.phone}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 mr-4">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium mb-1">Email</h3>
                          <p className="text-blue-100 font-light">{office.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-10 border-t border-blue-700">
                      <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Form */}
                <div className="lg:col-span-3 p-10 lg:p-12">
                  <motion.div variants={itemAnimation}>
                    <h2 className="text-3xl font-light text-gray-900 mb-8">
                      Send Us a Message
                    </h2>
                    
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-light transition-all duration-300"
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({ ...formData, company: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-light transition-all duration-300"
                            required
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-light transition-all duration-300"
                            required
                            placeholder="email@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-light transition-all duration-300"
                            placeholder="+1 (123) 456-7890"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Area of Interest
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) =>
                            setFormData({ ...formData, interest: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-light appearance-none bg-no-repeat transition-all duration-300"
                          style={{
                            backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                            backgroundPosition: "right 0.5rem center",
                            backgroundSize: "1.5em 1.5em"
                          }}
                        >
                          <option>Strategic Business Development</option>
                          <option>International Representation</option>
                          <option>Access to Resources</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          rows={5}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-light transition-all duration-300"
                          required
                          placeholder="How can we help you?"
                        />
                      </div>

                      {submitError && (
                        <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-700 mb-4">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p>{submitError}</p>
                          </div>
                        </div>
                      )}
                      
                      {isSubmitted && (
                        <div className="p-4 bg-green-50 border border-green-100 rounded-lg text-green-700 mb-4">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p>Thank you! Your message has been sent successfully. We'll be in touch soon.</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting || isSubmitted}
                          className={`w-full px-8 py-4 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center
                            ${isSubmitting || isSubmitted 
                              ? 'bg-blue-300 cursor-not-allowed' 
                              : 'bg-blue-800 hover:bg-blue-900'
                            }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : isSubmitted ? (
                            <>
                              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Sent!
                            </>
                          ) : (
                            <>
                              Send Message
                              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 