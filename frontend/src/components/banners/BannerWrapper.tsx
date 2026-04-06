import React from "react";
import { twMerge } from "tailwind-merge";

interface BannerWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const BannerWrapper: React.FC<BannerWrapperProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={twMerge(
        "flex max-w-fit min-w-fit flex-row items-center justify-center border-1 border-gray-500 p-2 md:px-6 lg:px-8 xl:px-8 xl:py-2",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default BannerWrapper;
