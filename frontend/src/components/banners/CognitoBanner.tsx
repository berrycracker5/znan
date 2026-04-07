// TODO: 아이콘 파일 추가 필요 → frontend/src/assets/icons/aws-cognito.svg
import CognitoIcon from "@/assets/icons/aws-cognito.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface CognitoBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CognitoBanner: React.FC<CognitoBannerProps> = ({
  className,
  ...props
}) => {
  return (
    <BannerWrapper className={className} {...props}>
      <CognitoIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">Cognito</p>
    </BannerWrapper>
  );
};

export default CognitoBanner;
