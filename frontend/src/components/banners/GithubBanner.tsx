import GithubIcon from "@/assets/icons/github.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface GithubBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const GithubBanner: React.FC<GithubBannerProps> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <GithubIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">GitHub</p>
    </BannerWrapper>
  );
};

export default GithubBanner;
