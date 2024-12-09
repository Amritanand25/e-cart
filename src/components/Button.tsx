import React from "react";
import { ShoppingCart } from "lucide-react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="group flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105" 
    >
      <ShoppingCart className="w-5 h-5 transition-transform group-hover:rotate-12" />
      {children}
    </button>
  );
};
