import React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import clsx from "clsx";

const SkeletonLine = ({
  width = "w-full",
  height = "h-4",
  className,
}: {
  width?: string;
  height?: string;
  className?: string;
}) => (
  <div
    className={clsx(
      "rounded bg-gray-200 dark:bg-gray-700",
      width,
      height,
      className
    )}
  />
);

const CommentSkeletonMobile = () => {
  return (
    <div className="animate-pulse space-y-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-y-2">
          <div className="flex items-end justify-between">
            <SkeletonLine width="w-40" />
            <SkeletonLine width="w-5 h-5" className="rounded-full" />
          </div>
          <SkeletonLine width="w-full" height="h-4" />
          <SkeletonLine width="w-1/2" height="h-3" />
        </div>
      ))}
    </div>
  );
};

const CommentSkeletonDesktop = () => {
  return (
    <div className="animate-pulse space-y-10">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-row items-start justify-center gap-x-4"
        >
          <div className="flex w-40 flex-col gap-y-2">
            <SkeletonLine width="w-32" />
            <SkeletonLine width="w-24" height="h-3" />
          </div>
          <div className="flex-1 space-y-2">
            <SkeletonLine width="w-full" />
            <SkeletonLine width="w-5/6" />
          </div>
          <SkeletonLine width="w-5 h-5" className="rounded-full" />
        </div>
      ))}
    </div>
  );
};

const CommentListSkeleton = () => {
  const isMobile = useIsMobile();
  return isMobile ? <CommentSkeletonMobile /> : <CommentSkeletonDesktop />;
};

export default CommentListSkeleton;
