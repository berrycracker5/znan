import React from "react";
import clsx from "clsx";

interface SystemDesignContentProps {
  className?: string;
  children: React.ReactNode;
}

const SystemDesignContent: React.FC<SystemDesignContentProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        "w-full rounded-sm border-2 border-gray-800 dark:border-gray-500",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SystemDesignContent;
