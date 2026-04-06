import ReactIcon from "@/assets/icons/react.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface ReactBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ReactBanner: React.FC<ReactBannerProps> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <ReactIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">React</p>
    </BannerWrapper>
  );
};

export default ReactBanner;
