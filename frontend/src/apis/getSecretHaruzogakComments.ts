import BASE_API_URL from "@/constants/api";
import { GetCommentsResponse } from "@/types/comment";
import { useMutation } from "@tanstack/react-query";

const fetchGetSecretHaruzogakComments = async (
  adminPassword: string
): Promise<GetCommentsResponse> => {
  const res = await fetch(`${BASE_API_URL}/api/haruzogak/comments/secret`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ adminPassword }),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch secret comments");
  }
  return res.json();
};

export default function useMutationGetSecretHaruzogakComments() {
  return useMutation({
    mutationFn: (adminPassword: string) =>
      fetchGetSecretHaruzogakComments(adminPassword),
  });
}
