import TerminalIcon from "@/assets/icons/terminal.svg";
import CaringNoteLogo from "@/assets/images/logo-caringnote.png";
import CkaLogo from "@/assets/images/logo-cka.png";
import HabitstampLogo from "@/assets/images/logo-habitstamp.png";
import InstouchLogo from "@/assets/images/logo-instouch.webp";
import ZnanV1Logo from "@/assets/images/logo-znanv1.png";
import AwsApiGatewayBanner from "@/components/banners/AwsApiGatewayBanner";
import AwsCloudFrontBanner from "@/components/banners/AwsCloudFrontBanner";
import AwsDynamoDBBanner from "@/components/banners/AwsDynamoDBBanner";
import AwsEc2Banner from "@/components/banners/AwsEc2Banner";
import AwsLambdaBanner from "@/components/banners/AwsLambdaBanner";
import AwsS3Banner from "@/components/banners/AwsS3Banner";
import CognitoBanner from "@/components/banners/CognitoBanner";
import ExpressBanner from "@/components/banners/ExpressBanner";
import GhcrBanner from "@/components/banners/GhcrBanner";
import GithubActionsBanner from "@/components/banners/GithubActionsBanner";
import GithubBanner from "@/components/banners/GithubBanner";
import InternetBanner from "@/components/banners/InternetBanner";
import KubernetesBanner from "@/components/banners/KubernetesBanner";
import LetsEncryptBanner from "@/components/banners/LetsEncryptBanner";
import NextjsBanner from "@/components/banners/NextjsBanner";
import NginxBanner from "@/components/banners/NginxBanner";
import NodejsBanner from "@/components/banners/NodejsBanner";
import PostgresBanner from "@/components/banners/PostgresBanner";
import ReactBanner from "@/components/banners/ReactBanner";
import SpringBanner from "@/components/banners/SpringBanner";
import VercelBanner from "@/components/banners/VercelBanner";
import Image from "next/image";
import React from "react";
import PortfolioSection from "../components/PortfolioSection";
import PortfolioSectionContent from "../components/PortfolioSectionContent";
import PortfolioSectionTitle from "../components/PortfolioSectionTitle";
import ProjectItem from "./ProjectItem";
import SystemDesign from "./SystemDesign";
import SystemDesignContent from "./SystemDesignContent";
import SystemDesignDescription from "./SystemDesignDescription";

