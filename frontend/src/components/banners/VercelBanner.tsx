import VercelIcon from "@/assets/icons/vercel.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface VercelBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const VercelBanner: React.FC<VercelBannerProps> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <VercelIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">Vercel</p>
    </BannerWrapper>
  );
};

export default VercelBanner;
