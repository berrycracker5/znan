"use client";

import useQueryGetComments from "@/apis/getComments";
import useMutationGetSecretComments from "@/apis/getSecretComments";
import HorizontalLine from "@/components/HorizontalLine";
import PageTitle from "@/components/PageTitle";
import { GetCommentsResponse } from "@/types/comment";
import { useState } from "react";
import AdminSecretToggle from "./components/AdminSecretToggle";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import CommentListContainer from "./components/CommentListContainer";
import CommentListSkeleton from "./components/CommentListSkeleton";
import CommentRegistContainer from "./components/CommentRegistContainer";

const Comment = () => {
  const { data: commentListData, isPending } = useQueryGetComments();
  const [isAdmin, setIsAdmin] = useState(false);
  const [secretData, setSecretData] = useState<GetCommentsResponse | undefined>(
    undefined
  );
  const {
    mutate: getSecretComments,
    isPending: isSecretPending,
    isError: isSecretError,
    reset: resetSecretError,
  } = useMutationGetSecretComments();

  const handleAdminLogin = (password: string) => {
    getSecretComments(password, {
      onSuccess: (data) => {
        setSecretData(data);
        setIsAdmin(true);
      },
    });
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
    setSecretData(undefined);
    resetSecretError();
  };

  const displayData = isAdmin ? secretData : commentListData;

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle>Comment</PageTitle>
        <AdminSecretToggle
          isAdmin={isAdmin}
          onAdminLogin={handleAdminLogin}
          onAdminLogout={handleAdminLogout}
          isLoading={isSecretPending}
          isError={isSecretError}
        />
      </div>

      <CommentRegistContainer>
        <CommentForm />
      </CommentRegistContainer>

      <HorizontalLine />

      <CommentListContainer>
        {isPending ? (
          <CommentListSkeleton />
        ) : (
          <CommentList commentListData={displayData} />
        )}
      </CommentListContainer>
    </>
  );
};

export default Comment;
