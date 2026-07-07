import { FileText, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export type Service = {
  id: string;
  name: string;
  description: string;
  department: string;
  category: string;
  status: string;
  estimatedTime: string;
  requiredDocuments: string[];
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="flex h-full flex-col p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-blue-50 p-3 text-blue-700">
            <Landmark className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-slate-950">
              {service.name}
            </h3>
            <p className="mt-1 text-xs font-medium text-slate-500">
              {service.department}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          {service.description}
        </p>
        <div className="mt-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-950">
            <FileText className="h-4 w-4 text-blue-700" aria-hidden="true" />
            Required Documents
          </div>
          <ul className="space-y-2 text-sm text-slate-600">
            {service.requiredDocuments.map((document) => (
              <li key={document} className="rounded-md bg-slate-50 px-3 py-2">
                {document}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-auto pt-5">
          <Button className="w-full">Apply</Button>
        </div>
      </CardContent>
    </Card>
  );
}
