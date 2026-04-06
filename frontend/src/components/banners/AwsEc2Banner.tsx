import AwsEc2Icon from "@/assets/icons/aws-ec2.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface AwsEc2Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AwsEc2Banner: React.FC<AwsEc2Props> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <AwsEc2Icon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">AWS EC2</p>
    </BannerWrapper>
  );
};

export default AwsEc2Banner;
