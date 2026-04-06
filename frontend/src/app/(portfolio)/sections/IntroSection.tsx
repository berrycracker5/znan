import profile from "@/assets/images/profile.png";
import { useSectionStore } from "@/stores/useSectionStore";
import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

interface IntroSectionProps {
  className?: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({ className }) => {
  const topSectionRef = useRef<HTMLDivElement>(null);
  const setTopSectionRef = useSectionStore((state) => state.setTopSectionRef);
  const secondSectionRef = useSectionStore((state) => state.aboutMeSectionRef);
  const scrollToSecondSection = () => {
    secondSectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setTopSectionRef(topSectionRef);
  }, [setTopSectionRef]);

  // 손 눌렀을 때 흔드는 애니메이션
  const handleWiggleAnimation = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = e.currentTarget;
    el.classList.remove("animate-wiggle");
    void el.offsetWidth; // 트리거 재적용을 위한 리플로우
    el.classList.add("animate-wiggle");
  };

  return (
    <section
      id="intro"
      className={clsx(
        "flex min-h-screen w-full flex-col md:flex-row-reverse",
        className
      )}
      ref={topSectionRef}
    >
      {/* 프로필 사진 영역 */}
      <div className="flex w-full flex-col items-center justify-center pt-20 md:max-w-1/2 md:py-20">
        <Image
          src={profile}
          alt="profile"
          className="max-w-1/2 rounded-full border-2 border-gray-700 bg-gray-200 md:max-w-3/5 xl:max-w-2/5"
        />
      </div>

      {/* Intro 영역 */}
      <div className="flex w-full flex-col items-start justify-center gap-12 px-8 pt-12 pb-4 md:w-1/2 md:pt-16 md:pr-0 md:pl-10 lg:pl-20 xl:pl-30">
        <div className="flex w-full flex-row items-center justify-start gap-2">
          <h2 className="text-2xl tracking-wide xl:text-3xl">안녕하세요!</h2>
          <button
            onClick={handleWiggleAnimation}
            className="animate-wiggle -mt-1 inline-block cursor-pointer text-2xl transition-transform hover:scale-125"
          >
            👋
          </button>
        </div>
        <p className="text-lg font-light tracking-wide whitespace-nowrap md:text-xl xl:text-2xl">
          Software Engineer 직무로 일하고 있는 <br />
          <span className="font-bold">Full-stack Developer 박진완</span>입니다
          😄
        </p>
        <div className="flex w-full flex-col items-center gap-4">
          <div
            className="text-md mt-6 flex cursor-pointer flex-col items-center text-gray-700 md:mt-10 lg:mt-16 dark:text-gray-400"
            onClick={scrollToSecondSection}
          >
            <span className="hover:scale-110">Let&apos;s go !</span>
            <ChevronDownIcon className="mt-4 h-6 w-6 animate-bounce" />
            <ChevronDownIcon className="-mt-4 h-6 w-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
