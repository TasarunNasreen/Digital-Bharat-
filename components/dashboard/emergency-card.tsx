import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type EmergencyCardProps = {
  title: string;
  number: string;
  icon: LucideIcon;
};

export function EmergencyCard({ title, number, icon: Icon }: EmergencyCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="flex items-center gap-3 p-4">
        <div className="rounded-lg bg-red-50 p-2.5 text-red-700">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-950">{title}</p>
          <p className="mt-1 text-sm font-bold text-red-700">{number}</p>
        </div>
      </CardContent>
    </Card>
  );
}
