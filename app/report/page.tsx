import { ReportIssueForm } from "@/components/citizen/report-issue-form";

export default function ReportPage() {
  return (
    <div className="bg-slate-50 py-10 sm:py-12">
      <div className="container mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase text-blue-700">
            Report Issue
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            Submit a Civic Complaint
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Create a local mock complaint ticket for roads, utilities, public
            transport, healthcare, education, and other civic issues.
          </p>
        </section>

        <ReportIssueForm />
      </div>
    </div>
  );
}
