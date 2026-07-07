import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

type SettingsCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function SettingsCard({ title, description, children }: SettingsCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-950">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
        <div>{children}</div>
      </CardContent>
    </Card>
  );
}
