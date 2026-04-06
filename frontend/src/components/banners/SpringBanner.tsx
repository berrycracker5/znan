import SpringIcon from "@/assets/icons/spring.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface SpringBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SpringBanner: React.FC<SpringBannerProps> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <SpringIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">Spring</p>
    </BannerWrapper>
  );
};

export default SpringBanner;
