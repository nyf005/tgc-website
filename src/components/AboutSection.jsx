import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-6">
              Tungsten Global Consulting (TGC) is a U.S.-based consultancy that
              serves as a trusted bridge for American companies seeking to
              expand into Africa's dynamic and high-potential markets.
            </p>
            <p className="text-gray-600 mb-6">
              We specialize in international business facilitation, scientific
              and analytical solutions, and strategic representation, delivering
              practical solutions that enable U.S. firms to achieve sustainable
              growth in Sub-Saharan Africa.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-800 transition duration-300">
              Learn More
            </button>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-900 mr-2">✓</span>
                Decades of regional expertise
              </li>
              <li className="flex items-center">
                <span className="text-blue-900 mr-2">✓</span>
                Strong government relationships
              </li>
              <li className="flex items-center">
                <span className="text-blue-900 mr-2">✓</span>
                Proven track record
              </li>
              <li className="flex items-center">
                <span className="text-blue-900 mr-2">✓</span>
                Seamless market entry
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
