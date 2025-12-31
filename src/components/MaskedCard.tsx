import React from 'react';

interface MaskedCardProps {
  children: React.ReactNode;
  className?: string;
  cornerSize?: number;
  cornerPosition?: 'br' | 'bl';
  backgroundColor?: string;
}

// Creates a card with a clipped corner for icons/elements to rest in
export const MaskedCard: React.FC<MaskedCardProps> = ({
  children,
  className = '',
  cornerSize = 60,
  cornerPosition = 'br',
  backgroundColor = '#f0f0f3',
}) => {
  // Generate unique ID for clip path
  const clipId = React.useId();
  
  // SVG clip path that creates the notched corner effect
  const getClipPath = () => {
    if (cornerPosition === 'br') {
      // Bottom-right corner notch
      return `
        M 0 0
        L 100% 0
        L 100% calc(100% - ${cornerSize}px)
        Q 100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) calc(100% - ${cornerSize}px)
        L calc(100% - ${cornerSize}px) 100%
        L 0 100%
        Z
      `;
    } else {
      // Bottom-left corner notch  
      return `
        M 0 0
        L 100% 0
        L 100% 100%
        L ${cornerSize}px 100%
        L ${cornerSize}px calc(100% - ${cornerSize}px)
        Q 0 calc(100% - ${cornerSize}px), 0 calc(100% - ${cornerSize * 1.5}px)
        Z
      `;
    }
  };

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        backgroundColor,
        clipPath: cornerPosition === 'br' 
          ? `polygon(0 0, 100% 0, 100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%, 0 100%)`
          : `polygon(0 0, 100% 0, 100% 100%, ${cornerSize}px 100%, ${cornerSize}px calc(100% - ${cornerSize}px), 0 calc(100% - ${cornerSize}px))`
      }}
    >
      {children}
    </div>
  );
};

// Image wrapper with the clipped corner for team member photos
interface MaskedImageProps {
  src: string;
  alt: string;
  className?: string;
  cornerSize?: number;
  imageClassName?: string;
}

export const MaskedImage: React.FC<MaskedImageProps> = ({
  src,
  alt,
  className = '',
  cornerSize = 60,
  imageClassName = '',
}) => {
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ 
        clipPath: `polygon(0 0, 100% 0, 100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%, 0 100%)`,
        borderRadius: '20px 20px 0 20px'
      }}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imageClassName}`}
      />
    </div>
  );
};