interface ProjectSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  className,
  ...rest
}) => {
  return (
    <PortfolioSection className={className} {...rest}>
      <PortfolioSectionTitle>Projects</PortfolioSectionTitle>
      <PortfolioSectionContent className="gap-y-20 md:gap-y-28">
        <ProjectItem
          logo={
            <Image
              src={ZnanV1Logo}
              alt="ZNAN Portfolio Logo"
              className="h-9 w-9 rounded-sm"
            />
          }
          title="Portfolio V1"
          period="2023.04 ~ 2023.06"
          description={
            <>
              React 학습 이후 처음으로 만든 포트폴리오 웹사이트입니다.
              <br />
              당시 반응형을 고려하지 못하여 모바일 환경에서만 작동하는 귀여운
              프로젝트 입니다 😅
            </>
          }
          badgeTextList={["React", "TypeScript", "NPM", "Git"]}
          visitLink="https://v1.znan.site"
        >
          <SystemDesign>
            <SystemDesignContent className="grid grid-cols-[1fr_auto_1fr] grid-rows-5 gap-x-1 gap-y-0 px-1 py-4">
              <div className="col-span-2 mt-2 ml-4 flex w-fit items-center justify-center border-1 border-gray-500 p-2 text-3xl md:mt-4 md:ml-10 md:px-4 lg:px-6">
                <span className="">👨‍💻</span>
                <ReactBanner className="mt-1 ml-2 md:ml-4 lg:ml-6 xl:ml-8" />
              </div>
              <div className="col-start-1 row-start-2 flex scale-y-130 items-center justify-center text-4xl font-light">
                ↓
              </div>
              <div className="col-start-1 row-start-3 flex items-center justify-center">
                <GithubBanner />
              </div>
              <div className="col-start-2 row-start-3 flex flex-col items-center justify-center">
                <p className="text-2xl tracking-widest whitespace-nowrap md:scale-x-160">
                  ┉ 👀 ┉
                </p>
              </div>
              <div className="col-start-3 row-start-3 flex items-center justify-center">
                <VercelBanner />
              </div>
              <div className="col-start-3 row-start-4 mr-12 mb-4 flex scale-120 items-center justify-center text-4xl font-light md:mr-14">
                ↙
              </div>
              <div className="col-span-3 row-start-5 flex items-center justify-center">
                <InternetBanner className="rounded-full px-12 md:px-20 md:py-4 lg:px-40 xl:px-48" />
              </div>
            </SystemDesignContent>
            <SystemDesignDescription>
              React 개발 후 Github 에 올리고, Vercel 에서 해당 repository 를
              빌드한 뒤 배포하는 간단한 구성입니다. 도메인만 별도로 구매하여
              CNAME 연결하였습니다.
            </SystemDesignDescription>
          </SystemDesign>
        </ProjectItem>
        <ProjectItem
          logo={
            <Image
              src={HabitstampLogo}
              alt="HabitStamp Logo"
              className="h-9 w-9 scale-130"
            />
          }
          title="HabitStamp"
          period="2023.08 ~ 2023.12"
          description={`AWS 학습 이후 활용하기 위한 목적으로, 제가 쓰려고 만든 습관형성 어플리케이션 입니다.
              캘린더에 성공여부를 체크하여 달성율을 확인하는 용도입니다 📆
              `}
          badgeTextList={["React", "Spring Boot", "JAVA", "AWS"]}
          visitLink="https://habitstamp.znan.site"
        >
          <SystemDesign>
            <SystemDesignContent className="grid grid-cols-[1fr_1fr_auto] grid-rows-8 gap-x-1 px-2 py-4">
              <div className="col-span-2 flex w-full items-center justify-center">
                <div className="flex w-fit items-center justify-center border-1 border-gray-500 p-2 text-3xl md:px-8 lg:px-16 xl:px-20">
                  <ReactBanner className="" />
                  <span className="mx-2 md:mx-4 xl:mx-6">👨‍💻</span>
                  <SpringBanner className="" />
                </div>
              </div>
              <div className="col-start-1 row-start-2 flex items-center justify-center pl-8">
                <p className="w-full text-end text-4xl font-light">↓</p>
                <p className="font-base w-full text-start text-sm">/build</p>
              </div>
              <div className="col-start-2 row-start-2 flex items-center justify-start">
                <p className="w-full text-end text-4xl font-light">↓</p>
                <p className="font-base w-full text-start text-sm">
                  function.jar
                </p>
              </div>
              <div className="col-start-1 row-start-3 flex items-center justify-center">
                <AwsS3Banner className="" />
              </div>
              <div className="col-span-2 col-start-2 row-start-3 flex items-center justify-center md:justify-center">
                <AwsLambdaBanner className="px-6" />
              </div>
              <div className="col-start-1 row-span-2 row-start-4 flex items-center justify-center">
                <p className="w-full scale-y-200 text-center text-4xl font-light">
                  ↓
                </p>
              </div>
              <div className="col-span-2 col-start-2 row-span-2 row-start-4 flex items-center justify-center">
                <p className="w-full scale-y-200 text-end text-4xl font-light">
                  ↑
                </p>
                <div className="flex h-full w-full items-start justify-end md:pl-4">
                  <AwsDynamoDBBanner className="" />
                </div>
              </div>
              <div className="col-start-1 row-start-6 flex items-center justify-center">
                <AwsCloudFrontBanner className="" />
              </div>
              <div className="col-start-1 row-start-7 flex items-center justify-center">
                <p className="w-full scale-y-120 text-center text-4xl font-light">
                  ↓
                </p>
              </div>
              <div className="col-start-2 row-start-6 flex items-center justify-center">
                <AwsApiGatewayBanner className="" />
              </div>
              <div className="col-start-2 row-start-7 flex items-center justify-center">
                <p className="w-full scale-y-120 text-center text-4xl font-light">
                  ↑
                </p>
              </div>
              <div className="col-span-2 col-start-1 row-start-8 flex items-center justify-center">
                <InternetBanner className="rounded-full px-12 md:px-20 md:py-4 lg:px-40 xl:px-48" />
              </div>
            </SystemDesignContent>
            <SystemDesignDescription>
              Local에서 React 를 빌드하여 S3 에 업로드하고, CloudFront 를 통해
              정적 파일 배포합니다. Spring Boot 로 작성한 백엔드 로직은 Lambda
              에서 실행되며, DynamoDB 를 통해 데이터를 저장합니다. Lambda 는 API
              Gateway 를 통해 외부와 통신합니다.
            </SystemDesignDescription>
          </SystemDesign>
        </ProjectItem>
        <ProjectItem
          logo={
            <Image
              src={CaringNoteLogo}
              alt="Caring Note Logo"
              className="h-9 w-9 rounded-sm"
            />
          }
          title="CaringNote"
          period="2024.10 ~ 2025.02"
          description={`Kakao Impact 에서 주최한 기술 중심의 사회문제해결 프로젝트 입니다💊
            CaringNote 라는 LAB 에서 다른 팀원들과 함께 비영리단체의 복약상담 관리 시스템을 개발하는 프로젝트로서,
            저는 FE 개발을 담당하였습니다.
            `}
          badgeClassName="mt-4"
          badgeTextList={["React", "TailwindCSS", "Shadcn-UI", "PNPM"]}
        />
        <ProjectItem
          logo={
            <Image
              src={CkaLogo}
              alt="CKA Certification Logo"
              className="h-9 w-9 rounded-sm"
            />
          }
          title="CKA Certification Study"
          period="2025.05.09 취득 ✔"
          description={`Kubernetes 를 학습하기 위한 개인 스터디 프로젝트입니다📚
            CKA 자격증 취득을 목표로, Udemy 강의를 학습하고 EC2 에서 Kubernetes 클러스터를 구축해보았습니다.
            `}
          badgeClassName="mt-4"
          badgeTextList={["Kubernetes", "Docker", "Linux"]}
        />
        <ProjectItem
          logo={
            <Image
              src={InstouchLogo}
              alt="Instouch Logo"
              className="h-9 w-9 scale-180 rounded-sm"
            />
          }
          title="Instouch"
          period="2025.05 ~ 2025.07"
          description={`제가 갖고 있는 모든 기술 스택을 활용해보고자 만든 어플리케이션 입니다🔥
          사용자의 응답을 기반으로, 비슷한 성향을 가진 사람들의 인스타그램 ID를 연결해주는 소셜 매칭 웹앱입니다.
          `}
          badgeTextList={[
            "React",
            "NodeJS",
            "Express",
            "PostgreSQL",
            "Github Actions",
            "GHCR",
            "NGINX",
            "AWS EC2",
            "Docker",
            "Kubernetes",
          ]}
          visitLink="https://instouch.site"
        >
          <SystemDesign>
            <SystemDesignContent className="flex flex-col items-center justify-center gap-4">
              {/* Devops */}
              <p className="w-full px-4 pt-4 text-sm font-bold md:px-8">
                DevOps
              </p>
              <div>
                <div className="grid w-full grid-cols-3 grid-rows-6">
                  <div className="col-span-3 col-start-1 row-start-1 flex w-full items-center justify-center">
                    <div className="flex w-fit items-center justify-center border-1 border-gray-500 p-2 text-3xl md:px-8 lg:px-16 xl:px-20">
                      <ReactBanner />
                      <span className="mx-2 md:mx-4 xl:mx-6">👨‍💻</span>
                      <ExpressBanner />
                    </div>
                  </div>
                  <div className="col-span-3 col-start-1 row-start-2 flex items-center justify-center">
                    <p className="w-full scale-y-150 pt-1 pr-3 text-center text-xl font-light">
                      ↓
                    </p>
                  </div>
                  <div className="col-span-3 row-start-3 flex items-center justify-center">
                    <GithubBanner />
                  </div>
                  <div className="col-span-3 row-span-3 row-start-4 flex w-full flex-col items-center justify-center gap-y-6 border-1 border-gray-500 px-1 md:gap-y-8">
                    <div className="flex w-full items-center justify-center gap-4">
                      <GithubActionsBanner />
                      <div className="w-fit">
                        <p className="text-center text-sm">Build Image</p>
                        <p className="-mt-1 w-full scale-x-150 text-center text-xl font-light">
                          →
                        </p>
                      </div>
                      <GhcrBanner />
                    </div>
                    <div className="flex w-fit flex-row items-center justify-center gap-2 border-1 border-gray-500 px-4 py-1">
                      <TerminalIcon className="h-4 w-4" />
                      <p className="text-sm">SSH : kubectl rollout restart</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Line */}
              <div className="mt-2 h-1 w-full border-t-3 border-dotted border-gray-500" />

              {/* Service */}
              <p className="w-full px-4 pt-2 text-sm font-bold md:px-8">
                Service
              </p>
              <div className="grid w-full grid-cols-7 grid-rows-14 px-1">
                <div className="col-span-7 col-start-1 row-start-1 flex items-center justify-center">
                  <InternetBanner className="rounded-full px-12 md:px-20 lg:px-40 xl:px-48" />
                </div>
                <div className="col-span-7 col-start-1 row-start-2 flex items-center justify-center">
                  <p className="w-full text-center text-xl font-light">↓</p>
                </div>
                <div className="col-span-7 col-start-1 row-start-3 flex items-center justify-center">
                  <AwsEc2Banner className="border-candlelight-600 dark:border-candlelight-900 border-b-0 py-2.5" />
                </div>
                <div className="border-candlelight-600 dark:border-candlelight-900 col-span-7 col-start-1 row-span-11 row-start-4 mb-2 flex flex-col items-center justify-start gap-0 border-1 px-4 py-6">
                  <div className="flex w-full flex-row items-center justify-center gap-4 border-1 border-gray-500 px-2 py-2 pl-13">
                    <NginxBanner />
                    <span className="text:md font-light md:text-xl">+</span>
                    <LetsEncryptBanner className="dark:bg-dark-background bg-white" />
                  </div>
                  <p className="text-md w-full py-2 text-center font-light">
                    ↓
                  </p>
                  <KubernetesBanner className="border-curious-blue-600 dark:border-curious-blue-800 border-b-0" />
                  <div className="border-curious-blue-600 dark:border-curious-blue-800 flex w-full flex-col items-center justify-start gap-1 border-1 px-2 py-6">
                    <p className="w-40 border-1 border-gray-500 px-8 py-1 text-center font-bold md:w-60 lg:w-80">
                      GatewayClass
                    </p>
                    <p className="w-40 border-1 border-gray-500 px-8 py-1 text-center font-bold md:w-60 lg:w-80">
                      Gateway
                    </p>
                    <p className="w-40 border-1 border-gray-500 px-8 py-1 text-center font-bold md:w-60 lg:w-80">
                      HTTPRoute
                    </p>
                    <div className="grid w-full grid-cols-3 md:gap-x-2">
                      <div className="col-start-1 row-start-1 ml-12 flex flex-row items-center justify-center md:ml-15">
                        <p className="scale-y-120 text-lg font-light">↙</p>
                        <p className="ml-1 text-sm font-light text-nowrap md:ml-4">
                          /∗
                        </p>
                      </div>
                      <div className="col-start-2 row-start-1 ml-12 flex flex-row items-center justify-center gap-y-2 py-2 md:ml-14">
                        <p className="w-fit text-lg font-light">↓</p>
                        <p className="ml-1 text-sm font-light text-nowrap md:ml-4">
                          /api/∗
                        </p>
                      </div>
                      <div className="col-start-1 row-start-2 flex flex-col items-center justify-center gap-y-0.5">
                        <p className="w-18 border-1 border-gray-500 px-2 py-0.5 text-center font-bold md:w-30">
                          Service
                        </p>
                        <p className="w-18 border-1 border-gray-500 px-2 py-2 text-center font-bold md:w-30">
                          Pod (WEB)
                        </p>
                      </div>
                      <div className="col-start-2 row-start-2 flex flex-col items-center justify-center gap-y-0.5">
                        <p className="w-18 border-1 border-gray-500 px-2 py-0.5 text-center font-bold md:w-30">
                          Service
                        </p>
                        <p className="w-18 border-1 border-gray-500 px-2 py-2 text-center font-bold md:w-30">
                          Pod (WAS)
                        </p>
                      </div>
                      <div className="col-start-3 row-start-2 flex flex-row items-center justify-start md:justify-center">
                        <PostgresBanner className="dark:bg-dark-background border-1 border-gray-500 bg-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SystemDesignContent>
            <SystemDesignDescription>
              React 와 Express 로 개발하여 Github 에 push 하면, GitHub Actions
              를 통해 Docker 이미지를 빌드하고 GitHub Container Registry 에
              업로드합니다. 해당 GHCR 을 바라보고 있는 Deployment 에 새로운
              image 를 pull 시키기 위해, 서버에 SSH 로 연결하여 명령하는
              것으로서 DevOps 를 구현하였습니다.
            </SystemDesignDescription>
            <SystemDesignDescription>
              EC2 서버에서는 리버스 프록시인 Nginx 에 TLS 설정을 한 뒤,
              외부통신을 받아 Kubernetes Cluster로 전달합니다. Cluster 내에서는
              HTTPRoute 를 통해 내부 서비스로 Routing 되며, WEB, WAS, DB 는 각각
              별도의 Deployment 로 구성되어 있습니다.
            </SystemDesignDescription>
          </SystemDesign>
        </ProjectItem>
        <ProjectItem
          logo={
            <Image
              src={HabitstampLogo}
              alt="HabitStamp V2 Logo"
              className="h-9 w-9 scale-130"
            />
          }
          title="HabitStamp V2"
          period="2026.03 ~ 2026.04"
          description={
            <>
              기존 HabitStamp를 완전히 새로 설계한 버전입니다 🏋️
              <br />
              Next.js + Serverless 아키텍처로 전환하고, Cognito 인증과 Terraform
              IaC를 도입하여 프로덕션 수준의 풀스택 앱으로 재구축하였습니다.
            </>
          }
          badgeTextList={[
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "AWS Lambda",
            "DynamoDB",
            "Cognito",
            "API Gateway",
            "Terraform",
          ]}
          visitLink="https://habitstamp.znan.site"
        >
          <SystemDesign>
            <SystemDesignContent className="grid grid-cols-[1fr_1fr_auto] grid-rows-6 gap-x-1 px-2 py-4">
              <div className="col-span-2 flex w-full items-center justify-center">
                <div className="flex w-fit items-center justify-center border-1 border-gray-500 p-2 text-3xl md:px-8 lg:px-16 xl:px-20">
                  <NextjsBanner className="" />
                  <span className="mx-2 md:mx-4 xl:mx-6">👨‍💻</span>
                  <NodejsBanner className="" />
                </div>
              </div>
              <div className="col-start-1 row-start-2 flex items-center justify-center pl-8">
                <p className="w-full text-end text-4xl font-light">↓</p>
                <p className="font-base w-full text-start text-sm"></p>
              </div>
              <div className="col-start-2 row-start-2 flex items-center justify-start">
                <p className="w-full text-end text-4xl font-light">↓</p>
                <p className="font-base w-full text-start text-sm"></p>
              </div>
              <div className="col-start-1 row-span-1 row-start-3 flex items-center justify-center">
                <VercelBanner />
              </div>
              <div className="col-span-2 col-start-2 row-start-3 flex items-center justify-center md:justify-center">
                <AwsLambdaBanner className="px-6" />
              </div>
              <div className="col-start-1 row-span-2 row-start-4 flex items-center justify-center">
                <p className="w-full scale-y-200 text-center text-4xl font-light">
                  ↓
                </p>
              </div>
              <div className="col-span-2 col-start-2 row-span-2 row-start-4 flex items-center justify-center">
                <p className="w-full scale-y-200 text-end text-4xl font-light">
                  ↑
                </p>
                <div className="flex h-full w-full items-start justify-end md:pl-4">
                  <AwsDynamoDBBanner className="" />
                </div>
              </div>
              <div className="col-start-1 row-start-6 flex items-center justify-center">
                <InternetBanner className="rounded-full px-12" />
              </div>
              <div className="col-start-2 row-start-6 row-span-1 flex items-center justify-center flex-col gap-y-2">
                <AwsApiGatewayBanner className="" />
                <CognitoBanner className="" />
              </div>
              <div className="col-span-2 col-start-1 row-start-7 flex items-center justify-center">
                <p className="w-full scale-y-120 scale-x-180 text-center text-4xl font-light -mt-14 ml-4">
                  →
                </p>
              </div>
              <div className="col-span-2 col-start-1 row-start-8 flex items-center justify-center">
              </div>
            </SystemDesignContent>
            <SystemDesignDescription>
              Next.js 프론트엔드는 Vercel에서 호스팅되며, Amplify Auth를 통해
              Cognito 인증(이메일 + Google OAuth)을 처리합니다. 백엔드는 단일
              Lambda에서 7개 API 라우트를 처리하고, API Gateway의 Cognito
              Authorizer가 JWT를 검증합니다. 모든 인프라는 Terraform으로
              관리됩니다.
            </SystemDesignDescription>
          </SystemDesign>
        </ProjectItem>
      </PortfolioSectionContent>
    </PortfolioSection>
  );
};

export default ProjectSection;
