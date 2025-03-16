// src/app/resume/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Darren Zhang - Resume",
  description: "Professional resume of Darren Zhang- Software Engineer",
};

export default function Resume() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 flex justify-between items-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              My Resume
            </h1>
            
            <a 
              href="/Darren Zhang Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Download PDF
            </a>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-10">
            {/* Header */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Your Full Name
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">
                Software Engineer
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  darrenzhang905@gmail.com
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  New York, NY
                </p>
                <p className="text-gray-600 dark:text-gray-400 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                  </svg>
                  <a 
                    href="https://yourportfolio.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    yourportfolio.com
                  </a>
                </p>
              </div>
            </div>
            
            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Passionate and creative Frontend Developer with [X] years of experience designing 
                and building responsive websites and web applications. Specializing in modern 
                JavaScript frameworks like React and Next.js, with a strong focus on creating 
                intuitive, accessible, and performant user interfaces. Committed to clean, 
                maintainable code and staying current with industry best practices.
              </p>
            </div>
            
            {/* Work Experience */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Work Experience
              </h3>
              
              <div className="space-y-6">
                {/* Job 1 */}
                <div>
                  <div className="flex justify-between flex-wrap">
                    <h4 className="text-md font-medium text-gray-900 dark:text-white">
                      Frontend Developer
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Jan 2022 - Present
                    </p>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">
                    Company Name, Location
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Developed and maintained responsive websites and web applications using React.js and Next.js</li>
                    <li>Collaborated with design team to implement UI/UX improvements, resulting in a 30% increase in user engagement</li>
                    <li>Implemented state management solutions using Redux and Context API</li>
                    <li>Optimized application performance, improving load times by 40%</li>
                  </ul>
                </div>
                
                {/* Job 2 */}
                <div>
                  <div className="flex justify-between flex-wrap">
                    <h4 className="text-md font-medium text-gray-900 dark:text-white">
                      Jr. Web Developer
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Jun 2020 - Dec 2021
                    </p>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200">
                    Previous Company, Location
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Built and maintained websites using HTML, CSS, JavaScript, and WordPress</li>
                    <li>Assisted in developing e-commerce features that increased sales by 25%</li>
                    <li>Collaborated with marketing team to implement SEO best practices</li>
                    <li>Participated in code reviews and contributed to team documentation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Education */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
              
              <div>
                <div className="flex justify-between flex-wrap">
                  <h4 className="text-md font-medium text-gray-900 dark:text-white">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    2016 - 2020
                  </p>
                </div>
                <p className="text-gray-800 dark:text-gray-200">
                  University Name, Location
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Graduated with honors. Relevant coursework: Web Development, Human-Computer Interaction, Data Structures & Algorithms.
                </p>
              </div>
            </div>
            
            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">
                    Languages & Frameworks
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>HTML5, CSS3, JavaScript (ES6+)</li>
                    <li>React.js, Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS, SCSS</li>
                    <li>Node.js, Express</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-md font-medium text-gray-900 dark:text-white mb-2">
                    Tools & Technologies
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Git, GitHub</li>
                    <li>Webpack, Babel</li>
                    <li>Firebase, MongoDB</li>
                    <li>Jest, React Testing Library</li>
                    <li>Figma, Adobe XD</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Certifications
              </h3>
              
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Frontend Web Development Certification, Organization Name (2021)</li>
                <li>UI/UX Design Fundamentals, Organization Name (2020)</li>
                <li>Responsive Web Design, Organization Name (2019)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}