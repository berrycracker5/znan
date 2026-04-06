import { Metadata } from "next";
import ClientView from "./ClientView";

export const metadata: Metadata = {
  title: "하루조각 회고",
  description: "하루조각 서비스 종료 후 회고 comment",
  metadataBase: new URL("https://znan.site/comment/haruzogak"),
  icons: {
    icon: "/haruzogak.png",
  },
  openGraph: {
    title: "하루조각 회고 초대",
    description: "댓글을 남겨주세요 📝",
    url: "https://znan.site/comment/haruzogak",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://znan.site/og/haruzogak-og.png",
        alt: "Haruzogak OG Image",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Haruzogak = () => {
  return <ClientView />;
};

export default Haruzogak;
