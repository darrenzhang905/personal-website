// src/components/SkillsSection.tsx
'use client';

import { useRef, useState, useEffect } from 'react';

export default function SkillsSection() {
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
      id="skills" 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's an overview of my technical skills.
          </p>
        </div>

        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow text-sm">Jest</span>
            <span className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow text-sm">Cypress</span>
            <span className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow text-sm">Docker</span>
            <span className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full shadow text-sm">AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}