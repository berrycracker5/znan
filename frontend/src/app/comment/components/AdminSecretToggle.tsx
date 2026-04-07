"use client";

import BASE_API_URL from "@/constants/api";
import { useAdminStore } from "@/stores/useAdminStore";
import { Button } from "@/styles/components/ui/button";
import { Input } from "@/styles/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/components/ui/popover";
import { LockIcon, UnlockIcon } from "lucide-react";
import React, { useState } from "react";

const AdminSecretToggle: React.FC = () => {
  const { isAdmin, setAdmin, clearAdmin } = useAdminStore();
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const res = await fetch(`${BASE_API_URL}/api/comments/secret`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminPassword: password }),
      });
      if (!res.ok) {
        setIsError(true);
        return;
      }
      setAdmin(password);
      setPassword("");
      setOpen(false);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isAdmin) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="cursor-pointer gap-1 text-xs"
        onClick={clearAdmin}
      >
        <UnlockIcon className="size-4" />
        비밀댓글 보는 중
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={(v) => { setOpen(v); if (!v) setIsError(false); }}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="cursor-pointer gap-1 text-xs"
        >
          <LockIcon className="size-4" />
          비밀댓글 보기
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-2">
          <p className="text-sm font-medium">관리자 비밀번호</p>
          {isError && (
            <p className="text-destructive text-xs">
              비밀번호가 올바르지 않습니다.
            </p>
          )}
          <Input
            type="password"
            autoComplete="off"
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
          />
          <div className="flex justify-end">
            <Button
              size="sm"
              className="cursor-pointer"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "확인 중..." : "확인"}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AdminSecretToggle;
