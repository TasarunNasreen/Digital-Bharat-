"use client";

import { useMemo, useState } from "react";
import { ServiceCard, type Service } from "@/components/core/service-card";
import { ServiceFilter } from "@/components/core/service-filter";
import { ServiceSearch } from "@/components/core/service-search";

type ServiceGridProps = {
  services: Service[];
};

export function ServiceGrid({ services }: ServiceGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => Array.from(new Set(services.map((service) => service.category))).sort(),
    [services]
  );
  const filteredServices = services.filter((service) => {
    const matchesQuery =
      service.name.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase()) ||
      service.department.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || service.category === category;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <ServiceSearch value={query} onChange={setQuery} />
        <ServiceFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      {filteredServices.length === 0 ? (
        <div className="rounded-lg border bg-white p-6 text-center text-sm text-slate-500">
          No services match your search.
        </div>
      ) : null}
    </div>
  );
}
