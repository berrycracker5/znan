import clsx from "clsx";
import React, { useState } from "react";

interface AboutMeItemProps {
  className?: string;
  question?: string;
  answer?: string | React.ReactNode;
}

const AskMeItem: React.FC<AboutMeItemProps> = ({
  className,
  question,
  answer,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const isClickedQuestionClass = "px-0 py-2 opacity-40 font-medium";
  const isNotClickedQuestionClass =
    "cursor-pointer border-2 border-gray-800 px-8 py-6 lg:text-lg tracking-wider font-bold opacity-100 dark:border-gray-300 hover:scale-105 ";

  return (
    <div className={clsx("w-full", className)}>
      <p
        className={`rounded-md transition-all duration-700 ease-in-out ${
          isClicked ? isClickedQuestionClass : isNotClickedQuestionClass
        }`}
        onClick={() => setIsClicked(true)}
      >
        {question || ""}
      </p>
      <div
        className={`tracking-wide transition-all duration-700 ease-in-out ${
          isClicked
            ? "py-2 pl-0 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        } `}
      >
        {answer || ""}
      </div>
    </div>
  );
};

export default AskMeItem;
