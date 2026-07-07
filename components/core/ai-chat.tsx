"use client";

import { Send } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { ChatMessage, type ChatRole } from "@/components/core/chat-message";
import { SuggestedPrompt } from "@/components/core/suggested-prompt";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getMockAIResponse, suggestedPrompts } from "@/lib/mockAI";

type Message = {
  id: string;
  role: ChatRole;
  content: string;
};

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Namaste. I can help with services, documents, complaints, and scheme guidance using mock civic data."
  }
];

export function AIChat() {
  const [messages, setMessages] = useLocalStorage<Message[]>(
    "digital-bharat-chat-history",
    initialMessages
  );
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  function sendMessage(content: string) {
    const trimmedContent = content.trim();

    if (!trimmedContent || isTyping) {
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmedContent
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: getMockAIResponse(trimmedContent)
      };

      setMessages((currentMessages) => [...currentMessages, assistantMessage]);
      setIsTyping(false);
    }, 650);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
      <section className="rounded-lg border bg-slate-50 p-4">
        <div className="h-[520px] overflow-y-auto rounded-lg bg-white p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}
            {isTyping ? (
              <div className="flex gap-2 text-sm text-slate-500">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-700" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500 [animation-delay:120ms]" />
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-300 [animation-delay:240ms]" />
              </div>
            ) : null}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <form className="mt-4 flex gap-3" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="ai-message">
            Message
          </label>
          <input
            id="ai-message"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="h-11 min-w-0 flex-1 rounded-lg border bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            placeholder="Ask about services, documents, or complaints"
          />
          <Button type="submit" className="gap-2" disabled={isTyping}>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send
          </Button>
        </form>
      </section>

      <aside className="rounded-lg border bg-white p-4">
        <h2 className="text-base font-semibold text-slate-950">
          Suggested Questions
        </h2>
        <div className="mt-4 grid gap-2">
          {suggestedPrompts.map((prompt) => (
            <SuggestedPrompt key={prompt} prompt={prompt} onSelect={sendMessage} />
          ))}
        </div>
      </aside>
    </div>
  );
}
