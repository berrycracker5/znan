import HaruzogakLogo from "@/assets/images/logo-haruzogak.png";
import LgLogo from "@/assets/images/logo-lg.png";
import SeoultechLogo from "@/assets/images/logo-seoultech.png";
import Profile from "@/assets/images/profile.png";
import React from "react";
import PortfolioSection from "../components/PortfolioSection";
import PortfolioSectionContent from "../components/PortfolioSectionContent";
import PortfolioSectionTitle from "../components/PortfolioSectionTitle";
import ExperienceItem from "./ExperienceItem";
import ExperienceItemCotentText from "./ExperienceItemCotentText";
import ExperienceItemSub from "./ExperienceItemSub";
import KBLogo from "@/assets/images/logo-kb.png";
import KoreanAirLogo from "@/assets/images/logo-koreanair.png";

interface ExperienceSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  className,
  ...rest
}) => {
  return (
    <PortfolioSection className={className} {...rest}>
      <PortfolioSectionTitle>Experience</PortfolioSectionTitle>
      <PortfolioSectionContent>
        <ExperienceItem
          year="1995"
          month="MAY"
          gradientClass="dark:from-gray-800 dark:to-curious-blue-700 from-curious-blue-100 to-curious-blue-300"
          experienceLogo={Profile}
          experienceLogoClass="border-1 h-7"
          experienceTitle="박진완"
        >
          <ExperienceItemCotentText>1995. 05. 19</ExperienceItemCotentText>
        </ExperienceItem>
        <ExperienceItem
          year="2014"
          month="MAR"
          gradientClass="dark:from-curious-blue-700 dark:to-curious-blue-700 from-curious-blue-300 to-curious-blue-500"
          experienceLogo={SeoultechLogo}
          experienceLogoClass="border-1"
          experienceTitle="서울과학기술대학교"
        >
          <ExperienceItemCotentText>컴퓨터공학과</ExperienceItemCotentText>
        </ExperienceItem>
        <ExperienceItem
          year="2021"
          month="MAY"
          gradientClass="dark:from-curious-blue-700 dark:to-curious-blue-700 from-curious-blue-500 to-curious-blue-500"
          experienceLogo={LgLogo}
          experienceTitle="LG CNS"
        >
          <ExperienceItemCotentText>
            입사 - 신입 공채
          </ExperienceItemCotentText>
        </ExperienceItem>
        <ExperienceItemSub
          year="2021"
          month="AUG"
          gradientClass="dark:from-curious-blue-700 dark:to-curious-blue-700 from-curious-blue-500 to-curious-blue-600"
          experienceLogo={KBLogo}
        >
          <ExperienceItemCotentText>
            <span className="font-bold">KB손해보험</span> 프로젝트
          </ExperienceItemCotentText>
          <ExperienceItemCotentText>
            Mobile Web 유지보수 (FE/BE)
          </ExperienceItemCotentText>
        </ExperienceItemSub>
        <ExperienceItemSub
          year="2022"
          month="OCT"
          gradientClass="dark:from-curious-blue-700 dark:to-curious-blue-500 from-curious-blue-600 to-curious-blue-700"
          experienceLogo={HaruzogakLogo}
        >
          <ExperienceItemCotentText>
            <span className="font-bold">하루조각</span> 마이데이터 서비스
          </ExperienceItemCotentText>
          <ExperienceItemCotentText>
            Mobile Web 개발 (Full-Stack)
          </ExperienceItemCotentText>
        </ExperienceItemSub>
        <ExperienceItemSub
          year="2025"
          month="NOV"
          gradientClass="dark:from-curious-blue-500 dark:to-curious-blue-300 from-curious-blue-700 to-curious-blue-700"
          experienceLogo={KoreanAirLogo}
          // experienceTitle="LG CNS"
        >
          <ExperienceItemCotentText>
            <span className="font-bold">대한항공</span> Customer Data Platform
          </ExperienceItemCotentText>
          <ExperienceItemCotentText>
            Cloud Native 기반 데이터 플랫폼 운영
          </ExperienceItemCotentText>
        </ExperienceItemSub>

        {/* 맨 아래 화살표 머리 */}
        <div className={"w-full"}>
          <p
            className={`text-curious-blue-700 dark:text-curious-blue-300 -mt-3 w-6 text-center text-xl`}
          >
            ▼
          </p>
        </div>
      </PortfolioSectionContent>
    </PortfolioSection>
  );
};

export default ExperienceSection;
