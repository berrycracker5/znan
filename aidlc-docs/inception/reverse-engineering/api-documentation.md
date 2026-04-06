# API Documentation

Base URL: `https://lamn50rx46.execute-api.ap-northeast-2.amazonaws.com/prd`

## Visitors

### GET /api/visitors-count
방문자 수 조회 (오늘 + 전체)

**Response**
```json
{ "todayCount": 5, "totalCount": 120 }
```

### POST /api/visitors
방문자 기록 (IP 기반 일별 중복 방지)

**Response**
```json
{ "message": "Logged successfully" }
```

## Comments

### GET /api/comments
댓글 목록 조회 (비밀 댓글 제외, 최신순)

**Response**
```json
{
  "comments": [
    {
      "commentId": "uuid",
      "text": "댓글 내용",
      "author": "작성자",
      "authorIp": "123.***.***.456",
      "date": "26-04-06 12:00:00",
      "isSecret": false
    }
  ]
}
```

### POST /api/comments
댓글 작성

**Request Body**
```json
{
  "text": "댓글 내용",
  "author": "작성자",
  "commentPassword": "비밀번호",
  "isSecret": false
}
```

### DELETE /api/comments
댓글 삭제 (비밀번호 검증)

**Request Body**
```json
{
  "commentId": "uuid",
  "commentPassword": "비밀번호"
}
```

## Haruzogak Comments

### GET /api/haruzogak/comments
하루조각 댓글 조회 (비밀 댓글 제외, 최신순)

### POST /api/haruzogak/comments
하루조각 댓글 작성 (Comments와 동일한 Request Body)

### DELETE /api/haruzogak/comments
하루조각 댓글 삭제 (Comments와 동일한 Request Body)
