import useMutationDeleteComment from "@/apis/deleteComment";
import useMutationDeleteHaruzogakComment from "@/apis/deleteHaruzogakComment";
import { Button } from "@/styles/components/ui/button";
import { Input } from "@/styles/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/components/ui/popover";
import clsx from "clsx";
import { CircleXIcon } from "lucide-react";
import React, { useState } from "react";

interface CommentDeletePopoverProps {
  commentId: string;
  className?: string;
}

const CommentDeleteHaruzogakPopover: React.FC<CommentDeletePopoverProps> = ({
  commentId,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const [commentPassword, setCommentPassword] = useState<string>("");
  const {
    mutate: deleteCommentMutate,
    isSuccess,
    isPending,
    isError,
  } = useMutationDeleteHaruzogakComment();

  const handleClickDelete = () => {
    deleteCommentMutate({ commentId, commentPassword });
    if (isSuccess) setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <CircleXIcon
          className={clsx(
            "ml-2 size-5 cursor-pointer md:ml-6 lg:ml-8",
            className
          )}
        />
      </PopoverTrigger>
      <PopoverContent className="w-80 -translate-x-6 sm:-translate-x-12 md:-translate-x-20">
        <div className="space-y-2">
          <h4 className="leading-none font-medium">비밀번호</h4>

          {isError ? (
            <p className="text-destructive text-sm">비밀번호를 확인해주세요.</p>
          ) : (
            <p className="text-muted-foreground text-sm">
              댓글 작성시 입력한 비밀번호를 입력해주세요
            </p>
          )}
          <form>
            <Input
              type="password"
              autoComplete="off"
              value={commentPassword}
              onChange={(e) => setCommentPassword(e.target.value)}
            />
          </form>
          <div className="flex justify-end">
            {isPending ? (
              <Button disabled className="cursor-not-allowed">
                삭제 중...
              </Button>
            ) : (
              <Button className="cursor-pointer" onClick={handleClickDelete}>
                삭제
              </Button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CommentDeleteHaruzogakPopover;
