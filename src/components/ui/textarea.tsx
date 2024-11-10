import * as React from "react";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const adjustHeight = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    };

    useEffect(() => {
      adjustHeight();
      // This will make it run after the event loop
      const timer = setTimeout(adjustHeight, 0);
      return () => clearTimeout(timer);
    }, []);

    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full overflow-hidden resize-none rounded-md border border-slate-200 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
        ref={(element) => {
          // Handle both refs
          textareaRef.current = element;
          if (typeof ref === "function") {
            ref(element);
          } else if (ref) {
            ref.current = element;
          }
        }}
        onInput={adjustHeight}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
