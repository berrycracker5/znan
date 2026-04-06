import KubernetesIcon from "@/assets/icons/kubernetes.svg";
import BannerWrapper from "@/components/banners/BannerWrapper";
import clsx from "clsx";
import React from "react";

interface KubernetesBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const KubernetesBanner: React.FC<KubernetesBannerProps> = ({
  className,
  ...props
}) => {
  return (
    <BannerWrapper className={clsx("", className)} {...props}>
      <KubernetesIcon className="h-6 w-6" />
      <p className="ml-1 text-sm font-semibold">Kubernetes</p>
    </BannerWrapper>
  );
};

export default KubernetesBanner;
