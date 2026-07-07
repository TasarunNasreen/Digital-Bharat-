import { Upload } from "lucide-react";
import { DocumentCard } from "@/components/core/document-card";
import { RequirementChecklist } from "@/components/core/requirement-checklist";
import { Button } from "@/components/ui/button";
import { mockData } from "@/lib/mockData";

const requiredDocuments = [
  "Aadhaar",
  "PAN",
  "Passport",
  "Driving Licence",
  "Address Proof",
  "Passport Size Photo"
];

export default function DocumentsPage() {
  return (
    <div className="bg-slate-50 py-10 sm:py-12">
      <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-blue-700">
                Documents
              </p>
              <h1 className="mt-3 text-3xl font-bold text-slate-950">
                Citizen Document Vault
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                View uploaded mock documents, track verification status, and
                review required documents for common civic services.
              </p>
            </div>
            <Button className="gap-2">
              <Upload className="h-4 w-4" aria-hidden="true" />
              Upload Document
            </Button>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <section>
            <h2 className="mb-4 text-xl font-bold text-slate-950">
              Uploaded Documents
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {mockData.documents.map((document) => (
                <DocumentCard key={document.id} document={document} />
              ))}
            </div>
          </section>

          <aside>
            <RequirementChecklist
              title="Required Documents Checklist"
              requirements={requiredDocuments}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
