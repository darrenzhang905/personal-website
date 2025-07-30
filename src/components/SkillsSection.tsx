"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function SkillsSection() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I&apos;ve worked with a variety of technologies in the development world.
            Here&apos;s an overview of my technical skills.
          </p>
          <div className="h-1 w-20 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming Languages */}
          <div
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  TypeScript
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  HTML
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  CSS
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Python
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Java
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  C
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Swift
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Ruby
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  SQL
                </span>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Node
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Angular
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  JUnit
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Cypress
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Spring
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Cucumber
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Maven
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Mockito
                </span>
              </div>
            </div>
          </div>

          {/* Software */}
          <div
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Software</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  AWS
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Git
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Splunk
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Snowflake
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  New Relic
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  Jenkins
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  AWS Certified Cloud Practitioner
                </span>
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  AWS Certified Solutions Architect - Associate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
