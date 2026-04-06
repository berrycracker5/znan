"use client";

import useMutationAddVisitor from "@/apis/addVisitor";
import { useHideHeaderOnScroll } from "@/hooks/useHideHeaderOnScroll";
import React, { ReactNode, useEffect, useRef } from "react";

interface MainLayoutWrapperProps {
  children: ReactNode;
}

const MainLayoutWrapper: React.FC<MainLayoutWrapperProps> = ({ children }) => {
  const mainLayoutDivRef = useRef<HTMLDivElement>(null);
  useHideHeaderOnScroll(mainLayoutDivRef);
  const { mutate } = useMutationAddVisitor();
  useEffect(() => {
    mutate();
  }, [mutate]);

  return (
    <div className="h-screen w-full overflow-y-auto" ref={mainLayoutDivRef}>
      {children}
    </div>
  );
};

export default MainLayoutWrapper;
