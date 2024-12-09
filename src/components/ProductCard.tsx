import React from "react";
import { Button } from "./Button";
import { ProductImage } from "./ProductImage";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handlePurchase = () => {
    console.log("Purchase initiated for product:", product.id);
  };

  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
      <ProductImage imageUrl={product.image} alt={product.name} />

      <div className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
              {product.name}
            </h2>
            <p className="text-gray-600 leading-relaxed line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-indigo-600">
              &#8377;{formatPrice(product.price)}
              </span>
              <span className="text-sm text-gray-500 line-through">
              &#8377;{formatPrice(product.originalPrice)}
              </span>
            </div>
            <Button onClick={handlePurchase}>Buy Now</Button>
          </div>
        </div>
      </div>
    </article>
  );
};
