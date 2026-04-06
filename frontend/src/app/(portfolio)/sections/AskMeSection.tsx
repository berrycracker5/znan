import AskMeItem from "./AskMeItem";
import MorningRoutinePopover from "./MorningRoutinePopover";
import PortfolioSection from "../components/PortfolioSection";
import PortfolioSectionContent from "../components/PortfolioSectionContent";
import PortfolioSectionTitle from "../components/PortfolioSectionTitle";
import { useSectionStore } from "@/stores/useSectionStore";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

interface AskMeSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AskMeSection: React.FC<AskMeSectionProps> = ({ className, ...rest }) => {
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const setAboutMeSectionRef = useSectionStore(
    (state) => state.setAboutMeSectionRef
  );
  useEffect(() => {
    setAboutMeSectionRef(aboutMeSectionRef);
  }, [setAboutMeSectionRef]);

  return (
    <PortfolioSection
      ref={aboutMeSectionRef}
      className={clsx("scroll-mt-10 lg:scroll-mt-30", className)}
      {...rest}
    >
      <PortfolioSectionTitle>Ask Me</PortfolioSectionTitle>
      <PortfolioSectionContent className="gap-y-4 md:gap-y-8">
        <AskMeItem
          question="현재 무엇을 하고 계신가요?"
          answer={
            <p>
              LG CNS 소속으로 대한항공 IT 시스템 관리를 담당하고 있습니다🙂
              <br />
              대한항공 직원분들이 사용하는 웹 서비스를 비롯하여, Data Platform
              의 Engine 로직 및 데이터 파이프라인을 개발하고 있습니다.
            </p>
          }
        />
        <AskMeItem
          question="Software Engineer 로서 본인은 어떤 사람인가요?"
          answer={
            <p>
              제가 모르는 영역에 대해 궁금해하고 배우며, 그것으로 나만의
              무언가를 만들 때 즐거움을 느낍니다😆
              <br />
              그러다보니 자연스럽게 넓은 분야를 경험하게 되었고, 다양한 기술
              스택을 접하게 되었습니다. 그럴수록 Depth 있는 지식에 대한 중요성도
              자각하게 되는 것 같습니다🤔
            </p>
          }
        />
        <AskMeItem
          className="pointer-events-auto"
          question="그 외에 본인에 대해 간단히 소개해주세요"
          answer={
            <p>
              저는 루틴을 세팅하고 그걸 꾸준히 지켜나가며 자존감을 느끼는
              사람입니다💪
              <br />
              매일 같은
              <MorningRoutinePopover triggerText="모닝루틴" />을 지킨 후 하루를
              시작합니다. 꾸준함이 그 어떤 것보다 어렵고 효과적이라고 생각하며,
              그것이 저의 강점이라고 생각합니다👍
            </p>
          }
        />
      </PortfolioSectionContent>
    </PortfolioSection>
  );
};

export default AskMeSection;
