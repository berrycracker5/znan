import LetsEncryptIcon from "@/assets/icons/lets-encrypt.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface LetsEncryptBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const LetsEncryptBanner: React.FC<LetsEncryptBannerProps> = ({
  className,
  ...props
}) => {
  return (
    <BannerWrapper className={className} {...props}>
      <LetsEncryptIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">Let&apos;s Encrypt</p>
    </BannerWrapper>
  );
};

export default LetsEncryptBanner;
