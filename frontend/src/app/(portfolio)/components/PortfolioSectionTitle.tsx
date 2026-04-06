import clsx from "clsx";
import React from "react";

interface PortfolioSectionTitleProps {
  className?: string;
  children: React.ReactNode;
}

const PortfolioSectionTitle: React.FC<PortfolioSectionTitleProps> = ({
  className,
  children,
}) => {
  return (
    <h2
      className={clsx(
        "w-full font-bold md:w-1/3 md:text-xl dark:text-gray-300",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default PortfolioSectionTitle;
