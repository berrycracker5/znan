import React from "react";
import clsx from "clsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/components/ui/popover";

interface TmiPopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  triggerText: string;
}

const MorningRoutinePopover: React.FC<TmiPopoverProps> = ({
  className,
  triggerText,
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <span
          className={clsx(
            "ml-1 cursor-pointer font-extrabold hover:underline hover:underline-offset-3",
            className
          )}
        >
          {triggerText}
        </span>
      </PopoverTrigger>
      <PopoverContent className="dark:bg-curious-blue-950 max-w-fit min-w-fit rounded-xl">
        <p>- 기상 후 내전근 스트레칭</p>
        <p>- 양치 후 물 마신 뒤 유산균 or 올리브오일 섭취</p>
        <p>- 전신 폼롤러 스트레칭</p>
        <p>- 구운 계란 2개와 두유 섭취</p>
        <p>- 샤워 후 하루 시작</p>
      </PopoverContent>
    </Popover>
  );
};

export default MorningRoutinePopover;
