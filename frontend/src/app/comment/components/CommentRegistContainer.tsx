import clsx from "clsx";
import React, { ReactNode } from "react";

interface CommentRegistContainerProps {
  children: ReactNode;
  className?: string;
}

const CommentRegistContainer: React.FC<CommentRegistContainerProps> = ({
  children,
  className,
}) => {
  return <div className={clsx("w-full", className)}>{children}</div>;
};

export default CommentRegistContainer;
