import clsx from "clsx";
import React, { ReactNode } from "react";

interface CommentListContainerProps {
  children: ReactNode;
  className?: string;
}

const CommentListContainer: React.FC<CommentListContainerProps> = ({
  children,
  className,
}) => {
  return <div className={clsx("h-400 w-full", className)}>{children}</div>;
};

export default CommentListContainer;
