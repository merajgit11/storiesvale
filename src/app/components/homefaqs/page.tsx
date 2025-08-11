"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'What can Blinkist do for me?',
      answer: 'Blinkist provides key insights from nonfiction books in 15-minute reads or listens.'
    },
    {
      question: 'How can I use Blinkist?',
      answer: 'You can use Blinkist on our website or mobile apps. Just sign up, choose a book, and start learning.'
    },
    {
      question: 'What types of books does Blinkist cover? How many are there?',
      answer: 'We cover nonfiction books across 27 categories with over 5,000 titles in our library.'
    },
    {
      question: "What's included in a plan?",
      answer: 'Our premium plan gives you unlimited access to all book summaries, audio versions, and offline reading.'
    },
    {
      question: 'What makes Blinkist book summaries the best on the market?',
      answer: 'Our expert writers distill books to their key insights while preserving the author\'s voice and ideas.'
    },
    {
      question: 'Can I cancel during my trial or subscription?',
      answer: 'Yes, you can cancel anytime during your trial or subscription with no cancellation fees.'
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Do you have any questions?</h2>
      
      <div className="space-y-4 mb-10">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-gray-200 pb-6 pt-2 transition-colors"
          >
            <button
              className="flex items-center justify-between w-full text-left group"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors md:text-xl">
                {faq.question}
              </h3>
              <ChevronDown 
                className={`chevion h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  activeIndex === index ? 'transform rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            
            {activeIndex === index && (
              <div 
                id={`faq-${index}`}
                className="mt-3 text-gray-600 pl-2 animate-fadeIn"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <p className="text-center text-gray-600">
        Have more questions?{' '}
        <a 
          href="#contact"
          className="text-blue-600 hover:underline font-medium transition-colors"
        >
          Contact our Customer Support!
        </a>
      </p> */}
    </section>
  );
};

export default FAQSection;