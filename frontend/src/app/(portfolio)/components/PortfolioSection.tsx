import clsx from "clsx";
import React, { forwardRef } from "react";

type PortfolioSectionProps = React.ComponentPropsWithoutRef<"section">;

const PortfolioSection = forwardRef<HTMLDivElement, PortfolioSectionProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <section
        className={clsx(
          "flex w-full flex-col gap-y-6 px-6 md:flex-row md:px-12 lg:px-20 xl:px-30",
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </section>
    );
  }
);

PortfolioSection.displayName = "PortfolioSection";
export default PortfolioSection;
