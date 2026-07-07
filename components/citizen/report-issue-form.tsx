"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export type CitizenComplaint = {
  id: string;
  category: string;
  title: string;
  description: string;
  location: string;
  priority: string;
  status: string;
  createdAt: string;
  department: string;
};

const categories = [
  "Roads",
  "Water Supply",
  "Electricity",
  "Garbage",
  "Healthcare",
  "Education",
  "Public Transport"
];

const priorities = ["Low", "Medium", "High", "Urgent"];

const initialForm = {
  category: categories[0],
  title: "",
  description: "",
  location: "",
  priority: "Medium"
};

function createTicketId() {
  return `DB-${Date.now().toString().slice(-6)}`;
}

export function ReportIssueForm() {
  const [complaints, setComplaints] = useLocalStorage<CitizenComplaint[]>(
    "digital-bharat-complaints",
    []
  );
  const [form, setForm] = useState(initialForm);
  const [ticketId, setTicketId] = useState("");

  function updateField(name: keyof typeof initialForm, value: string) {
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextTicketId = createTicketId();
    const complaint: CitizenComplaint = {
      id: nextTicketId,
      ...form,
      status: "Submitted",
      department: form.category,
      createdAt: new Date().toISOString()
    };

    setComplaints([complaint, ...complaints]);
    setTicketId(nextTicketId);
    setForm(initialForm);
  }

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        {ticketId ? (
          <div className="mb-5 rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
            <div className="flex items-center gap-2 font-semibold">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              Complaint submitted successfully
            </div>
            <p className="mt-2 text-sm">Ticket ID: {ticketId}</p>
          </div>
        ) : null}

        <form className="grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Category
              <select
                value={form.category}
                onChange={(event) => updateField("category", event.target.value)}
                className="h-11 rounded-lg border bg-white px-3 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Priority
              <select
                value={form.priority}
                onChange={(event) => updateField("priority", event.target.value)}
                className="h-11 rounded-lg border bg-white px-3 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              >
                {priorities.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Title
            <input
              required
              value={form.title}
              onChange={(event) => updateField("title", event.target.value)}
              className="h-11 rounded-lg border bg-white px-3 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              placeholder="Short issue title"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Description
            <textarea
              required
              value={form.description}
              onChange={(event) => updateField("description", event.target.value)}
              className="min-h-32 rounded-lg border bg-white px-3 py-3 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              placeholder="Describe the issue clearly"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Location
            <input
              required
              value={form.location}
              onChange={(event) => updateField("location", event.target.value)}
              className="h-11 rounded-lg border bg-white px-3 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
              placeholder="Area, ward, street, or landmark"
            />
          </label>

          <Button type="submit" className="w-full sm:w-fit">
            Submit Complaint
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
