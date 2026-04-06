"use client";

import useQueryGetComments from "@/apis/getComments";
import useQueryGetSecretComments from "@/apis/getSecretComments";
import HorizontalLine from "@/components/HorizontalLine";
import PageTitle from "@/components/PageTitle";
import { useAdminStore } from "@/stores/useAdminStore";
import AdminSecretToggle from "./components/AdminSecretToggle";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import CommentListContainer from "./components/CommentListContainer";
import CommentListSkeleton from "./components/CommentListSkeleton";
import CommentRegistContainer from "./components/CommentRegistContainer";

const Comment = () => {
  const { data: commentListData, isPending } = useQueryGetComments();
  const { isAdmin, adminPassword } = useAdminStore();
  const {
    data: secretData,
    isPending: isSecretPending,
    isError: isSecretError,
  } = useQueryGetSecretComments(adminPassword);

  const displayData = isAdmin && secretData ? secretData : commentListData;
  const isLoading = isAdmin ? isSecretPending : isPending;

  return (
    <>
      <div className="flex items-center justify-between">
        <PageTitle>Comment</PageTitle>
        <AdminSecretToggle isSecretError={isSecretError} />
      </div>

      <CommentRegistContainer>
        <CommentForm />
      </CommentRegistContainer>

      <HorizontalLine />

      <CommentListContainer>
        {isLoading ? (
          <CommentListSkeleton />
        ) : (
          <CommentList commentListData={displayData} />
        )}
      </CommentListContainer>
    </>
  );
};

export default Comment;
