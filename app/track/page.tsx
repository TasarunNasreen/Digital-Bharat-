import { TicketCard } from "@/components/citizen/ticket-card";
import { mockData } from "@/lib/mockData";

export default function TrackPage() {
  return (
    <div className="bg-slate-50 py-10 sm:py-12">
      <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase text-blue-700">
            Track Complaint
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            Check Ticket Status
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Search by Ticket ID to view complaint details, current status, and a
            mock lifecycle timeline.
          </p>
        </section>

        <TicketCard initialComplaints={mockData.complaints} />
      </div>
    </div>
  );
}
