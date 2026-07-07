"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <form className="relative w-full" role="search">
      <label className="sr-only" htmlFor="dashboard-search">
        Search services
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <input
        id="dashboard-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="h-10 w-full rounded-lg border bg-white pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        placeholder="Search services, schemes, complaints"
        type="search"
      />
    </form>
  );
}
