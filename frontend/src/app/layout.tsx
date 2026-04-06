import MainHeader from "@/components/MainHeader";
import MainSidebar from "@/components/MainSidebar";
import { SidebarProvider } from "@/styles/components/ui/sidebar";
import { Metadata } from "next";
import "./globals.css";
import MainLayoutWrapper from "./MainLayoutWrapper";
import TanQueryProviders from "./TanQueryProviders";

export const metadata: Metadata = {
  title: "ZNAN | Software Engineer",
  description: "박진완의 경력과 기술을 소개합니다.",
  metadataBase: new URL("https://znan.site"),
  icons: {
    icon: "/profile.ico",
  },
  openGraph: {
    title: "ZNAN | Software Engineer",
    description: "풀스택 개발자 박진완의 포트폴리오",
    url: "https://znan.site",
    images: [
      {
        url: "/og/znan-og.png",
        width: 1200,
        height: 600,
        alt: "ZNAN OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZNAN | Software Engineer",
    description: "Welcome to Jinwan's developer homepage",
    images: ["/profile.ico"],
  },
  alternates: {
    canonical: "https://znan.site",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jinwan Park",
              url: "https://znan.site",
              sameAs: [
                "https://github.com/berrycracker5",
                "https://instagram.com/z_____nan",
              ],
              jobTitle: "Full Stack Developer",
            }),
          }}
        />
        <TanQueryProviders>
          <SidebarProvider>
            <MainSidebar />
            <MainHeader />
            <MainLayoutWrapper>{children}</MainLayoutWrapper>
          </SidebarProvider>
        </TanQueryProviders>
      </body>
    </html>
  );
}
