import BASE_API_URL from "@/constants/api";
import { DeleteCommentRequest } from "@/types/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchDeleteHaruzogakComment = async (
  requestData: DeleteCommentRequest
) => {
  const res = await fetch(`${BASE_API_URL}/api/haruzogak/comments`, {
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

export default function useMutationDeleteHaruzogakComment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestData: DeleteCommentRequest) =>
      fetchDeleteHaruzogakComment(requestData),
    onSuccess: () => {
      // 성공 시 수행할 작업
      queryClient.invalidateQueries({
        queryKey: ["haruzogakComments"],
      });
    },
  });
}
