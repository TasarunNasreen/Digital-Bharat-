import { Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type ServiceCardProps = {
  name: string;
  department: string;
  category: string;
  status: string;
  estimatedTime: string;
};

export function ServiceCard({
  name,
  department,
  category,
  status,
  estimatedTime
}: ServiceCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-blue-50 p-3 text-blue-700">
            <Landmark className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-slate-950">{name}</h3>
            <p className="mt-1 text-xs text-slate-500">{department}</p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
          <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-600">
            {category}
          </span>
          <span className="rounded-md bg-green-50 px-2.5 py-1 text-green-700">
            {status}
          </span>
          <span className="rounded-md bg-blue-50 px-2.5 py-1 text-blue-700">
            {estimatedTime}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
