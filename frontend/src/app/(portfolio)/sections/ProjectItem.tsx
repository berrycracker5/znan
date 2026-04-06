import clsx from "clsx";
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import ProjectBadge from "./ProjectBadge";

interface ProjectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  logo?: React.ReactNode;
  title?: string;
  period?: string;
  description?: string | React.ReactNode;
  visitLink?: string;
  badgeClassName?: string;
  badgeTextList?: Array<string>;
  children?: React.ReactNode;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  className,
  logo,
  title,
  period,
  description,
  visitLink,
  badgeClassName,
  badgeTextList,
  children,
  ...props
}) => {
  return (
    <div className="w-full">
      <div className={clsx("w-full pt-2 pb-4 md:pt-0", className)} {...props}>
        <div className="flex items-center gap-2">
          {logo && <div>{logo}</div>}

          <div>
            <p className="text-xl font-black">{title}</p>
            <p className="text-sm font-light">{period}</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <p>{description}</p>
        {badgeTextList && (
          <div
            className={clsx(
              "mt-2 flex flex-wrap items-start justify-start gap-2",
              badgeClassName
            )}
          >
            {badgeTextList.map((badgeText, index) => (
              <ProjectBadge key={index} text={badgeText} />
            ))}
          </div>
        )}
        {visitLink && (
          <div className="mt-2 flex w-full items-center justify-end">
            <a
              href={visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-end text-sm italic underline-offset-4 hover:underline md:text-base xl:text-lg"
            >
              Visit Project
              <ArrowRightIcon className="ml-1 inline-block h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default ProjectItem;
