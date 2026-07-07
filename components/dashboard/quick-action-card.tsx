import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type QuickActionCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function QuickActionCard({
  title,
  description,
  icon: Icon
}: QuickActionCardProps) {
  return (
    <Card className="bg-white transition hover:border-blue-200 hover:shadow-portal">
      <CardContent className="flex h-full flex-col p-5">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="rounded-lg bg-blue-50 p-3 text-blue-700">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <ArrowRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
        </div>
        <h3 className="text-base font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      </CardContent>
    </Card>
  );
}
