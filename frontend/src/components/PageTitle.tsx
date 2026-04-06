import clsx from "clsx";
import React, { ReactNode } from "react";

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ children, className }) => {
  return (
    <h1 className={clsx("w-full text-lg font-bold", className)}>{children}</h1>
  );
};

export default PageTitle;
