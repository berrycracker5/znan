# 코드 품질 평가

## 테스트 커버리지
- **전체**: 없음 (테스트 코드 미존재)
- **단위 테스트**: 없음
- **통합 테스트**: 없음
- **E2E 테스트**: 없음

## 코드 품질 지표

### 린팅
- **설정됨**: ESLint (next/core-web-vitals + next/typescript)
- **React Query 플러그인**: @tanstack/eslint-plugin-query 설정됨
- **상태**: 기본 Next.js 린트 규칙 적용

### 코드 스타일
- **일관성**: 높음
- **Prettier 설정**: 세미콜론, 더블쿼트, 탭 2칸, trailing comma (es5)
- **Tailwind 플러그인**: prettier-plugin-tailwindcss로 클래스 자동 정렬
- **EditorConfig**: 설정됨 (.editorconfig)

### 문서화
- **수준**: 낮음
- **코드 주석**: 한국어 주석 일부 존재 (주로 API 훅에서)
- **README**: 미확인
- **JSDoc**: 없음

## 기술 부채

### 댓글 컴포넌트 중복
- **위치**: `src/app/comment/` vs `src/app/comment/haruzogak/`
- **설명**: CommentForm/CommentList/CommentDeletePopover가 일반 댓글과 하루조각 댓글에서 거의 동일한 코드로 중복됨. API 엔드포인트만 다름.
- **영향**: 유지보수 시 두 곳 모두 수정 필요

### 비밀번호 평문 노출
- **위치**: `src/types/comment.ts` - `CommentType.commentPassword`
- **설명**: API 응답에 commentPassword가 포함되어 클라이언트로 전달됨 (백엔드 이슈)
- **영향**: 보안 취약점

### 다크모드 상태 비영속
- **위치**: `src/components/DarkModeToggle.tsx`
- **설명**: 다크모드 상태가 localStorage에 저장되지 않아 새로고침 시 초기화됨
- **영향**: UX 저하

### 하드코딩된 API URL
- **위치**: `src/constants/api.ts`
- **설명**: API URL이 상수로 하드코딩됨. 환경변수 사용 권장
- **영향**: 환경별 배포 시 코드 수정 필요

### 미사용 import
- **위치**: `src/app/comment/haruzogak/components/CommentDeleteHaruzogakPopover.tsx`
- **설명**: `useMutationDeleteComment` import 후 미사용
- **영향**: 번들 사이즈 미미한 영향

## 패턴 및 안티패턴

### 좋은 패턴
- React Query를 활용한 서버 상태 관리 (캐시 무효화 전략 적절)
- Zod + React Hook Form 조합으로 타입 안전한 폼 검증
- shadcn/ui 기반 일관된 UI 컴포넌트 시스템
- Next.js App Router의 Route Group 활용
- forwardRef를 활용한 유연한 컴포넌트 설계 (PortfolioSection)
- Zustand로 경량 상태 관리 (과도한 Context 사용 회피)
- 반응형 디자인 (모바일/데스크톱 분기 렌더링)

### 안티패턴
- 댓글 시스템의 코드 중복 (DRY 원칙 위반)
- 에러 처리가 console.error 수준에 머무름 (사용자 피드백 부족)
- 다크모드 토글이 CSS 클래스 기반이라 FOUC(Flash of Unstyled Content) 가능성
- CommentDeletePopover에서 isSuccess 체크가 mutation 호출 직후에 동기적으로 이루어져 실제 성공 여부 반영 안 됨
