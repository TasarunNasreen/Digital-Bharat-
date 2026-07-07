import { AlertCircle, CalendarDays, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/helpers";

export type TrackableComplaint = {
  id: string;
  title: string;
  description?: string;
  category?: string;
  department: string;
  status: string;
  priority: string;
  location?: string;
  createdAt: string;
};

type ComplaintStatusCardProps = {
  complaint: TrackableComplaint;
};

export function ComplaintStatusCard({ complaint }: ComplaintStatusCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-lg bg-blue-50 p-3 text-blue-700">
            <AlertCircle className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-blue-700">
                  {complaint.id}
                </p>
                <h2 className="mt-1 text-xl font-bold text-slate-950">
                  {complaint.title}
                </h2>
              </div>
              <span className="rounded-md bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                {complaint.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              {complaint.description ?? "Complaint details are being reviewed."}
            </p>
            <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <span>Category: {complaint.category ?? complaint.department}</span>
              <span>Priority: {complaint.priority}</span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-700" aria-hidden="true" />
                {complaint.location ?? "Location pending"}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-blue-700" aria-hidden="true" />
                {formatDate(complaint.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
