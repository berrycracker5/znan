import clsx from "clsx";
import React, { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "mt-12 flex w-full flex-col items-start justify-start gap-2 px-4 py-4 md:mt-16 md:px-16 md:py-8 lg:px-20 xl:px-30",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
