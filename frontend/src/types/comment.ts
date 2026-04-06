export interface CreateCommentRequest {
  author: string;
  commentPassword: string;
  isSecret?: boolean;
  text: string;
}

export interface GetCommentsResponse {
  comments: CommentType[];
}

export interface CommentType {
  commentId: string;
  text: string;
  author: string;
  authorIp: string;
  commentPassword: string;
  date: string;
  isSecret?: boolean;
}

export interface DeleteCommentRequest {
  commentId: string;
  commentPassword: string;
}
