import React from "react";
import clsx from "clsx";
import { Badge } from "@/styles/components/ui/badge";

interface ProjectBadgeProps {
  className?: string;
  text: string;
}

const ProjectBadge: React.FC<ProjectBadgeProps> = ({ className, text }) => {
  return (
    <Badge className={clsx(className)} variant={"project"}>
      {text}
    </Badge>
  );
};

export default ProjectBadge;
