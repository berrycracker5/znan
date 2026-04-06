import BASE_API_URL from "@/constants/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetchAddVisitor = async () => {
  const res = await fetch(`${BASE_API_URL}/api/visitors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}), // 필요한 경우 요청 본문에 데이터 추가
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json(); // 예: { message: "hello" }
};

export default function useMutationAddVisitor() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchAddVisitor,
    onSuccess: () => {
      // 성공 시 수행할 작업
      queryClient.invalidateQueries({
        queryKey: ["visitorCount"],
      }); // 방문자 수 새로고침
    },
    onError: () => {
      // 실패 시 수행할 작업
      console.error("Error adding visitor");
    },
  });
}
