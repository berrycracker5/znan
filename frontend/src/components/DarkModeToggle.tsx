"use client";

import { Switch } from "@/styles/components/ui/switch";
import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface DarkModeToggleProps {
  className?: string;
}
export const DarkModeToggle = ({ className }: DarkModeToggleProps) => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className={clsx("flex items-center space-x-2", className)}>
      <Sun className="h-4 w-4 md:h-5 md:w-5" />
      <Switch
        className="cursor-pointer data-[state=unchecked]:bg-gray-500"
        id="dark-mode"
        checked={dark}
        onCheckedChange={() => setDark(!dark)}
      />
      <Moon className="h-4 w-4 md:h-5 md:w-5" />
    </div>
  );
};
