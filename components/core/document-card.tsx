import { Download, Eye, FileText, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/helpers";
import { cn } from "@/lib/utils";

export type CitizenDocument = {
  id: string;
  name: string;
  type: string;
  status: string;
  updatedAt: string;
};

type DocumentCardProps = {
  document: CitizenDocument;
};

const statusClassName: Record<string, string> = {
  Verified: "bg-green-50 text-green-700",
  Pending: "bg-amber-50 text-amber-700",
  Rejected: "bg-red-50 text-red-700"
};

export function DocumentCard({ document }: DocumentCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-blue-50 p-3 text-blue-700">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-950">
                {document.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{document.type}</p>
            </div>
          </div>
          <span
            className={cn(
              "rounded-md px-2.5 py-1 text-xs font-semibold",
              statusClassName[document.status] ?? "bg-slate-100 text-slate-700"
            )}
          >
            {document.status}
          </span>
        </div>
        <div className="mt-5 rounded-lg border bg-slate-50 p-4">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
            <Eye className="h-4 w-4 text-blue-700" aria-hidden="true" />
            Preview Card
          </div>
          <p className="mt-2 text-sm text-slate-500">
            Last updated {formatDate(document.updatedAt)}
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button variant="outline" className="gap-2">
            <UploadCloud className="h-4 w-4" aria-hidden="true" />
            Upload
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
