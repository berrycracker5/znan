import clsx from "clsx";
import React, { ReactNode } from "react";

interface CommentRegistInfoWrapperProps {
  children: ReactNode;
  className?: string;
}

const CommentRegistInfoWrapper: React.FC<CommentRegistInfoWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-row gap-x-2 pt-2 md:w-fit md:flex-col md:items-end md:gap-y-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CommentRegistInfoWrapper;
