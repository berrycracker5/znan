// TODO: 아이콘 파일 추가 필요 → frontend/src/assets/icons/nextjs.svg
import NextjsIcon from "@/assets/icons/nextjs.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface NextjsBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const NextjsBanner: React.FC<NextjsBannerProps> = ({ className, ...props }) => {
  return (
    <BannerWrapper className={className} {...props}>
      <NextjsIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">Next.js</p>
    </BannerWrapper>
  );
};

export default NextjsBanner;
