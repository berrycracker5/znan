import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import React from "react";

interface MainFooterProps {
  className?: string;
}

const MainFooter: React.FC<MainFooterProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-col items-center justify-center gap-4",
        className
      )}
    >
      <p className="flex w-full flex-row items-center justify-center text-center text-sm font-bold">
        {new Date().getFullYear()} Developed by JINWAN PARK
        <CheckIcon
          className="ml-2 inline-block text-green-500"
          strokeWidth={3}
        />
      </p>
    </div>
  );
};

export default MainFooter;
