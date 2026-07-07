import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type RequirementChecklistProps = {
  title: string;
  requirements: string[];
};

export function RequirementChecklist({
  title,
  requirements
}: RequirementChecklistProps) {
  return (
    <Card className="bg-white">
      <CardContent className="p-5">
        <h3 className="text-base font-semibold text-slate-950">{title}</h3>
        <div className="mt-4 grid gap-3">
          {requirements.map((requirement) => (
            <div
              key={requirement}
              className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
              {requirement}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
