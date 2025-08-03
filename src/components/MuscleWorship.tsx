import React from "react";

const MUSCLE_IMG = "/src/assets/obsidian-logo.png"; // Replace with flexing photo or GIF/clip

export const MuscleWorship: React.FC = () => {
  return (
    <section className="w-full py-20 bg-black flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Worship What You’ll Never Own
      </h2>
      <div className="flex flex-col items-center gap-8 max-w-2xl">
        <img
          src={MUSCLE_IMG}
          alt="FlexMasterJoe flexing - Muscle Worship, Worship Jock Alpha, Alpha Male Domination"
          className="w-64 h-64 object-cover rounded-xl border-4 border-red-500 shadow-lg mb-4"
        />
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          My body is a temple of power, and your devotion is the only offering I accept. Every flex, every vein, every cut of muscle is yours to admire—but only when you’ve proven your worth. This is muscle worship at its purest. Kneel, pay, and beg for the privilege of admiring the Alpha.
        </p>
        <a
          href="https://your-pay-to-worship-link.com" // Replace with actual link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-pink-400"
          aria-label="Pay to Worship - Muscle Worship, Worship Jock Alpha, Alpha Male Domination"
        >
          💸 Pay to Worship
        </a>
        {/* SEO keywords for screen readers */}
        <span className="sr-only">
          Muscle Worship, Worship Jock Alpha, Alpha Male Domination
        </span>
      </div>
    </section>
  );
};

export default MuscleWorship;
