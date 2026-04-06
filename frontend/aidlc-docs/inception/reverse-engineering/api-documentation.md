# API 문서

## REST API

Base URL: `https://lamn50rx46.execute-api.ap-northeast-2.amazonaws.com/prd`

### 방문자 추가
- **Method**: POST
- **Path**: `/api/visitors`
- **목적**: 방문자 수 증가 (페이지 로드 시 자동 호출)
- **Request**: `{}` (빈 JSON body)
- **Response**: `{ message: string }`
- **React Query Key**: `visitorCount` (성공 시 무효화)

### 방문자 수 조회
- **Method**: GET
- **Path**: `/api/visitors-count`
- **목적**: 오늘/전체 방문자 수 조회
- **Request**: 없음
- **Response**: `{ todayCount: number, totalCount: number }`
- **React Query Key**: `["visitorCount"]`

### 댓글 목록 조회
- **Method**: GET
- **Path**: `/api/comments`
- **목적**: 일반 댓글 목록 조회
- **Request**: 없음
- **Response**: `GetCommentsResponse`
  ```typescript
  {
    comments: Array<{
      commentId: string;
      text: string;
      author: string;
      authorIp: string;
      commentPassword: string;
      date: string;
      isSecret?: boolean;
    }>
  }
  ```
- **React Query Key**: `["comments"]`

### 댓글 작성
- **Method**: POST
- **Path**: `/api/comments`
- **목적**: 새 댓글 등록
- **Request**: `CreateCommentRequest`
  ```typescript
  {
    author: string;        // 작성자 (빈 값이면 "익명")
    commentPassword: string; // 삭제용 비밀번호 (4~20자)
    isSecret?: boolean;    // 비밀댓글 여부
    text: string;          // 댓글 내용 (1~500자)
  }
  ```
- **Response**: JSON
- **React Query**: 성공 시 `["comments"]` 무효화

### 댓글 삭제
- **Method**: DELETE
- **Path**: `/api/comments`
- **목적**: 비밀번호 인증 후 댓글 삭제
- **Request**: `DeleteCommentRequest`
  ```typescript
  {
    commentId: string;
    commentPassword: string;
  }
  ```
- **Response**: JSON
- **React Query**: 성공 시 `["comments"]` 무효화

### 하루조각 댓글 목록 조회
- **Method**: GET
- **Path**: `/api/haruzogak/comments`
- **목적**: 하루조각 회고 댓글 목록 조회
- **Response**: `GetCommentsResponse` (동일 구조)
- **React Query Key**: `["haruzogakComments"]`

### 하루조각 댓글 작성
- **Method**: POST
- **Path**: `/api/haruzogak/comments`
- **목적**: 하루조각 회고 댓글 등록
- **Request**: `CreateCommentRequest` (동일 구조)
- **React Query**: 성공 시 `["haruzogakComments"]` 무효화

### 하루조각 댓글 삭제
- **Method**: DELETE
- **Path**: `/api/haruzogak/comments`
- **목적**: 하루조각 댓글 삭제
- **Request**: `DeleteCommentRequest` (동일 구조)
- **React Query**: 성공 시 `["haruzogakComments"]` 무효화

## 내부 API (React Query 훅)

### useMutationAddVisitor
- **파일**: `src/apis/addVisitor.ts`
- **타입**: Mutation
- **성공 시**: `visitorCount` 쿼리 무효화

### useQueryGetVisitorCount
- **파일**: `src/apis/getVisitorCount.ts`
- **타입**: Query
- **반환**: `{ todayCount, totalCount }`

### useMutationCreateComment
- **파일**: `src/apis/createComment.ts`
- **타입**: Mutation
- **성공 시**: `comments` 쿼리 무효화

### useQueryGetComments
- **파일**: `src/apis/getComments.ts`
- **타입**: Query
- **반환**: `GetCommentsResponse`

### useMutationDeleteComment
- **파일**: `src/apis/deleteComment.ts`
- **타입**: Mutation
- **성공 시**: `comments` 쿼리 무효화

### useMutationCreateHaruzogakComment
- **파일**: `src/apis/createHaruogakComment.ts`
- **타입**: Mutation
- **성공 시**: `haruzogakComments` 쿼리 무효화

### useQueryGetHaruzogakComments
- **파일**: `src/apis/getHaruzogakComments.ts`
- **타입**: Query
- **반환**: `GetCommentsResponse`

### useMutationDeleteHaruzogakComment
- **파일**: `src/apis/deleteHaruzogakComment.ts`
- **타입**: Mutation
- **성공 시**: `haruzogakComments` 쿼리 무효화

## 데이터 모델

### CommentType
- **필드**:
  - `commentId: string` - 댓글 고유 ID
  - `text: string` - 댓글 내용
  - `author: string` - 작성자명
  - `authorIp: string` - 작성자 IP (서버에서 설정)
  - `commentPassword: string` - 삭제용 비밀번호
  - `date: string` - 작성 날짜
  - `isSecret?: boolean` - 비밀댓글 여부
- **관계**: 독립 엔티티 (댓글 간 관계 없음)
- **검증**: Zod 스키마로 클라이언트 사이드 검증
  - author: 0~20자
  - commentPassword: 4~20자
  - text: 1~500자
