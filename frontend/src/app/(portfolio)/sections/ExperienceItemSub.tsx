import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ExperienceItemSubProps {
  className?: string;
  year: string;
  month: string;
  gradientClass?: string;
  experienceLogo?: StaticImageData | string;
  experienceLogoClass?: string;
  experienceTitle?: string;
  children?: React.ReactNode;
}

const ExperienceItemSub: React.FC<ExperienceItemSubProps> = ({
  className,
  year,
  month,
  gradientClass,
  experienceLogo = "",
  experienceLogoClass,
  experienceTitle = "",
  children,
}) => {
  return (
    <div
      className={clsx(
        "flex w-full flex-row items-stretch justify-center pl-2 -mt-10",
        className
      )}
    >
      <div className={clsx("w-2 bg-gradient-to-b", gradientClass)} />
      <div className="flex flex-col items-start justify-start pl-4">
        <p className="font-medium md:text-lg xl:text-xl">{year}</p>
        <p className="-mt-1 w-full text-end text-sm">{month}</p>
      </div>
      <div className="flex w-full flex-col items-start justify-start pr-8 pb-8 pl-10 md:pl-20">
        <div className="mb-8 flex w-full items-start gap-2 md:gap-6 xl:gap-10 mt-1">
          <Image
            src={experienceLogo}
            alt={experienceTitle}
            className={clsx(
              "mt-1 inline-block h-6 w-6 rounded-full bg-white",
              experienceLogoClass
            )}
          />
          <div>
            <p className="w-full text-lg font-bold tracking-wide text-nowrap lg:text-xl xl:text-2xl">
              {experienceTitle}
            </p>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItemSub;
