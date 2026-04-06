"use client";

import useQueryGetHaruzogakComments from "@/apis/getHaruzogakComments";
import Haruzogak from "@/assets/images/haruzogak-main.png";
import HorizontalLine from "@/components/HorizontalLine";
import Image from "next/image";
import CommentHaruzogakForm from "./components/CommentHaruzogakForm";
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
        <CommentHaruzogakForm />
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
