import React from 'react';

interface TikTokIconProps {
  className?: string;
  size?: number;
}

const TikTokIcon: React.FC<TikTokIconProps> = ({ className = "", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      className={className}
      fill="none"
    >
      <rect width="512" height="512" rx="64" fill="#E91E63"/>
      <path 
        d="M412.19 158.84c-27.13-19.28-45.49-50.03-45.49-84.84h-69.4v240c0 38.4-31.2 69.6-69.6 69.6s-69.6-31.2-69.6-69.6 31.2-69.6 69.6-69.6c7.2 0 14.1 1.2 20.4 3.3V178.5c-6.6-0.9-13.5-1.5-20.4-1.5-76.8 0-139.2 62.4-139.2 139.2s62.4 139.2 139.2 139.2 139.2-62.4 139.2-139.2V203.04c30.24 21.6 67.2 34.56 107.04 34.56v-69.6c-15.36 0-29.76-3.84-42.84-10.16z" 
        fill="white"
      />
    </svg>
  );
};

export default TikTokIcon;