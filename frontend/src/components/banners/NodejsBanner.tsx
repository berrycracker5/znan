// TODO: 아이콘 파일 추가 필요 → frontend/src/assets/icons/nodejs.svg
import NodejsIcon from "@/assets/icons/nodejs.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface NodejsBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const NodejsBanner: React.FC<NodejsBannerProps> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <NodejsIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">Node.js</p>
    </BannerWrapper>
  );
};

export default NodejsBanner;
