# 코드 구조

## 빌드 시스템
- **타입**: pnpm + Next.js
- **설정 파일**:
  - `package.json` - 의존성 및 스크립트 정의
  - `pnpm-lock.yaml` - 의존성 잠금 파일
  - `next.config.js` - Next.js 설정 (SVG 로더 커스텀)
  - `postcss.config.mjs` - PostCSS + Tailwind CSS v4
  - `.eslintrc.json` - ESLint (next/core-web-vitals + typescript)
  - `.prettierrc` - Prettier (tailwindcss 플러그인 포함)
  - `next-sitemap.config.js` - 사이트맵 생성 설정

## 주요 모듈 계층

```
src/
+-- app/                    # Next.js App Router 페이지
|   +-- (portfolio)/        # 포트폴리오 메인 (Route Group)
|   |   +-- components/     # 포트폴리오 전용 레이아웃 컴포넌트
|   |   +-- sections/       # 포트폴리오 섹션별 컴포넌트
|   +-- comment/            # 댓글 페이지
|   |   +-- components/     # 댓글 공통 컴포넌트
|   |   +-- haruzogak/      # 하루조각 회고 전용 페이지
|   +-- layout.tsx          # 루트 레이아웃
|   +-- globals.css         # 글로벌 스타일 + Tailwind 테마
+-- apis/                   # API 통신 훅 (React Query)
+-- assets/                 # 정적 리소스
|   +-- icons/              # SVG 아이콘
|   +-- images/             # 이미지 파일
+-- components/             # 공통 컴포넌트
|   +-- banners/            # 기술 스택 배너 컴포넌트
+-- constants/              # 상수 (API URL)
+-- hooks/                  # 커스텀 훅
+-- stores/                 # Zustand 상태 저장소
+-- styles/                 # shadcn/ui 컴포넌트 + 유틸리티
|   +-- components/ui/      # UI 프리미티브
|   +-- hooks/              # UI 관련 훅
|   +-- lib/                # 유틸리티 (cn 함수)
+-- types/                  # TypeScript 타입 정의
```

## 기존 파일 인벤토리

### 페이지 및 레이아웃
- `src/app/layout.tsx` - 루트 레이아웃 (메타데이터, Provider, Sidebar, Header)
- `src/app/MainLayoutWrapper.tsx` - 메인 콘텐츠 래퍼 (방문자 추가, 스크롤 감지)
- `src/app/TanQueryProviders.tsx` - React Query Provider
- `src/app/globals.css` - Tailwind v4 테마, 다크모드, 커스텀 애니메이션
- `src/app/(portfolio)/page.tsx` - 포트폴리오 메인 페이지
- `src/app/comment/layout.tsx` - 댓글 페이지 레이아웃
- `src/app/comment/page.tsx` - 일반 댓글 페이지
- `src/app/comment/haruzogak/page.tsx` - 하루조각 회고 페이지 (서버 컴포넌트 + 메타데이터)
- `src/app/comment/haruzogak/ClientView.tsx` - 하루조각 클라이언트 뷰

### 포트폴리오 섹션 컴포넌트
- `src/app/(portfolio)/components/PortfolioSection.tsx` - 섹션 래퍼 (forwardRef)
- `src/app/(portfolio)/components/PortfolioSectionContent.tsx` - 섹션 콘텐츠 래퍼
- `src/app/(portfolio)/components/PortfolioSectionTitle.tsx` - 섹션 제목
- `src/app/(portfolio)/sections/IntroSection.tsx` - 인트로 (프로필, 인사말)
- `src/app/(portfolio)/sections/AskMeSection.tsx` - Q&A 섹션
- `src/app/(portfolio)/sections/AskMeItem.tsx` - 클릭 시 펼쳐지는 Q&A 아이템
- `src/app/(portfolio)/sections/MorningRoutinePopover.tsx` - 모닝루틴 팝오버
- `src/app/(portfolio)/sections/ExperienceSection.tsx` - 경력 타임라인
- `src/app/(portfolio)/sections/ExperienceItem.tsx` - 경력 아이템 (메인)
- `src/app/(portfolio)/sections/ExperienceItemSub.tsx` - 경력 아이템 (서브)
- `src/app/(portfolio)/sections/ExperienceItemCotentText.tsx` - 경력 텍스트
- `src/app/(portfolio)/sections/ProjectSection.tsx` - 프로젝트 쇼케이스
- `src/app/(portfolio)/sections/ProjectItem.tsx` - 프로젝트 아이템
- `src/app/(portfolio)/sections/ProjectBadge.tsx` - 기술 스택 뱃지
- `src/app/(portfolio)/sections/SystemDesign.tsx` - 시스템 디자인 래퍼
- `src/app/(portfolio)/sections/SystemDesignContent.tsx` - 시스템 디자인 콘텐츠
- `src/app/(portfolio)/sections/SystemDesignDescription.tsx` - 시스템 디자인 설명
- `src/app/(portfolio)/sections/SystemDesignTitle.tsx` - 시스템 디자인 제목

