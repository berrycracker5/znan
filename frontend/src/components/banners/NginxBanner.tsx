import NginxIcon from "@/assets/icons/nginx.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface NginxBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const NginxBanner: React.FC<NginxBannerProps> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <NginxIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">NGINX</p>
    </BannerWrapper>
  );
};

export default NginxBanner;
