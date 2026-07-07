import {
  ArrowRight,
  Bot,
  CheckCircle2,
  FileText,
  Globe2,
  Landmark,
  LockKeyhole,
  MapPinned,
  MessageSquareWarning,
  Search,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { features, navLinks, statistics } from "@/lib/constants";

const featureIcons = {
  "AI Assistant": Bot,
  "Government Services": Landmark,
  "Complaint Tracking": MessageSquareWarning,
  "Smart Recommendations": Sparkles,
  "Multilingual Support": Globe2,
  "Secure Documents": LockKeyhole
};

const whyDigitalBharat = [
  "One clean civic dashboard for services, schemes, documents, complaints, and alerts.",
  "Mock AI guidance designed to help citizens understand the next best action.",
  "Local-first foundation using JSON data and browser storage for fast iteration.",
  "Built for responsive access across desktop, tablet, and mobile screens."
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#eff6ff_0%,#ffffff_64%)]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#f97316_0%,#2563eb_50%,#16a34a_100%)]" />
        <div className="container relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <MapPinned className="h-4 w-4 text-blue-700" aria-hidden="true" />
              Citizen services, simplified
            </div>
            <h1 className="text-4xl font-bold tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              Digital Bharat
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              AI Powered Civic Companion for Government Services
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Search className="h-4 w-4" aria-hidden="true" />
                Explore Services
              </Button>
            </div>
          </div>

          <div className="relative min-h-[460px] rounded-lg border bg-white p-4 shadow-portal">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Civic Companion
                </p>
                <p className="text-xs text-slate-500">Live service overview</p>
              </div>
              <div className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Mock AI
              </div>
            </div>
            <div className="grid gap-3 py-4 sm:grid-cols-2">
              {statistics.slice(0, 4).map((item) => (
                <div key={item.label} className="rounded-lg border bg-slate-50 p-4">
                  <p className="text-2xl font-bold text-slate-950">{item.value}</p>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-3 rounded-lg border bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-md bg-blue-700 p-2 text-white">
                  <Bot className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Suggested next action
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Your income certificate request is eligible for priority
                    tracking based on the mock application status.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {["Aadhaar update", "Water complaint", "Scholarship scheme"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-lg border bg-white px-4 py-3"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                    <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-blue-700">
              Features
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Everything citizens need in one civic portal
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = featureIcons[feature.title];

              return (
                <Card key={feature.title}>
                  <CardContent className="p-6">
                    <div className="mb-5 inline-flex rounded-lg bg-blue-50 p-3 text-blue-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="statistics" className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((item) => (
              <Card key={item.label} className="bg-slate-50">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold text-blue-700">{item.value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="bg-slate-50 py-16 sm:py-20">
        <div className="container mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-700">
              Why Digital Bharat
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Built around access, clarity, and citizen trust
            </h2>
          </div>
          <div className="grid gap-4">
            {whyDigitalBharat.map((reason) => (
              <div
                key={reason}
                className="flex gap-3 rounded-lg border bg-white p-5 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-600">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border bg-blue-700 px-6 py-10 text-white shadow-portal sm:px-10 lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-blue-100">
                Start your civic journey
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Explore services with a clearer next step.
              </h2>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Button variant="secondary" size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
