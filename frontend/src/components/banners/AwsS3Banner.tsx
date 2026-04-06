import AwsS3Icon from "@/assets/icons/aws-s3.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface AwsS3Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AwsS3Banner: React.FC<AwsS3Props> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <AwsS3Icon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">AWS S3</p>
    </BannerWrapper>
  );
};

export default AwsS3Banner;
