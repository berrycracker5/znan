import React from "react";
import clsx from "clsx";

interface SystemDesignTitleProps {
  className?: string;
  children: React.ReactNode;
}

const SystemDesignTitle: React.FC<SystemDesignTitleProps> = ({
  className,
  children,
}) => {
  return <p className={clsx("font-semibold", className)}>{children}</p>;
};

export default SystemDesignTitle;
