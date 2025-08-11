'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What is the main message of 4 Essential Keys to Effective Communication?',
    answer:
      'The book emphasizes empathetic listening, speaking clearly, managing emotions, and being mindful in every interaction for better relationships.',
  },
  {
    question: 'How long does it take to read 4 Essential Keys to Effective Communication?',
    answer:
      'It typically takes 3–5 hours to read, depending on your reading pace and depth of reflection.',
  },
  {
    question: 'Is 4 Essential Keys to Effective Communication a good book? Is it worth reading?',
    answer:
      'Yes, it’s widely recommended for improving interpersonal skills and is praised for its clarity and actionable insights.',
  },
  {
    question: 'Who is the author of 4 Essential Keys to Effective Communication?',
    answer: 'The book is written by Bento C. Leal III, an educator and communication coach.',
  },
  {
    question: 'What to read after 4 Essential Keys to Effective Communication?',
    answer:
      'Consider “Crucial Conversations” or “Nonviolent Communication” for further development in effective communication.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="text-[#002D42] bg-gray-100 mt-10">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 leading-tight">
          4 Essential Keys to Effective <br />
          Communication FAQs
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-6">
              <button
                onClick={() => toggle(index)}
                className="faq-toggle w-full flex justify-between items-center text-left text-xl font-semibold hover:text-blue-600 focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-700 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="faq-content mt-2 text-base text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
