import clsx from "clsx";
import React from "react";

interface HorizontalLineProps {
  className?: string;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ className }) => (
  <hr
    className={clsx(
      "my-4 w-full border-t border-gray-300 md:my-8 dark:border-gray-600",
      className
    )}
  />
);

export default HorizontalLine;
