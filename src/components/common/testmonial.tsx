'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: 'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun...',
    company: 'Google',
    logo: '/images/google-2.png',
    name: 'Leslie Alexander',
    role: 'UI Designer',
  },
  {
    text: 'The universe is constantly changing, moving, some would say “living” because you never know what you will see...',
    company: 'Microsoft',
    logo: '/images/google-2.png',
    name: 'Leslie Alexander',
    role: 'UI Designer',
  },
  {
    text: 'Astronomy is fun because the sky is full of surprises. Every night is a new adventure in the cosmos...',
    company: 'Amazon',
    logo: '/images/facebook.png',
    name: 'Leslie Alexander',
    role: 'UI Designer',
  },
  {
    text: 'The stars are alive with change, and that makes stargazing a constantly exciting experience...',
    company: 'Netflix',
    logo: '/images/google.png',
    name: 'Leslie Alexander',
    role: 'UI Designer',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id='feedbacks' className="w-full py-12 max-w-3xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">What our customers are saying</h2>

      <div className="relative  p-6 md:p-10 ">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 text-lg mb-6">{t.text}</p>
            <div className="flex items-center justify-center gap-4 mt-4 flex-col">
              <Image
                src={t.logo}
                alt={`${t.company} Logo`}
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-gray-200"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-gray-200"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Company Icons */}
      <div className="flex justify-center gap-4 mt-6">
        {testimonials.map((item, index) => (
          <button key={index} onClick={() => setCurrent(index)}>
            <Image
              src={item.logo}
              alt={item.company}
              width={30}
              height={30}
              className={`object-contain transition-opacity ${
                current === index ? 'opacity-100' : 'opacity-40'
              } hover:opacity-80`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
