import { AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate, getStatusTone } from "@/lib/helpers";
import { cn } from "@/lib/utils";

type ComplaintCardProps = {
  id: string;
  title: string;
  department: string;
  status: string;
  createdAt: string;
};

const statusToneClass = {
  default: "bg-slate-100 text-slate-700",
  success: "bg-green-50 text-green-700",
  warning: "bg-amber-50 text-amber-700"
};

export function ComplaintCard({
  id,
  title,
  department,
  status,
  createdAt
}: ComplaintCardProps) {
  const tone = getStatusTone(status);

  return (
    <Card className="bg-white">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-blue-50 p-2.5 text-blue-700">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-slate-950">{id}</p>
              <span
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-semibold",
                  statusToneClass[tone]
                )}
              >
                {status}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{title}</p>
            <div className="mt-3 grid gap-2 text-xs text-slate-500 sm:grid-cols-2">
              <span>Category: {department}</span>
              <span>Date: {formatDate(createdAt)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