### 댓글 컴포넌트
- `src/app/comment/components/CommentForm.tsx` - 댓글 작성 폼 (Zod 검증)
- `src/app/comment/components/CommentList.tsx` - 댓글 목록 (반응형)
- `src/app/comment/components/CommentDeletePopover.tsx` - 댓글 삭제 팝오버
- `src/app/comment/components/CommentListContainer.tsx` - 댓글 목록 컨테이너
- `src/app/comment/components/CommentListSkeleton.tsx` - 로딩 스켈레톤
- `src/app/comment/components/CommentRegistContainer.tsx` - 등록 컨테이너
- `src/app/comment/components/CommentRegistDialog.tsx` - 등록 확인 다이얼로그
- `src/app/comment/components/CommentRegistInfoWrapper.tsx` - 등록 정보 래퍼
- `src/app/comment/haruzogak/components/CommentHaruzogakForm.tsx` - 하루조각 댓글 폼
- `src/app/comment/haruzogak/components/CommentHaruzogakList.tsx` - 하루조각 댓글 목록
- `src/app/comment/haruzogak/components/CommentDeleteHaruzogakPopover.tsx` - 하루조각 삭제

### 공통 컴포넌트
- `src/components/MainHeader.tsx` - 상단 헤더 (ZNAN 로고, 다크모드 토글)
- `src/components/MainSidebar.tsx` - 사이드바 (메뉴, 프로젝트, 연락처, 방문자 수)
- `src/components/MainFooter.tsx` - 하단 푸터
- `src/components/DarkModeToggle.tsx` - 다크모드 스위치
- `src/components/PageContainer.tsx` - 페이지 컨테이너
- `src/components/PageTitle.tsx` - 페이지 제목
- `src/components/HorizontalLine.tsx` - 구분선
- `src/components/banners/*.tsx` - 기술 스택 배너 (18개: AWS, React, Spring 등)

### API 훅
- `src/apis/addVisitor.ts` - 방문자 추가 mutation
- `src/apis/getVisitorCount.ts` - 방문자 수 조회 query
- `src/apis/createComment.ts` - 댓글 생성 mutation
- `src/apis/getComments.ts` - 댓글 목록 조회 query
- `src/apis/deleteComment.ts` - 댓글 삭제 mutation
- `src/apis/createHaruogakComment.ts` - 하루조각 댓글 생성 mutation
- `src/apis/getHaruzogakComments.ts` - 하루조각 댓글 조회 query
- `src/apis/deleteHaruzogakComment.ts` - 하루조각 댓글 삭제 mutation

### 상태 관리
- `src/stores/useHeaderStore.ts` - 헤더 표시/숨김 상태
- `src/stores/useSectionStore.ts` - 섹션 스크롤 참조

### 커스텀 훅
- `src/hooks/useHideHeaderOnScroll.ts` - 스크롤 시 헤더 숨김
- `src/hooks/useIsMobile.ts` - 모바일 감지 (640px)

### 타입
- `src/types/comment.ts` - 댓글 관련 타입 (CreateCommentRequest, GetCommentsResponse, CommentType, DeleteCommentRequest)

### UI 프리미티브 (shadcn/ui)
- `src/styles/components/ui/` - alert-dialog, badge, button, checkbox, form, input, label, popover, separator, sheet, sidebar, skeleton, switch, tooltip
- `src/styles/lib/utils.ts` - cn() 유틸리티
- `src/styles/hooks/use-sidebar-mobile-type.ts` - 사이드바 모바일 감지 (1024px)

## 디자인 패턴

### Container/Presentational 패턴
- **위치**: 댓글 시스템 전반
- **목적**: 데이터 로직과 UI 분리
- **구현**: CommentListContainer(래퍼) + CommentList(표시), CommentRegistContainer + CommentForm

### Custom Hook 패턴
- **위치**: `src/apis/`, `src/hooks/`
- **목적**: 로직 재사용 및 관심사 분리
- **구현**: React Query 기반 `useQuery`/`useMutation` 훅으로 API 통신 캡슐화

### Store 패턴 (Zustand)
- **위치**: `src/stores/`
- **목적**: 컴포넌트 간 상태 공유
- **구현**: useHeaderStore(헤더 상태), useSectionStore(스크롤 참조)

### Route Group 패턴
- **위치**: `src/app/(portfolio)/`
- **목적**: URL에 영향 없이 관련 파일 그룹화
- **구현**: Next.js App Router의 `(portfolio)` route group

## 주요 의존성

### @tanstack/react-query (v5.83.0)
- **버전**: 5.83.0
- **사용처**: 모든 API 훅
- **목적**: 서버 상태 관리, 캐싱, 자동 리페치

### zustand (v5.0.6)
- **버전**: 5.0.6
- **사용처**: useHeaderStore, useSectionStore
- **목적**: 경량 클라이언트 상태 관리

### zod (v4.0.5)
- **버전**: 4.0.5
- **사용처**: CommentForm, CommentHaruzogakForm
- **목적**: 폼 입력 검증 스키마

### react-hook-form (v7.60.0)
- **버전**: 7.60.0
- **사용처**: 댓글 폼
- **목적**: 폼 상태 관리 및 검증
