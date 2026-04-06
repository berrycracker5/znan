# 컴포넌트 인벤토리

## 애플리케이션 패키지
- `src/app/(portfolio)/` - 포트폴리오 메인 페이지 (Intro, AskMe, Experience, Projects)
- `src/app/comment/` - 일반 댓글 시스템
- `src/app/comment/haruzogak/` - 하루조각 회고 댓글 시스템

## 공유 패키지
- `src/apis/` - API 통신 훅 (React Query 기반)
- `src/components/` - 공통 UI 컴포넌트 (Header, Sidebar, Footer 등)
- `src/components/banners/` - 기술 스택 배너 컴포넌트 (18개)
- `src/constants/` - 상수 정의 (API Base URL)
- `src/hooks/` - 커스텀 훅 (스크롤 감지, 모바일 감지)
- `src/stores/` - Zustand 상태 저장소
- `src/types/` - TypeScript 타입 정의
- `src/styles/` - shadcn/ui 컴포넌트 + 유틸리티

## UI 프리미티브 패키지 (shadcn/ui)
- `src/styles/components/ui/` - 14개 UI 컴포넌트
  - alert-dialog, badge, button, checkbox, form, input, label, popover, separator, sheet, sidebar, skeleton, switch, tooltip

## 인프라 패키지
- 없음 (프론트엔드 전용 레포지토리, 백엔드는 별도 관리)

## 테스트 패키지
- 없음 (테스트 코드 미존재)

## 총 카운트
- **총 패키지**: 10
- **애플리케이션**: 3 (portfolio, comment, haruzogak)
- **인프라**: 0
- **공유**: 7 (apis, components, constants, hooks, stores, types, styles)
- **테스트**: 0
