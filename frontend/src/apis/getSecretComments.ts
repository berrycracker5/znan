import BASE_API_URL from "@/constants/api";
import { GetCommentsResponse } from "@/types/comment";
import { useQuery } from "@tanstack/react-query";

const fetchGetSecretComments = async (
  adminPassword: string
): Promise<GetCommentsResponse> => {
  const res = await fetch(`${BASE_API_URL}/api/comments/secret`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adminPassword }),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch secret comments");
  }
  return res.json();
};

export default function useQueryGetSecretComments(
  adminPassword: string | null
) {
  return useQuery({
    queryKey: ["secretComments", adminPassword],
    queryFn: () => fetchGetSecretComments(adminPassword!),
    enabled: !!adminPassword,
  });
}
