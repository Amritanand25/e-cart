import React from "react";
import { useImagePreload } from "../hooks/useImagePreload";

interface ProductImageProps {
  imageUrl: string;
  alt: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  imageUrl,
  alt,
}) => {
  const { isLoaded, optimizedUrl } = useImagePreload(imageUrl);

  return (
    <div className="relative overflow-hidden rounded-t-lg aspect-square bg-gray-100">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse w-full h-full bg-gray-200" />
        </div>
      )}
      <img
        src={optimizedUrl}
        alt={alt}
        className={`object-cover w-full h-full transform hover:scale-105 transition-transform duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading={isLoaded ? "eager" : "lazy"}
      />
    </div>
  );
};
