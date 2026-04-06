import AwsCloudFrontIcon from "@/assets/icons/aws-cloudfront.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface AwsCloudFrontProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AwsCloudFrontBanner: React.FC<AwsCloudFrontProps> = ({
  className,
  ...props
}) => {
  return (
    <BannerWrapper className={className} {...props}>
      <AwsCloudFrontIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">CloudFront</p>
    </BannerWrapper>
  );
};

export default AwsCloudFrontBanner;
