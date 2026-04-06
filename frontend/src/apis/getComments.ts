import BASE_API_URL from "@/constants/api";
import { GetCommentsResponse } from "@/types/comment";
import { useQuery } from "@tanstack/react-query";

const fetchGetComments = async (): Promise<GetCommentsResponse> => {
  const res = await fetch(`${BASE_API_URL}/api/comments`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function useQueryGetComments() {
  return useQuery({
    queryKey: ["comments"],
    queryFn: fetchGetComments,
  });
}
