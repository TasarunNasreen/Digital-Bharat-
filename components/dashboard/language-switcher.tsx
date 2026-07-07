"use client";

import { Languages } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const languages = [
  { label: "English", value: "en" },
  { label: "Hindi", value: "hi" },
  { label: "Bengali", value: "bn" },
  { label: "Tamil", value: "ta" }
];

export function LanguageSwitcher() {
  const [language, setLanguage] = useLocalStorage("digital-bharat-language", "en");

  return (
    <label className="flex h-10 items-center gap-2 rounded-lg border bg-white px-3 text-sm font-medium text-slate-600">
      <Languages className="h-4 w-4 text-blue-700" aria-hidden="true" />
      <span className="sr-only">Language</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        className="bg-transparent text-sm outline-none"
        aria-label="Select language"
      >
        {languages.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
