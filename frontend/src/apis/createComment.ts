import BASE_API_URL from "@/constants/api";
import { CreateCommentRequest } from "@/types/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchCreateComment = async (requestData: CreateCommentRequest) => {
  const res = await fetch(`${BASE_API_URL}/api/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData), // 필요한 경우 요청 본문에 데이터 추가
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json(); // 예: { message: "hello" }
};

export default function useMutationCreateComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestData: CreateCommentRequest) =>
      fetchCreateComment(requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
      queryClient.invalidateQueries({
        queryKey: ["secretComments"],
      });
    },
    onError: () => {
      console.error("Error adding comment");
    },
  });
}
