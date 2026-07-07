"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";

export function NotificationSettings() {
  const [enabled, setEnabled] = useLocalStorage(
    "digital-bharat-notifications-enabled",
    true
  );

  return (
    <button
      type="button"
      onClick={() => setEnabled((current) => !current)}
      className="flex h-10 items-center gap-3 rounded-lg border bg-white px-3 text-sm font-medium text-slate-600"
      aria-pressed={enabled}
    >
      <span
        className={`relative h-5 w-10 rounded-full transition ${
          enabled ? "bg-blue-700" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition ${
            enabled ? "left-5" : "left-0.5"
          }`}
        />
      </span>
      {enabled ? "Enabled" : "Disabled"}
    </button>
  );
}
