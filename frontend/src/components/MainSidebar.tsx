"use client";

import useQueryGetVisitorCount from "@/apis/getVisitorCount";
import GithubIcon from "@/assets/icons/github.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import HabitstampLogo from "@/assets/images/logo-habitstamp.png";
import HaruzogakLogo from "@/assets/images/logo-haruzogak.png";
import InstouchLogo from "@/assets/images/logo-instouch.webp";
import ZnanV1Logo from "@/assets/images/logo-znanv1.png";
import ZnanV2Logo from "@/assets/images/profile.png";
import { useSectionStore } from "@/stores/useSectionStore";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/styles/components/ui/sidebar";
import clsx from "clsx";
import {
  HomeIcon,
  MailIcon,
  NotebookPenIcon,
  UserRound,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function MainSidebar() {
  const { data: visitorData } = useQueryGetVisitorCount();
  const topSectionRef = useSectionStore((state) => state.topSectionRef);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      icon: HomeIcon,
      label: "Home",
      action: () => {
        if (pathname === "/") {
          topSectionRef?.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push("/");
        }
      },
    },
    {
      icon: NotebookPenIcon,
      label: "Comment",
      action: () => {
        router.push("/comment");
      },
    },
    {
      className: "scale-140",
      logo: HaruzogakLogo,
      label: "하루조각 회고",
      action: () => {
        router.push("/comment/haruzogak");
      },
    },
  ];

  const projectsItems = [
    {
      className: "scale-120 scale-y-150",
      logo: ZnanV2Logo,
      label: "Portfolio V2",
      action: () => {
        if (pathname === "/") {
          topSectionRef?.current?.scrollIntoView({ behavior: "smooth" });
        } else {
          router.push("/");
        }
      },
    },
    {
      logo: ZnanV1Logo,
      label: "Portfolio V1",
      action: () => window.open("https://v1.znan.site", "_blank"),
      className: "scale-125",
    },
    {
      logo: HabitstampLogo,
      label: "Habitstamp",
      action: () => window.open("https://habitstamp.znan.site", "_blank"),
      className: "scale-180",
    },
    {
      logo: InstouchLogo,
      label: "Instouch",
      action: () => window.open("https://instouch.site", "_blank"),
      className: "scale-270",
    },
  ];

  const contactMeItems = [
    {
      icon: MailIcon,
      label: "Email",
      action: () => window.open("mailto:znan5495@gmail.com", "_blank"),
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      action: () => window.open("https://github.com/berrycracker5", "_blank"),
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      action: () =>
        window.open("https://www.instagram.com/z_____nan/", "_blank"),
    },
  ];

  const footerItems = [
    {
      icon: UserRound,
      label: "Today",
      banner: visitorData?.todayCount,
    },
    {
      icon: UsersRound,
      label: "Total",
      banner: visitorData?.totalCount,
    },
  ];

  return (
    <Sidebar
      className="md:ml-0.5 md:pt-18"
      variant="floating"
      collapsible="icon"
    >
      <SidebarContent className="rounded-xl dark:bg-gray-900">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  onClick={item.action}
                  className="cursor-pointer"
                >
                  {item.icon && <item.icon className="size-4" />}
                  {item.logo && (
                    <Image
                      src={item.logo}
                      alt={item.label}
                      className={clsx("size-4 rounded-full", item.className)}
                    />
                  )}
                  <span className="ml-2">{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarMenu>
            {projectsItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  onClick={item.action}
                  className="cursor-pointer"
                >
                  <Image
                    src={item.logo}
                    alt={item.label}
                    className={clsx("size-4 rounded-full", item.className)}
                  />
                  <span className="ml-2">{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Contact Me</SidebarGroupLabel>
          <SidebarMenu>
            {contactMeItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  onClick={item.action}
                  className="cursor-pointer"
                >
                  <item.icon className="size-4" />
                  <span className="ml-2">{item.label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="rounded-xl dark:bg-gray-900">
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton>
                <item.icon className="size-4" />
                <span className="ml-2">{item.label}</span>
                <SidebarMenuBadge>{item.banner}</SidebarMenuBadge>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
