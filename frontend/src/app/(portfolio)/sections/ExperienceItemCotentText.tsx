import clsx from "clsx";
import React from "react";

interface ExperienceItemContentProps {
  className?: string;
  children: React.ReactNode;
}

const ExperienceItemCotentText: React.FC<ExperienceItemContentProps> = ({
  className,
  children,
}) => {
  return (
    <p
      className={clsx(
        "w-full text-sm font-light tracking-wide lg:text-base xl:text-lg",
        className
      )}
    >
      {children}
    </p>
  );
};

export default ExperienceItemCotentText;
