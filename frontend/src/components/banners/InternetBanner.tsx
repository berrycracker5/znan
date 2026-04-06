import InternetIcon from "@/assets/icons/internet.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface InternetBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const InternetBanner: React.FC<InternetBannerProps> = ({
  className,
  ...props
}) => {
  return (
    <BannerWrapper className={className} {...props}>
      <InternetIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">Internet</p>
    </BannerWrapper>
  );
};

export default InternetBanner;
