import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const statuses = ["Submitted", "Under Review", "Assigned", "In Progress", "Resolved"];

type ComplaintTimelineProps = {
  currentStatus: string;
};

export function ComplaintTimeline({ currentStatus }: ComplaintTimelineProps) {
  const currentIndex = Math.max(statuses.indexOf(currentStatus), 0);

  return (
    <div className="space-y-3">
      {statuses.map((status, index) => {
        const isComplete = index <= currentIndex;

        return (
          <div key={status} className="flex items-center gap-3">
            {isComplete ? (
              <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
            ) : (
              <Circle className="h-5 w-5 text-slate-300" aria-hidden="true" />
            )}
            <span
              className={cn(
                "text-sm font-medium",
                isComplete ? "text-slate-950" : "text-slate-400"
              )}
            >
              {status}
            </span>
          </div>
        );
      })}
    </div>
  );
}
