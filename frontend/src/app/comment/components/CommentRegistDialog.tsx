import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/styles/components/ui/alert-dialog";
import { Button } from "@/styles/components/ui/button";
import React from "react";

interface CommentRegistDialogProps
  extends React.ComponentProps<typeof AlertDialogAction> {
  onClickRegist: () => void;
}

export default function CommentRegistDialog({
  onClickRegist,
  ...props
}: CommentRegistDialogProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="cursor-pointer" variant="default" {...props}>
          등록
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>댓글을 등록하시겠습니까?</AlertDialogTitle>
          <AlertDialogDescription>
            비밀댓글은 저만 확인할 수 있습니다🤫
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">취소</AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer"
            onClick={() => {
              setOpen(false);
              setTimeout(() => {
                onClickRegist();
              }, 300);
            }}
          >
            등록
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
