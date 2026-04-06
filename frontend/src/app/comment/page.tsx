"use client";

import useQueryGetComments from "@/apis/getComments";
import HorizontalLine from "@/components/HorizontalLine";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import CommentListContainer from "./components/CommentListContainer";
import CommentListSkeleton from "./components/CommentListSkeleton";
import CommentRegistContainer from "./components/CommentRegistContainer";
import PageTitle from "@/components/PageTitle";

const Comment = () => {
  const { data: commentListData, isPending } = useQueryGetComments();

  return (
    <>
      <PageTitle>Comment</PageTitle>

      <CommentRegistContainer>
        <CommentForm />
      </CommentRegistContainer>

      <HorizontalLine />

      <CommentListContainer>
        {isPending ? (
          <CommentListSkeleton />
        ) : (
          <CommentList commentListData={commentListData} />
        )}
      </CommentListContainer>
    </>
  );
};

export default Comment;
