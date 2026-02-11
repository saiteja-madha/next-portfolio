"use client";

import { useState } from "react";
import { FaPalette, FaTimes } from "react-icons/fa";

const themes = [
  { name: "pink", color: "#ec4899" },
  { name: "blue", color: "#3b82f6" },
  { name: "green", color: "#10b981" },
];

interface ThemePickerProps {
  setTheme: (theme: string) => void;
}

const ThemePicker = ({ setTheme }: ThemePickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 md:bottom-6 md:right-6 transition-all duration-1000">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:p-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:opacity-80"
        >
          <FaPalette size={20} className="md:text-xl" />
        </button>
      )}
      {isOpen && (
        <div className="mt-2 p-3 md:p-4 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-500">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm md:text-md font-semibold">Pick a Theme</h3>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={20} />
            </button>
          </div>
          <div className="flex space-x-3 md:space-x-4">
            {themes.map((theme) => (
              <button
                key={theme.name}
                onClick={() => setTheme(theme.name)}
                style={{ backgroundColor: theme.color }}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white hover:border-gray-300 transition-all duration-200"
                aria-label={`Switch to ${theme.name} theme`}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemePicker;