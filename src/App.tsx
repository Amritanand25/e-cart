import React, { useState, useCallback, useEffect } from 'react';
import { ProductGrid } from './components/ProductGrid';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import { generateMockProducts } from './utils/productData';
import { Product } from './types/product';

const ITEMS_PER_PAGE = 12;

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const initialProducts = generateMockProducts(0, ITEMS_PER_PAGE);
    setProducts(initialProducts);
    setIsInitialLoading(false);
  }, []);

  const loadMoreProducts = useCallback(() => {
    const newProducts = generateMockProducts(products.length, ITEMS_PER_PAGE);
    setProducts(prev => [...prev, ...newProducts]);
  }, [products.length]);

  const { isFetching } = useInfiniteScroll(loadMoreProducts);

  if (isInitialLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Our Products
        </h1>
        <p className="text-center text-gray-600">
          Discover our collection of premium electronics
        </p>
      </div>

      <ProductGrid products={products} />
      
      {isFetching && <LoadingSpinner />}
    </div>
  );
}

export default App;