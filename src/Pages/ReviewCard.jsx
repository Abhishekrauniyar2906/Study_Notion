import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import LogoCircle from './LogoCircle';  

const reviews = [
  {
    name: 'Abhishek Rauniyar',
    course: '(DSA)',
    feedback:
      'Mastered recursion, graphs, trees , DP and etc.. Problem sets were real FAANG-level and instructor explained edge cases brilliantly.',
    stars: 5,
  },
  {
    name: 'Komal Gupta',
    course: '(Java)',
    feedback:
      'OOP, Collections, Streams, JDBC, Applet and error handling made so easy to learn. Built backend apps with clear flow and JDBC connections.',
    stars: 5,
  },
  {
    name: 'Kajal Singh',
    course: '(Python)',
    feedback:
      'From basics to web scraping and data automation—Python tutorials were simple and efficient for beginners and also beneficial for machine learning.',
    stars: 4,
  },
  {
    name: 'Rohit Agrawal',
    course: '(System Design)',
    feedback:
      'Covered scalability, availability, queues with solid real-world examples. Clear explanation of load balancers, CAP theorem, and etc..',
    stars: 4,
  },
  {
    name: 'Sneha Mehta',
    course: '(C++ and STL)',
    feedback:
      'C++ STL, memory management, pointers, arrays and problem-solving were well structured. Great for competitive programming and etc..',
    stars: 5,
  },
  {
    name: 'Arjun Yadav',
    course: '(MERN Stack)',
    feedback:
      'Created full-stack apps with React, MongoDB, Node, Express. Real-time chat and weather app and dashboard projects helped a lot.',
    stars: 5,
  },
];

const ReviewCard = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setIndex((prev - 1 + reviews.length) % reviews.length);

  const currentReview = reviews[index];

  return (
    <div className="w-full dark:bg-black py-12 px-4 text-white">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <div
          className="w-full sm:w-[20%] md:w-[70%] lg:w-[60%] xl:w-[50%]
          bg-zinc-950 border border-zinc-900 p-5 sm:p-6
          rounded-xl shadow-lg transition-all duration-300
          min-h-[250px] flex items-center justify-center"
        >
          <ReviewCardItem review={currentReview} />
        </div>

        <div className="mt-6 flex justify-center gap-6">
          <button
            onClick={prev}
            className="bg-zinc-700 hover:bg-zinc-600 p-2 sm:p-3 rounded-full text-white shadow-md"
          >
            <FaChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="bg-zinc-700 hover:bg-zinc-600 p-2 sm:p-3 rounded-full text-white shadow-md"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ReviewCardItem = ({ review }) => {
  if (!review) return null;

  return (
    <div className="w-full transition-all ease-in-out duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-zinc-700 flex items-center justify-center overflow-hidden">
          <LogoCircle name={review.name} />
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-base sm:text-lg text-white">{review.name}</p>
          <p className="text-sm text-yellow-400 font-semibold">{review.course}</p>
        </div>
      </div>

      <p className="text-sm sm:text-base text-zinc-300 mb-3 leading-relaxed">
        {review.feedback}
      </p>

      <div className="flex">
        {Array.from({ length: review.stars }).map((_, i) => (
          <FaStar key={`filled-${i}`} className="text-yellow-500" />
        ))}
        {Array.from({ length: 5 - review.stars }).map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-gray-600" />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
