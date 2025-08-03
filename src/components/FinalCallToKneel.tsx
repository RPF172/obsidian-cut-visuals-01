import React from "react";

const FINAL_IMG = "/src/assets/obsidian-logo.png"; // Replace with close-up shot

export const FinalCallToKneel: React.FC = () => {
  return (
    <section className="w-full py-20 bg-black flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Your Alpha Is Waiting
      </h2>
      <div className="flex flex-col items-center gap-8 max-w-2xl">
        <img
          src={FINAL_IMG}
          alt="FlexMasterJoe dominant close-up - Cash Master, Findom Domination, Worship Alpha"
          className="w-48 h-48 object-cover rounded-full border-4 border-yellow-500 shadow-lg mb-4"
        />
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          You’ve stared long enough. You’ve fantasized long enough. Now it’s time to kneel, pay, and worship. Serving FlexMasterJoe isn’t an option—it’s your destiny. Prove your devotion, tribute now, and take your place under the Superior Jock Alpha.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://your-tribute-link.com" // Replace with actual tribute link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-yellow-400"
            aria-label="Tribute Now - Cash Master, Findom Domination, Worship Alpha"
          >
            🔥 Tribute Now
          </a>
          <a
            href="mailto:your@email.com?subject=Apply%20for%20Access" // Replace with actual form or email
            className="bg-white bg-opacity-80 text-gray-900 font-bold py-3 px-8 rounded-full shadow hover:bg-opacity-100 transition-colors text-lg focus:outline-none focus:ring-4 focus:ring-gray-300"
            aria-label="Apply for Access - Cash Master, Findom Domination, Worship Alpha"
          >
            💪 Apply for Access
          </a>
        </div>
        {/* SEO keywords for screen readers */}
        <span className="sr-only">
          Cash Master, Findom Domination, Worship Alpha
        </span>
      </div>
    </section>
  );
};

export default FinalCallToKneel;
