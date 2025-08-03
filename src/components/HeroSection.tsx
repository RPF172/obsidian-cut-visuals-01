import React from "react";

const HERO_BG = "/lovable-uploads/a2f0f00c-8c24-49d3-9dd0-18152c851e39.png";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_BG})` }}
      aria-label="FlexMasterJoe Hero Section - Cash Master, Findom, Muscle Worship, Superior Jock Alpha"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          FlexMasterJoe: The Superior Jock Alpha & Cash Master
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-200 font-semibold mb-8">
          Flex. Pay. Worship. Repeat.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://your-stripe-or-cashapp-or-crypto-link.com" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-yellow-400"
            aria-label="Tribute Now to Cash Master FlexMasterJoe via Stripe, CashApp, or Crypto"
          >
            🔥 Tribute Now
          </a>
          <a
            href="#about"
            className="bg-white bg-opacity-80 text-gray-900 font-bold py-3 px-8 rounded-full shadow hover:bg-opacity-100 transition-colors text-lg focus:outline-none focus:ring-4 focus:ring-gray-300"
            aria-label="Enter My World - Learn about Superior Jock Alpha, Findom, Muscle Worship"
          >
            💪 Enter My World
          </a>
        </div>
        {/* SEO keywords for screen readers */}
        <span className="sr-only">
          Cash Master, Findom, Muscle Worship, Superior Jock Alpha
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
