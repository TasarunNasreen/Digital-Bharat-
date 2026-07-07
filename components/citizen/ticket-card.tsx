"use client";

import { Search } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { ComplaintStatusCard, type TrackableComplaint } from "@/components/citizen/complaint-status-card";
import { ComplaintTimeline } from "@/components/citizen/complaint-timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type TicketCardProps = {
  initialComplaints: TrackableComplaint[];
};

export function TicketCard({ initialComplaints }: TicketCardProps) {
  const [storedComplaints] = useLocalStorage<TrackableComplaint[]>(
    "digital-bharat-complaints",
    []
  );
  const [ticketId, setTicketId] = useState("");
  const [searchedTicketId, setSearchedTicketId] = useState("");

  const complaints = useMemo(
    () => [...storedComplaints, ...initialComplaints],
    [storedComplaints, initialComplaints]
  );
  const complaint = complaints.find(
    (item) => item.id.toLowerCase() === searchedTicketId.toLowerCase()
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchedTicketId(ticketId.trim());
  }

  return (
    <div className="space-y-5">
      <Card className="bg-white">
        <CardContent className="p-6">
          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
            <label className="relative flex-1">
              <span className="sr-only">Ticket ID</span>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                value={ticketId}
                onChange={(event) => setTicketId(event.target.value)}
                className="h-11 w-full rounded-lg border bg-white pl-10 pr-3 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                placeholder="Enter Ticket ID, for example cmp-001"
              />
            </label>
            <Button type="submit">Track Complaint</Button>
          </form>
        </CardContent>
      </Card>

      {complaint ? (
        <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
          <ComplaintStatusCard complaint={complaint} />
          <Card className="bg-white">
            <CardContent className="p-6">
              <h2 className="mb-5 text-lg font-semibold text-slate-950">
                Timeline
              </h2>
              <ComplaintTimeline currentStatus={complaint.status} />
            </CardContent>
          </Card>
        </div>
      ) : searchedTicketId ? (
        <Card className="bg-white">
          <CardContent className="p-6 text-sm text-slate-500">
            No complaint found for Ticket ID {searchedTicketId}.
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
