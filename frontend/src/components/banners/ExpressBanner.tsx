import ExpressIcon from "@/assets/icons/express.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface ExpressBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ExpressBanner: React.FC<ExpressBannerProps> = ({
  className,
  ...props
}) => {
  return (
    <BannerWrapper className={className} {...props}>
      <ExpressIcon className="bg-primary h-6 w-6 rounded-full px-1 text-white dark:text-black" />
      <p className="ml-1 text-sm font-semibold">Express</p>
    </BannerWrapper>
  );
};

export default ExpressBanner;
