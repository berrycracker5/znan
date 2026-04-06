import { useEffect, useState } from "react";
import { useHeaderStore } from "@/stores/useHeaderStore";

export function useHideHeaderOnScroll(
  ref: React.RefObject<HTMLElement | null>
) {
  const setHideHeader = useHeaderStore((state) => state.setHideHeader);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const currentTop = el.scrollTop;

      if (currentTop > lastScrollTop && currentTop > 50) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      setLastScrollTop(currentTop);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [ref, lastScrollTop, setHideHeader]);
}
