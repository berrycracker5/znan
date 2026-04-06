"use client";

import { useHeaderStore } from "@/stores/useHeaderStore";
import { useSectionStore } from "@/stores/useSectionStore";
import { SidebarTrigger } from "@/styles/components/ui/sidebar";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";

const MainHeader: React.FC = () => {
  const hideHeader = useHeaderStore((state) => state.hideHeader);

  const topSectionRef = useSectionStore((state) => state.topSectionRef);
  const router = useRouter();
  const pathname = usePathname();
  const handleClickZnan = () => {
    if (pathname === "/") {
      topSectionRef?.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header
      className={clsx(
        hideHeader ? "-translate-y-full" : "translate-y-0",
        `fixed top-0 left-0 z-50 h-12 w-full bg-gray-100 opacity-100 shadow-sm transition-transform duration-300 md:h-16 lg:translate-y-0 dark:bg-gray-800`
      )}
    >
      <div className="flex h-full w-full items-center justify-between pr-4 pl-2 md:pr-8 md:pl-4">
        <div className="flex items-center justify-center">
          <SidebarTrigger />
          <h1
            className="ml-1 cursor-pointer text-xl font-bold md:ml-4"
            onClick={handleClickZnan}
          >
            ZNAN
          </h1>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default MainHeader;
