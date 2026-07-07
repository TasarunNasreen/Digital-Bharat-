import { Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/helpers";

type NotificationCardProps = {
  title: string;
  type: string;
  read: boolean;
  createdAt: string;
};

export function NotificationCard({
  title,
  type,
  read,
  createdAt
}: NotificationCardProps) {
  return (
    <Card className="bg-white">
      <CardContent className="flex gap-3 p-4">
        <div className="rounded-lg bg-blue-50 p-2.5 text-blue-700">
          <Bell className="h-4 w-4" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-semibold text-slate-950">{title}</p>
            {!read ? (
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-700" />
            ) : null}
          </div>
          <p className="mt-1 text-xs text-slate-500">
            {type} • {formatDate(createdAt)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
