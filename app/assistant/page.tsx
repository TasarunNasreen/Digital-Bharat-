import { AIChat } from "@/components/core/ai-chat";

export default function AssistantPage() {
  return (
    <div className="bg-slate-50 py-10 sm:py-12">
      <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase text-blue-700">
            AI Assistant
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            Mock Civic Assistant
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Ask about services, documents, complaints, and schemes. Responses
            are generated from local mock rules only.
          </p>
        </section>

        <AIChat />
      </div>
    </div>
  );
}
