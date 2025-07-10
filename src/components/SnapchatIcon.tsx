import React from 'react';

interface SnapchatIconProps {
  className?: string;
  size?: number;
}

const SnapchatIcon: React.FC<SnapchatIconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      className={className}
      fill="none"
    >
      <circle cx="256" cy="256" r="232" fill="#FFFC00" stroke="#E5E5E5" strokeWidth="48"/>
      <path 
        d="M256 144c-35.35 0-64 28.65-64 64v24c0 4.42-3.58 8-8 8s-8-3.58-8-8v-24c0-44.18 35.82-80 80-80s80 35.82 80 80v24c0 4.42-3.58 8-8 8s-8-3.58-8-8v-24c0-35.35-28.65-64-64-64z" 
        fill="white"
      />
      <path 
        d="M256 336c-35.35 0-64-28.65-64-64 0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16 0 35.35-28.65 64-64 64z" 
        fill="white"
      />
      <circle cx="232" cy="200" r="8" fill="white"/>
      <circle cx="280" cy="200" r="8" fill="white"/>
    </svg>
  );
};

export default SnapchatIcon;