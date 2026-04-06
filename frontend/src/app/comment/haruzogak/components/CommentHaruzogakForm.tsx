"use client";

import useMutationCreateHaruzogakComment from "@/apis/createHaruogakComment";
import { Checkbox } from "@/styles/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/styles/components/ui/form";
import { Input } from "@/styles/components/ui/input";
import { CreateCommentRequest } from "@/types/comment";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CommentRegistDialog from "../../components/CommentRegistDialog";
import CommentRegistInfoWrapper from "../../components/CommentRegistInfoWrapper";

const CommentFormSchema = z.object({
  author: z.string().min(0).max(20, {
    message: "20글자 이하로 입력해주세요.",
  }),
  commentPassword: z
    .string()
    .min(4, {
      message: "4글자 이상 입력해주세요.",
    })
    .max(20, {
      message: "20글자 이하로 입력해주세요.",
    }),
  isSecret: z.boolean().optional(),
  text: z
    .string()
    .min(1, {
      message: "내용을 입력해주세요.",
    })
    .max(500, {
      message: "500글자 이하로 입력해주세요.",
    }),
});

export default function CommentHaruzogakForm() {
  const { mutate: createHaruzogakCommentMutate } =
    useMutationCreateHaruzogakComment();
  const form = useForm<z.infer<typeof CommentFormSchema>>({
    resolver: zodResolver(CommentFormSchema),
    defaultValues: {
      author: "",
      commentPassword: "",
      isSecret: false,
      text: "",
    },
  });

  function onSubmit(data: z.infer<typeof CommentFormSchema>) {
    if (!data.author) {
      data.author = "익명";
    }

    const { author, commentPassword, isSecret, text } = data;
    const requestData: CreateCommentRequest = {
      author,
      commentPassword,
      isSecret,
      text,
    };

    createHaruzogakCommentMutate(requestData);
    form.reset();
  }

  return (
    <Form {...form}>
      <form className="flex w-full flex-col items-center gap-y-2 md:flex-row md:gap-x-4">
        <CommentRegistInfoWrapper>
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="익명"
                    autoComplete="username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="commentPassword"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="****"
                    type="password"
                    autoComplete="current-password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isSecret"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-center">
                <FormControl>
                  <Checkbox
                    className="cursor-pointer"
                    checked={field.value}
                    onCheckedChange={field.onChange as (value: boolean) => void}
                  />
                </FormControl>
                <FormLabel className="cursor-pointer">비밀댓글</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </CommentRegistInfoWrapper>
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="w-full md:flex-1">
              <FormControl>
                <Input
                  placeholder="댓글을 입력해주세요"
                  {...field}
                  className="h-24"
                  type="textarea"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-end md:w-fit">
          <CommentRegistDialog onClickRegist={form.handleSubmit(onSubmit)} />
        </div>
      </form>
    </Form>
  );
}
