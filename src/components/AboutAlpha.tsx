import React from "react";

const ABOUT_IMG = "/src/assets/obsidian-logo.png"; // Replace with FlexMasterJoe's solo photo path

export const AboutAlpha: React.FC = () => {
  return (
    <section id="about" className="w-full py-20 bg-gray-950 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        Who Is FlexMasterJoe?
      </h2>
      <div className="flex flex-col items-center gap-8 max-w-2xl">
        <img
          src={ABOUT_IMG}
          alt="FlexMasterJoe confident pose - Superior Alpha Male, Jock Alpha, Cash Domination, Muscle Worship"
          className="w-48 h-48 object-cover rounded-full border-4 border-yellow-500 shadow-lg mb-4"
        />
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          I am the Cash Master you were born to serve. A Superior Jock Alpha carved from muscle and discipline, I demand obedience and tribute. My cock strains against my briefs as proof of my power—and your purpose is to worship what you’ll never own. Serving me isn’t a choice. It’s a privilege.
        </p>
        <a
          href="https://your-tribute-link.com" // Replace with actual tribute link
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-yellow-400"
          aria-label="Submit to the Alpha - Superior Alpha Male, Jock Alpha, Cash Domination, Muscle Worship"
        >
          🙇 Submit to the Alpha
        </a>
        {/* SEO keywords for screen readers */}
        <span className="sr-only">
          Superior Alpha Male, Jock Alpha, Cash Domination, Muscle Worship
        </span>
      </div>
    </section>
  );
};

export default AboutAlpha;
