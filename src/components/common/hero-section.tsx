'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { HeroVideoDialogDemo } from "./hero-vide";

const HeroSection = () => {
  return (
    <section id="hero-section" className="max-w-6xl px-6 sm:px-10 mx-auto">
      <div className="relative pb-[80px] pt-[80px] sm:pt-[120px] dark:bg-dark lg:pt-[150px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-[56px]">
                  
                  Summarize PDFs Quickly & Easily
                </h1>
                <p className="mb-8 max-w-md text-base text-body-color dark:text-gray-300">
                  Upload your documents and get concise summaries instantly.
                  Save time and focus on what matters most with our AI-powered SaaS tool.
                </p>
                <ul className="flex flex-wrap items-center space-x-4">
                  <li>
                    <Link
                      href="/signup"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                    >
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/download"
                      className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                    >
                      <span className="mr-2">
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                          <rect
                            x="7.99893"
                            y="14.979"
                            width="8.18182"
                            height="1.63636"
                            fill="white"
                          />
                          <rect
                            x="11.2717"
                            y="7.61523"
                            width="1.63636"
                            height="4.09091"
                            fill="white"
                          />
                          <path
                            d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      Download App
                    </Link>
                  </li>
                </ul>
                <div className="clients pt-16">
                  <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                    Trusted by
                    <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                  </h6>
                  <div className="flex items-center space-x-4">
                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/ayroui.svg"
                    />
                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/graygrids.svg"
                    />
                    <SingleImage
                      href="#"
                      imgSrc="https://cdn.tailgrids.com/assets/images/marketing/brands/uideck.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-8 lg:pt-0">
                  <Image
                    width={500}
                    height={500}
                    src="https://cdn.tailgrids.com/assets/images/marketing/hero/hero-image-01.png"
                    alt="PDF Summarizer app preview"
                    className="max-w-full h-auto lg:ml-auto rounded-md shadow-lg"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    {/* Background pattern SVG (unchanged) */}
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {[...Array(25)].map((_, i) => {
                        const x = (i % 5) * 22;
                        const y = Math.floor(i / 5) * 22;
                        return (
                          <circle key={i} cx={x + 2.5} cy={y + 2.5} r="2.5" fill="#3056D3" />
                        );
                      })}
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <HeroVideoDialogDemo/> */}
    </section>
  );
};

export default HeroSection;

const SingleImage = ({ href, imgSrc }: { href: string; imgSrc: string }) => {
  return (
    <a href={href} className="flex w-full items-center justify-center">
      <Image width={120} height={120} src={imgSrc} alt="brand image" className="h-10 w-full" />
    </a>
  );
};
