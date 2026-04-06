import BASE_API_URL from "@/constants/api";
import { DeleteCommentRequest } from "@/types/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchDeleteComment = async (requestData: DeleteCommentRequest) => {
  const res = await fetch(`${BASE_API_URL}/api/comments`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  });

  if (!res.ok) {
    throw new Error("Failed to delete comment");
  }
  return res.json();
};

export default function useMutationDeleteComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestData: DeleteCommentRequest) =>
      fetchDeleteComment(requestData),
    onSuccess: () => {
      // 성공 시 수행할 작업
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
  });
}
