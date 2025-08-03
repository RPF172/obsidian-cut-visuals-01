import React from 'react';
import obsidianLogo from '@/assets/obsidian-logo.png';

interface ObsidianLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ObsidianLogo: React.FC<ObsidianLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`obsidian-shard ${className}`}>
      <img 
        src={obsidianLogo} 
        alt="OBSIDIAN CUT" 
        className={`${sizeClasses[size]} object-contain filter drop-shadow-[0_0_10px_hsl(var(--crimson-glow)/0.3)] sharp-transition hover:drop-shadow-[0_0_20px_hsl(var(--crimson-glow)/0.5)]`}
      />
    </div>
  );
};

export default ObsidianLogo;