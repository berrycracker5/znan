import clsx from "clsx";
import React from "react";

interface PortfolioSectionContentProps {
  className?: string;
  children: React.ReactNode;
}

const PortfolioSectionContent: React.FC<PortfolioSectionContentProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-col items-center justify-start",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PortfolioSectionContent;
