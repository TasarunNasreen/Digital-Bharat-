import { Bot, UserCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ChatRole = "assistant" | "user";

type ChatMessageProps = {
  role: ChatRole;
  content: string;
};

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={cn("flex gap-3", isUser && "justify-end")}>
      {!isUser ? (
        <div className="mt-1 rounded-lg bg-blue-50 p-2 text-blue-700">
          <Bot className="h-4 w-4" aria-hidden="true" />
        </div>
      ) : null}
      <div
        className={cn(
          "max-w-[82%] rounded-lg px-4 py-3 text-sm leading-6",
          isUser
            ? "bg-blue-700 text-white"
            : "border bg-white text-slate-600 shadow-sm"
        )}
      >
        {content}
      </div>
      {isUser ? (
        <div className="mt-1 rounded-lg bg-slate-100 p-2 text-slate-600">
          <UserCircle2 className="h-4 w-4" aria-hidden="true" />
        </div>
      ) : null}
    </div>
  );
}
