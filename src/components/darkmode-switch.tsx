import React from 'react';
import { Switch } from "@/components/ui/switch"
import { FiSun, FiMoon } from 'react-icons/fi'; // Import icons from react-icons library

export function DarkModeSwitch({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (darkMode: boolean) => void }) {
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="absolute w-24 h-16 top-10 right-16 flex items-center space-x-2">
      <Switch id="darkmode-switch" onClick={handleDarkModeToggle} />
      <div className={`rounded-full w-16 h-10 flex items-center justify-center ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-600' : 'bg-gradient-to-br from-yellow-500 to-yellow-300'}`}>
        {darkMode ? <FiMoon size={20} color="white" /> : <FiSun size={20} color="black" />} {/* Use conditional rendering to display different icons based on dark mode */}
      </div>
    </div>
  );
}

export default DarkModeSwitch;
