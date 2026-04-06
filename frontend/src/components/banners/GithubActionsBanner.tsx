import GithubActionsIcon from "@/assets/icons/github-actions.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface GithubActionsBannerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const GithubActionsBanner: React.FC<GithubActionsBannerProps> = ({
  className,
  ...props
}) => {
  return (
    <BannerWrapper className={className} {...props}>
      <GithubActionsIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">
        GitHub <br />
        Actions
      </p>
    </BannerWrapper>
  );
};

export default GithubActionsBanner;
