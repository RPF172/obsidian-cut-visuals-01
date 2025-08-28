import React from 'react';
import ObsidianLogo from '@/components/ObsidianLogo';
import { ObsidianButton } from '@/components/ui/obsidian-button';
import { ObsidianCard, ObsidianCardContent, ObsidianCardDescription, ObsidianCardHeader, ObsidianCardTitle } from '@/components/ui/obsidian-card';
import ShardDivider from '@/components/ShardDivider';
import obsidianShardsBackground from '@/assets/obsidian-shards-bg.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-abyss-black text-obsidian-white">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-4">
          <ObsidianLogo size="md" />
          <h1 className="heading-command text-xl md:text-2xl">OBSIDIAN CUT</h1>
        </div>
        <ObsidianButton variant="ghost" size="sm">
          LEARN MORE
        </ObsidianButton>
      </header>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 md:px-8 text-center overflow-hidden">
        {/* Hero background image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(/lovable-uploads/d723ccc9-d184-4250-941e-5e55f63f9813.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Contrasting overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-abyss-black/80 via-abyss-black/60 to-abyss-black/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h1 className="heading-command text-4xl md:text-6xl lg:text-8xl leading-tight">
            FLEX MASTER
            <br />
            <span className="text-crimson-glow">JOE</span>
          </h1>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="body-text text-lg md:text-xl leading-relaxed">
              Obsidian Black is defined by a sleek, dark, and cutting-edge aesthetic. 
              Its glossy, black surfaces are sharp and smooth, exuding a modern, futuristic feel. 
              Thin lines and crisp edges add to the overall sense of precision, creating 
              a look that is both minimal and powerful.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <ObsidianButton variant="command" size="lg">
              EXPLORE DESIGN
            </ObsidianButton>
            <ObsidianButton variant="shard" size="lg">
              VIEW PORTFOLIO
            </ObsidianButton>
          </div>
        </div>
      </main>

      {/* Divider */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 my-20">
        <ShardDivider />
      </div>

      {/* Philosophy Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ObsidianCard className="group hover:border-crimson-glow/50">
            <ObsidianCardHeader>
              <ObsidianCardTitle>PRECISION</ObsidianCardTitle>
            </ObsidianCardHeader>
            <ObsidianCardContent>
              <ObsidianCardDescription>
                Every line, every surface, and every glow is designed to slice through noise with razor clarity. 
                Sharp edges define the aesthetic of surgical precision.
              </ObsidianCardDescription>
            </ObsidianCardContent>
          </ObsidianCard>

          <ObsidianCard className="group hover:border-crimson-glow/50">
            <ObsidianCardHeader>
              <ObsidianCardTitle>STEALTH</ObsidianCardTitle>
            </ObsidianCardHeader>
            <ObsidianCardContent>
              <ObsidianCardDescription>
                Smooth matte black dominates, creating expansive negative space that enhances the sleek aesthetic. 
                Darkness becomes a weapon of visual power.
              </ObsidianCardDescription>
            </ObsidianCardContent>
          </ObsidianCard>

          <ObsidianCard className="group hover:border-crimson-glow/50">
            <ObsidianCardHeader>
              <ObsidianCardTitle>EDGE</ObsidianCardTitle>
            </ObsidianCardHeader>
            <ObsidianCardContent>
              <ObsidianCardDescription>
                Angular geometry meets cutting-edge design. Crimson glow hints at energy and danger, 
                while obsidian surfaces reflect futuristic ambition.
              </ObsidianCardDescription>
            </ObsidianCardContent>
          </ObsidianCard>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-20 text-center">
        <div className="space-y-8">
          <h2 className="heading-directive text-2xl md:text-4xl">
            IT'S NOT ABOUT WEIGHT.
            <br />
            <span className="text-crimson-glow">IT'S ABOUT CUTTING CLEAN.</span>
          </h2>
          
          <p className="body-text text-lg max-w-2xl mx-auto">
            Where others create chains, OBSIDIAN CUT forges blades. 
            Sharp, not heavy. Edgy, not ritualistic. Sleek, not cluttered. 
            Precise, not chaotic.
          </p>
          
          <div className="pt-8">
            <ObsidianButton variant="shard" size="lg">
              DISCOVER THE CUT
            </ObsidianButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-iron-grey/20 mt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <ObsidianLogo size="sm" />
              <span className="micro-label uppercase tracking-wider">
                OBSIDIAN CUT — VISUAL BRAND IDENTITY
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="micro-label">DESIGN</span>
              <span className="micro-label">•</span>
              <span className="micro-label">2024</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;