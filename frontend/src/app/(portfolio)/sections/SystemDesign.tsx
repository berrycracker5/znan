import React from "react";
import clsx from "clsx";
import SystemDesignTitle from "./SystemDesignTitle";

interface SystemDesignProps {
  className?: string;
  children: React.ReactNode;
}

const SystemDesign: React.FC<SystemDesignProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "mt-4 flex w-full min-w-fit flex-col items-start justify-center gap-y-2",
        className
      )}
    >
      <SystemDesignTitle>System Design</SystemDesignTitle>
      {children}
    </div>
  );
};

export default SystemDesign;
