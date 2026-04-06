import { useIsMobile } from "@/hooks/useIsMobile";
import { GetCommentsResponse } from "@/types/comment";
import React from "react";
import CommentDeletePopover from "./CommentDeletePopover";

type CommentListProps = {
  commentListData?: GetCommentsResponse;
  isMobile?: boolean;
};

const authorAndId = (author: string, authorId: string, isSecret?: boolean) => {
  return (
    <p className="text-base font-semibold">
      {isSecret && <span className="mr-1">🔒</span>}
      {author || "익명"}
      <span className="ml-2 text-xs font-light dark:text-gray-300">
        {`(${authorId})`}
      </span>
    </p>
  );
};

const commentDate = (date: string) => {
  return <p className="font-base text-sm dark:text-gray-300">{date}</p>;
};

const CommentListMobile: React.FC<CommentListProps> = ({ commentListData }) => {
  return (
    <>
      {commentListData?.comments.map((comment) => (
        <div
          key={comment.commentId}
          className="mb-8 flex w-full flex-col gap-y-1"
        >
          <div className="flex flex-row items-end justify-between">
            {authorAndId(comment.author, comment.authorIp, comment.isSecret)}
            <CommentDeletePopover commentId={comment.commentId} />
          </div>
          <p className="pr-2">{comment.text}</p>
          {commentDate(comment.date)}
        </div>
      ))}
    </>
  );
};

const CommentListDesktop: React.FC<CommentListProps> = ({
  commentListData,
}) => {
  return (
    <>
      {commentListData?.comments.map((comment) => (
        <div key={comment.commentId} className="mb-10 flex w-full flex-col">
          <div className="flex flex-row items-start justify-center">
            <div className="flex w-40 flex-col gap-y-2">
              {authorAndId(comment.author, comment.authorIp, comment.isSecret)}
              {commentDate(comment.date)}
            </div>
            <p className="flex-1 pt-0.5">{comment.text}</p>
            <CommentDeletePopover commentId={comment.commentId} />
          </div>
        </div>
      ))}
    </>
  );
};

const CommentList: React.FC<CommentListProps> = ({ commentListData }) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <CommentListMobile commentListData={commentListData} />
      ) : (
        <CommentListDesktop commentListData={commentListData} />
      )}
    </>
  );
};

export default CommentList;
