import React from "react";

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Weak Men Can’t Stop Submitting
      </h2>
      <div className="flex flex-col gap-6 max-w-2xl w-full">
        <blockquote className="text-lg md:text-xl text-gray-200 italic border-l-4 border-yellow-500 pl-4">
          “The second I tributed, I knew he owned me.”
        </blockquote>
        <blockquote className="text-lg md:text-xl text-gray-200 italic border-l-4 border-yellow-500 pl-4">
          “FlexMasterJoe doesn’t just dominate—he destroys your will and makes you thank him for it.”
        </blockquote>
        <blockquote className="text-lg md:text-xl text-gray-200 italic border-l-4 border-yellow-500 pl-4">
          “Every dollar I send feeds his power—and I’m addicted.”
        </blockquote>
      </div>
      {/* Visual: subtle alpha symbols */}
      <div className="mt-10 flex gap-6 opacity-30">
        <span className="text-5xl">👑</span>
        <span className="text-5xl">⛓️</span>
        <span className="text-5xl">💪</span>
      </div>
      {/* SEO keywords for screen readers */}
      <span className="sr-only">
        Paypigs, Cash Slaves, Financial Domination Experience
      </span>
    </section>
  );
};

export default Testimonials;
