# ZNAN - Portfolio & Blog

풀스택 개발자 박진완의 포트폴리오 웹사이트입니다.

## 프로젝트 구조

```
├── frontend/          # Next.js 프론트엔드 (Vercel 배포)
├── backend/           # Fastify 백엔드 (AWS Lambda 배포)
└── README.md
```

## 기술 스택

### Frontend
- Next.js 16 (App Router)
- React 19, TypeScript
- Tailwind CSS 4, Radix UI
- TanStack Query (서버 상태 관리)
- Zustand (클라이언트 상태 관리)
- React Hook Form + Zod (폼 검증)

### Backend
- Fastify 5 (Node.js)
- AWS Lambda + API Gateway
- DynamoDB (단일 테이블 설계)
- bcrypt (비밀번호 해싱)

### 인프라 & 배포
- Frontend: Vercel
- Backend: AWS Lambda (GitHub Actions CI/CD)
- Database: AWS DynamoDB
- CDN: AWS CloudFront

## 주요 기능

- 포트폴리오 (경력, 프로젝트, 시스템 설계)
- 방문자 카운터 (IP 기반 일별 추적)
- 댓글 시스템 (비밀번호 보호, 비밀 댓글)
- 하루조각 회고 댓글

## API 엔드포인트

| Method | Path | 설명 |
|--------|------|------|
| GET | `/api/visitors-count` | 방문자 수 조회 |
| POST | `/api/visitors` | 방문자 기록 |
| GET | `/api/comments` | 댓글 목록 조회 |
| POST | `/api/comments` | 댓글 작성 |
| DELETE | `/api/comments` | 댓글 삭제 |
| GET | `/api/haruzogak/comments` | 하루조각 댓글 조회 |
| POST | `/api/haruzogak/comments` | 하루조각 댓글 작성 |
| DELETE | `/api/haruzogak/comments` | 하루조각 댓글 삭제 |

## 로컬 개발

### Frontend
```bash
cd frontend
pnpm install
pnpm dev        # http://localhost:8080
```

### Backend
```bash
cd backend
npm install
npm run dev     # http://localhost:3000
```

## 환경 변수

### Backend (.env)
```
ZNAN_AWS_REGION=ap-northeast-2
ZNAN_AWS_ACCESS_KEY_ID=<your-key>
ZNAN_AWS_SECRET_ACCESS_KEY=<your-secret>
```
