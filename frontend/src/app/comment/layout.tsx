import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageContainer>{children}</PageContainer>;
}
