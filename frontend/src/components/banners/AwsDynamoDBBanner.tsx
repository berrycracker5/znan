import AwsDynamoDBIcon from "@/assets/icons/aws-dynamodb.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface AwsDynamoDBProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AwsDynamoDBBanner: React.FC<AwsDynamoDBProps> = ({
  className,
  ...props
}) => {
  return (
    <BannerWrapper className={className} {...props}>
      <AwsDynamoDBIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">DynamoDB</p>
    </BannerWrapper>
  );
};

export default AwsDynamoDBBanner;
