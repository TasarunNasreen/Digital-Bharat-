type ServiceFilterProps = {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
};

export function ServiceFilter({
  categories,
  value,
  onChange
}: ServiceFilterProps) {
  return (
    <label className="block w-full sm:max-w-xs">
      <span className="sr-only">Filter by category</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-lg border bg-white px-3 text-sm font-medium text-slate-600 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
      >
        <option value="All">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  );
}
