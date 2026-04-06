import GhcrIcon from "@/assets/icons/ghcr.png";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";
import Image from "next/image";

interface GhcrBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const GhcrBanner: React.FC<GhcrBannerProps> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <Image
        src={GhcrIcon}
        alt="GHCR"
        className="h-6 w-6 rounded-full bg-black dark:bg-white"
      />
      <p className="ml-1 text-sm font-semibold">GHCR</p>
    </BannerWrapper>
  );
};

export default GhcrBanner;
