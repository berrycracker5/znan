import BASE_API_URL from "@/constants/api";
import { GetCommentsResponse } from "@/types/comment";
import { useQuery } from "@tanstack/react-query";

const fetchGetHaruzogakComments = async (): Promise<GetCommentsResponse> => {
  const res = await fetch(`${BASE_API_URL}/api/haruzogak/comments`, {
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

export default function useQueryGetHaruzogakComments() {
  return useQuery({
    queryKey: ["haruzogakComments"],
    queryFn: fetchGetHaruzogakComments,
  });
}
