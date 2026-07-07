import { Search } from "lucide-react";

type ServiceSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function ServiceSearch({ value, onChange }: ServiceSearchProps) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">Search services</span>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-lg border bg-white pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        placeholder="Search Aadhaar, PAN, Passport"
        type="search"
      />
    </label>
  );
}
