import React from 'react';

interface ShardDividerProps {
  className?: string;
}

const ShardDivider: React.FC<ShardDividerProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-px ${className}`}>
      {/* Main divider line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-iron-grey to-transparent"></div>
      
      {/* Angular break in the middle */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-abyss-black border border-crimson-glow/50 transform rotate-45 angular-border"></div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-crimson-glow/10 to-transparent blur-sm"></div>
    </div>
  );
};

export default ShardDivider;