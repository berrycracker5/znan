import React from "react";
import clsx from "clsx";

interface SystemDesignDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

const SystemDesignDescription: React.FC<SystemDesignDescriptionProps> = ({
  className,
  children,
}) => {
  return (
    <p className={clsx("ml-1 text-sm font-light", className)}>{children}</p>
  );
};

export default SystemDesignDescription;
