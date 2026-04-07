import AwsApiGatewayIcon from "@/assets/icons/aws-apigateway.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface AwsApiGatewayProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AwsApiGatewayBanner: React.FC<AwsApiGatewayProps> = ({
  className,
  ...props
}) => {
  return (
    <BannerWrapper className={className} {...props}>
      <AwsApiGatewayIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">API Gateway</p>
    </BannerWrapper>
  );
};

export default AwsApiGatewayBanner;
