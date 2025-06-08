import React from "react";

const HowItWork = () => {
  return (
    <section
      id="how-it-work"
      className="min-h-[600px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Main Title */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold leading-tight">
           Your AI PDF Summarizer 
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Upload your documents, customize your summary, and get clear insights instantly.
        </p>
      </div>

      {/* Section Heading */}
      <h2 className="font-headline text-2xl font-semibold sm:text-3xl text-center">
        {/* Summarize PDFs in Three Easy Steps */}
      </h2>

      {/* Steps Grid */}
      <div className="grid sm:grid-cols-3 gap-16 sm:gap-8 mt-16 sm:mt-24">
        {/* Step 1 */}
        <div className="text-center">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
            <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="text-gray-500 w-1/2 h-1/2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </div>
            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
          </div>
          <h3 className="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">
            1. Upload PDF
          </h3>
          <p className="leading-relaxed mt-4 max-w-xs mx-auto">
            Select your PDF document to upload it securely to our AI platform.
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
            <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="text-gray-500 w-1/2 h-1/2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>
            </div>
            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
          </div>
          <h3 className="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">
            2. Customize Summary
          </h3>
          <p className="leading-relaxed mt-4 max-w-xs mx-auto">
            Choose summary length and key points for your personalized report.
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto left-2">
            <div className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="text-gray-500 w-1/2 h-1/2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </div>
            <div className="absolute inset-0 -translate-x-2 -translate-y-2 bg-blue-500 rounded-full"></div>
          </div>
          <h3 className="font-headline text-xl sm:text-2xl mt-6 sm:mt-10">
            3. Download Summary
          </h3>
          <p className="leading-relaxed mt-4 max-w-xs mx-auto">
            Receive your concise AI-generated summary and export it easily.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
