"use client";

import React from "react";
import NextImage from "next/image";
import { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function Image({ src, alt, className, fill, width, height }: ImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center ${className}`}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        <span className="text-gray-400">Image not available</span>
      </div>
    );
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      onError={() => setError(true)}
      quality={90}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      unoptimized={src.startsWith('https://')}
    />
  );
} 