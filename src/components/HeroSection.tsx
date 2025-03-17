// src/components/HeroSection.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row-reverse lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Image - Shown first on mobile, right on desktop */}
          <div
            className={`md:w-2/5 lg:w-1/2 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 mx-auto">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="h-full w-full rounded-full bg-gray-900 p-3">
                  <div className="h-full w-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                    <Image
                      src="/images/profile.png"
                      alt="Darren Zhang picture"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Shown second on mobile, left on desktop */}
          <div
            className={`md:w-3/5 lg:w-1/2 text-center md:text-left transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Darren Zhang
            </h1>

            <h2 className="text-xl sm:text-2xl text-gray-400 font-semibold mb-6">
              Software Engineer
            </h2>

            <p className="text-lg text-white mb-8 max-w-lg mx-auto md:mx-0">
              Crafting purposeful digital tools that solve everyday challenges
            </p>

            <div className="flex flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/#projects"
                className="bg-white text-black py-3 px-6 rounded-md font-medium shadow-lg hover:bg-gray-200 transition-all"
              >
                View My Work
              </Link>
              <Link
                href="/#contact"
                className="bg-white text-black py-3 px-6 rounded-md font-medium shadow-lg hover:bg-gray-200 transition-all"
              >
                Let's Connect
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/darrenzhang905"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/darrenzhang905"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
