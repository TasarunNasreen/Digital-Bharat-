import { FileCheck2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate, getStatusTone } from "@/lib/helpers";
import { cn } from "@/lib/utils";

type DocumentCardProps = {
  name: string;
  type: string;
  status: string;
  updatedAt: string;
};

const documentToneClass = {
  default: "bg-slate-100 text-slate-700",
  success: "bg-green-50 text-green-700",
  warning: "bg-amber-50 text-amber-700"
};

export function DocumentCard({
  name,
  type,
  status,
  updatedAt
}: DocumentCardProps) {
  const tone = getStatusTone(status);

  return (
    <Card className="bg-white">
      <CardContent className="flex items-center gap-3 p-4">
        <div className="rounded-lg bg-blue-50 p-2.5 text-blue-700">
          <FileCheck2 className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-950">{name}</p>
          <p className="mt-1 text-xs text-slate-500">
            {type} • Updated {formatDate(updatedAt)}
          </p>
        </div>
        <span
          className={cn(
            "rounded-md px-2.5 py-1 text-xs font-semibold",
            documentToneClass[tone]
          )}
        >
          {status}
        </span>
      </CardContent>
    </Card>
  );
}
