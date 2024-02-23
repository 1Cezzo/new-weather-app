import React from 'react';
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function DarkModeSwitch({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (darkMode: boolean) => void }) {
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className="absolute w16 h16 top-10 right-16 flex items-center space-x-2">
      <Switch id="darkmode-switch" onClick={handleDarkModeToggle} />
      <Label className="dark:text-neutral-300 font-semibold"htmlFor="darkmode-switch">Dark mode</Label>
    </div>
  );
}

export default DarkModeSwitch;
