import AwsLambdaIcon from "@/assets/icons/aws-lambda.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface AwsLambdaProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AwsLambdaBanner: React.FC<AwsLambdaProps> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <AwsLambdaIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">Lambda</p>
    </BannerWrapper>
  );
};

export default AwsLambdaBanner;
