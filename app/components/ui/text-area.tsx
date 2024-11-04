import { cn } from "@/app/lib/utils";

export default function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={cn(
        `w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl 
        border border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary`,
        props.className
      )}
    />
  );
}
