import { MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";

type SuggestedPromptProps = {
  prompt: string;
  onSelect: (prompt: string) => void;
};

export function SuggestedPrompt({ prompt, onSelect }: SuggestedPromptProps) {
  return (
    <Button
      type="button"
      variant="outline"
      className="h-auto justify-start gap-2 whitespace-normal px-3 py-2 text-left"
      onClick={() => onSelect(prompt)}
    >
      <MessageSquareText className="h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
      {prompt}
    </Button>
  );
}
