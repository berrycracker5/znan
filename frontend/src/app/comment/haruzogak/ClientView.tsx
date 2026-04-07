"use client";

import useQueryGetHaruzogakComments from "@/apis/getHaruzogakComments";
import Haruzogak from "@/assets/images/haruzogak-main.png";
import HorizontalLine from "@/components/HorizontalLine";
import Image from "next/image";
import CommentHaruzogakList from "./components/CommentHaruzogakList";
import CommentListContainer from "../components/CommentListContainer";
import CommentListSkeleton from "../components/CommentListSkeleton";
import CommentRegistContainer from "../components/CommentRegistContainer";

const Comment = () => {
  const { data: commentListData, isPending } = useQueryGetHaruzogakComments();

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <Image
          src={Haruzogak}
          alt="haruzogak main"
          className="rounded-md dark:bg-gray-100"
        />
      </div>

      <CommentRegistContainer>
        <div className="flex w-full items-center justify-center rounded-md border border-dashed border-gray-300 py-6 text-sm text-gray-400 dark:border-gray-600 dark:text-gray-500">
          댓글 작성이 종료되었습니다 📝
        </div>
      </CommentRegistContainer>

      <HorizontalLine />

      <CommentListContainer>
        {isPending ? (
          <CommentListSkeleton />
        ) : (
          <CommentHaruzogakList commentListData={commentListData} />
        )}
      </CommentListContainer>
    </>
  );
};

export default Comment;
