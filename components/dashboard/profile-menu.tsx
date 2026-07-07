"use client";

import { ChevronDown, UserCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="outline"
        className="gap-2"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <UserCircle2 className="h-4 w-4" aria-hidden="true" />
        <span className="hidden sm:inline">Citizen</span>
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </Button>
      {open ? (
        <div
          className="absolute right-0 top-12 z-50 w-48 rounded-lg border bg-white p-2 text-sm shadow-portal"
          role="menu"
        >
          <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100" type="button">
            Profile
          </button>
          <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100" type="button">
            Settings
          </button>
          <button className="w-full rounded-md px-3 py-2 text-left text-slate-600 hover:bg-slate-100" type="button">
            Help
          </button>
        </div>
      ) : null}
    </div>
  );
}
