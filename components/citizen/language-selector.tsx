"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";

const languages = ["English", "Hindi", "Odia"];

export function LanguageSelector() {
  const [language, setLanguage] = useLocalStorage(
    "digital-bharat-settings-language",
    "English"
  );

  return (
    <label className="block">
      <span className="sr-only">Language</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        className="h-10 min-w-40 rounded-lg border bg-white px-3 text-sm font-medium text-slate-600 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
      >
        {languages.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
