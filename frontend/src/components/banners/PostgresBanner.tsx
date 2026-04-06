import PostgresIcon from "@/assets/icons/postgres.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import React from "react";

interface PostgresBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const PostgresBanner: React.FC<PostgresBannerProps> = ({
  className,
  ...props
}) => {
  return (
    <BannerWrapper className={className} {...props}>
      <PostgresIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">PostgreSQL</p>
    </BannerWrapper>
  );
};

export default PostgresBanner;
