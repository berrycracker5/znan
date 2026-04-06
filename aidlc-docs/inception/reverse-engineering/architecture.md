# Architecture

## 전체 아키텍처

```
[사용자] → [Vercel CDN] → [Next.js Frontend]
                              ↓ (fetch API)
              [API Gateway] → [AWS Lambda] → [Fastify] → [DynamoDB]
```

## Frontend 구조 (Next.js App Router)

```
frontend/src/
├── app/
│   ├── (portfolio)/          # 포트폴리오 메인 페이지
│   │   ├── components/       # 섹션 공통 컴포넌트
│   │   ├── sections/         # 각 섹션 (Intro, Experience, Project, AskMe)
│   │   └── page.tsx
│   ├── comment/              # 댓글 페이지
│   │   ├── components/       # 댓글 공통 컴포넌트
│   │   ├── haruzogak/        # 하루조각 댓글
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx            # 루트 레이아웃 (Sidebar, Header)
│   ├── MainLayoutWrapper.tsx
│   └── TanQueryProviders.tsx
├── apis/                     # TanStack Query 커스텀 훅
├── assets/icons/             # SVG 아이콘
├── components/               # 공통 컴포넌트
├── constants/                # API URL 등 상수
├── hooks/                    # 커스텀 훅
├── stores/                   # Zustand 스토어
├── styles/                   # shadcn/ui 컴포넌트
└── types/                    # TypeScript 타입 정의
```

## Backend 구조 (Fastify)

```
backend/src/
├── index.js                  # Fastify 서버 초기화 + CORS
├── lambda.js                 # AWS Lambda 핸들러
├── plugins/
│   └── DynamoDB.js           # DynamoDB 클라이언트
├── routes/
│   ├── ApiRoute.js           # /api/* 라우트
│   └── DefaultRoute.js       # 기본 라우트
└── services/
    ├── CommentService.js     # 포트폴리오 댓글 CRUD
    ├── HaruzogakService.js   # 하루조각 댓글 CRUD
    └── VisitorService.js     # 방문자 추적
```

## DynamoDB 테이블 설계 (단일 테이블)

테이블명: `ZnanTable`

| Entity | PK | SK | 주요 속성 |
|--------|----|----|----------|
| Comment | `COMMENT` | `COMMENT#{isoTime}#{uuid}` | text, author, authorIp, commentPassword, date, isSecret |
| Haruzogak | `HARUZOGAK` | `HARUZOGAK#{isoTime}#{uuid}` | text, author, authorIp, commentPassword, date, isSecret |
| Visitor | `VISIT#{date}` | `VISITOR#{ip}` | timestamp, ip_address, user_agent, page_path, referrer |
| VisitorCount | `VISITOR_COUNT` | `TOTAL` | totalCount |

## 배포 파이프라인

### Frontend (Vercel)
- Git push → Vercel 자동 빌드 & 배포
- 도메인: znan.site, www.znan.site

### Backend (AWS Lambda)
- Git push (main) → GitHub Actions
- npm ci → zip 패키징 → aws lambda update-function-code
- 함수명: znan-was-lambda
- 리전: ap-northeast-2
