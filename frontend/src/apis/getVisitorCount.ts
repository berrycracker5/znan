import BASE_API_URL from "@/constants/api";
import { useQuery } from "@tanstack/react-query";

const fetchGetVisitorCount = async () => {
  const res = await fetch(`${BASE_API_URL}/api/visitors-count`, {
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

export default function useQueryGetVisitorCount() {
  return useQuery({
    queryKey: ["visitorCount"],
    queryFn: fetchGetVisitorCount,
  });
}
