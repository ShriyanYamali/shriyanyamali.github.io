import React, { useState } from "react";
import { motion } from "framer-motion";

const ExperienceTimeline = () => {
  // State to manage visibility of placements
  const [showMore, setShowMore] = useState(false);

  // Function to toggle placements visibility
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="flex flex-col items-center justify-center">
      <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-[50rem] lg:max-w-full">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white mg:text-base sm:!text-sm">
              Programming Intern&nbsp;
              <div className="text-primary dark:text-primaryDark sm:ml-3">
                @University of Pennsylvania Carey Law School
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3 lg:hidden">
                Remote
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              July 2024 — August 2024 | Philadelphia, Pennsylvania
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
              Developed a program that creates diagrams based on the relative
              weight and importance of legal principles and the effect of the
              principles on an act type.
            </p>
          </li>
        </motion.div>

        {/* Add more list items here */}

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white mg:text-base sm:!text-sm">
              Assistant Editor &nbsp;
              <div className="text-primary dark:text-primaryDark sm:ml-3">
                @Dartmouth College{" "}
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3 lg:hidden">
                Remote
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              July 2024 — Present | Hanover, New Hampshire
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
              Editor for research papers about AI, machine learning, and
              computer science | Specializing in mechanical editing.{" "}
            </p>
          </li>
        </motion.div>

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white mg:text-base sm:!text-sm">
              Legal Intern &nbsp;
              <div className="text-primary dark:text-primaryDark sm:ml-3">
                @Stanford Law School{" "}
              </div>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3 lg:hidden">
                Remote
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2024 — Present | Stanford, California
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
              Developing innovative AI models using JavaScript and Python in
              order to analyze over 10,000 antitrust cases.
            </p>
          </li>
        </motion.div>

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white mg:text-base sm:!text-sm">
              Programming Intern &nbsp;
              <div className="text-primary dark:text-primaryDark sm:ml-3">
                @Vrije Universiteit Amsterdam{" "}
              </div>
              <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3 lg:hidden">
                Remote
              </span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2024 — Present | Amsterdam, Netherlands
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
              Designing websites for hosting AI and NLP models with semantic
              search capabilities for efficient antitrust case data management
              and data retrieval.
            </p>
          </li>
        </motion.div>

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white mg:text-base sm:!text-sm">
              Research Intern &nbsp;
              <div className="text-primary dark:text-primaryDark sm:ml-3">
                @Wilmington University School of Law{" "}
              </div>
              <span class="bg-blue-800 text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-300 dark:text-blue-900 ms-3 lg:hidden">
                On-Site
              </span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2024 — Present | Wilmington, Delaware
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
              Researching the legal, ethical, economic, and political effects of
              enhanced interrogation at Guantanamo Bay.
            </p>
          </li>
        </motion.div>

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <li class="mb-10 ms-6">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
              </svg>
            </span>
            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white mg:text-base sm:!text-sm">
              Treasurer &nbsp;
              <div className="text-primary dark:text-primaryDark sm:ml-3">
                @Delaware Museum of Nature & Science{" "}
              </div>
              <span class="bg-blue-800 text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-300 dark:text-blue-900 ms-3 lg:hidden">
                On-Site
              </span>
            </h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2024 — Present | Wilmington, Delaware
            </time>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
              Coordinating logistics and information for setting up educational
              science cafe events for children | Managing budgets and grants.
            </p>
          </li>
        </motion.div>

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white mg:text-base sm:!text-sm">
              Competing Member &nbsp;
              <div className="text-primary dark:text-primaryDark sm:ml-3">
                @Business Professionals of America{" "}
              </div>
              <span class="bg-blue-800 text-blue-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-300 dark:text-blue-900 ms-3 lg:hidden">
                On-Site
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Sept 2023 — Present | Newark, Delaware
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
              Participating in the state and national competitions for Business
              Professionals of America. Qualified for the national competition
              out of more than 3,000 other competitors from Delaware .
            </p>
            <div className="mt-4 w-full grid gap-8 items-start justify-start">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-400 dark:bg-gradient-to-r dark:from-green-400 dark:to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                  onClick={toggleShowMore}
                  className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white dark:text-black inline-block"
                >
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 dark:bg-zinc-100 py-0.5 px-4 ring-1 ring-white/10 dark:ring-black/10 ">
                    <span>
                      {showMore ? "Hide Placements" : "Show Placements"}
                    </span>
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </div>
            </div>
            {showMore && (
              <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <div className="mt-8">
                  <div className="text-gray-500 dark:text-gray-300 mb-3">
                    2024 State Leadership Conference:
                  </div>

                  <ul className="list-disc list-inside pl-5 text-gray-500 dark:text-gray-300">
                    <li>
                      First Place at the National Level in Management, Marketing
                      & Human Resources Concepts
                    </li>
                    <li>
                      First Place at the National Level in Meeting & Event
                      Planning Concepts
                    </li>
                    <li>Top 10 in Parliamentary Procedure Concepts</li>
                  </ul>

                  <div className="text-gray-500 dark:text-gray-300 my-3">
                    2024 State Leadership Conference:
                  </div>

                  <ul className="list-disc list-inside pl-5 text-gray-500 dark:text-gray-300">
                    <li>1st place award for Legal Office Procedures</li>
                    <li>
                      1st place award for Management, Marketing & Human
                      Resources
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </li>
        </motion.div>
      </ol>
    </div>
  );
};

export default ExperienceTimeline;