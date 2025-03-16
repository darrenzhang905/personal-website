// src/components/AboutSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Content Column */}
          <div className={`md:w-1/2 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              hey! i'm darren
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Some facts about me:
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc pl-5">
                <li>
                  <span>Based in New York City</span>
                </li>
                <li>
                  <span>Graduated with a degree in math from Carnegie Mellon University</span>
                </li>
                <li>
                  <span>Worked at Amazon and Capital One</span>
                </li>
                <li>
                  <span>When I'm not coding, I enjoy traveling and reselling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}