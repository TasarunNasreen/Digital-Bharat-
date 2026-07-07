import {
  Ambulance,
  Bot,
  FileUp,
  Flame,
  Landmark,
  MessageSquareWarning,
  PhoneCall,
  SearchCheck,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Upload,
  Users
} from "lucide-react";
import { CitizenScoreCard } from "@/components/dashboard/citizen-score-card";
import { ComplaintCard } from "@/components/dashboard/complaint-card";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { DocumentCard } from "@/components/dashboard/document-card";
import { EmergencyCard } from "@/components/dashboard/emergency-card";
import { NotificationCard } from "@/components/dashboard/notification-card";
import { QuickActionCard } from "@/components/dashboard/quick-action-card";
import { ServiceCard } from "@/components/dashboard/service-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { Button } from "@/components/ui/button";
import { mockData } from "@/lib/mockData";

const quickActions = [
  {
    title: "Apply for Service",
    description: "Start a government service request with guided steps.",
    icon: Landmark
  },
  {
    title: "Report Issue",
    description: "Raise a civic issue with department-ready details.",
    icon: MessageSquareWarning
  },
  {
    title: "Track Complaint",
    description: "Check complaint status, ticket details, and updates.",
    icon: SearchCheck
  },
  {
    title: "Upload Document",
    description: "Add document records to your local civic profile.",
    icon: FileUp
  },
  {
    title: "Ask AI",
    description: "Get a mock assistant response for civic tasks.",
    icon: Bot
  }
];

const emergencyContacts = [
  { title: "Police", number: "100", icon: Shield },
  { title: "Fire", number: "101", icon: Flame },
  { title: "Ambulance", number: "108", icon: Ambulance },
  { title: "Women Helpline", number: "1091", icon: PhoneCall },
  { title: "Child Helpline", number: "1098", icon: Users }
];

export default function DashboardPage() {
  const { complaints, documents, notifications, schemes, services } = mockData;
  const activeComplaints = complaints.filter(
    (complaint) => complaint.status.toLowerCase() !== "resolved"
  );
  const verifiedDocuments = documents.filter(
    (document) => document.status.toLowerCase() === "verified"
  );
  const resolvedComplaints = complaints.filter(
    (complaint) => complaint.status.toLowerCase() === "resolved"
  );

  const stats = [
    {
      title: "Government Services",
      value: `${services.length}`,
      description: "Available services from local mock data",
      icon: Landmark
    },
    {
      title: "Active Complaints",
      value: `${activeComplaints.length}`,
      description: "Complaints currently pending action",
      icon: ShieldAlert
    },
    {
      title: "Verified Documents",
      value: `${verifiedDocuments.length}`,
      description: "Documents marked as verified",
      icon: ShieldCheck
    },
    {
      title: "Recommended Schemes",
      value: `${schemes.length}`,
      description: "Schemes ready for citizen discovery",
      icon: Sparkles
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <section className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-blue-700">
                Welcome back,
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
                Citizen
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Your civic dashboard brings services, complaints, documents,
                notifications, and recommendations into one responsive portal.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button>Explore Services</Button>
              <Button variant="outline">Report Issue</Button>
            </div>
          </div>
        </section>

        <section id="quick-actions">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-950">Quick Actions</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {quickActions.map((action) => (
              <QuickActionCard key={action.title} {...action} />
            ))}
          </div>
        </section>

        <section>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="space-y-6">
            <section id="recent-complaints">
              <h2 className="mb-4 text-xl font-bold text-slate-950">
                Recent Complaints
              </h2>
              <div className="grid gap-3">
                {complaints.map((complaint) => (
                  <ComplaintCard key={complaint.id} {...complaint} />
                ))}
              </div>
            </section>

            <section id="recent-documents">
              <h2 className="mb-4 text-xl font-bold text-slate-950">
                Recent Documents
              </h2>
              <div className="grid gap-3">
                {documents.map((document) => (
                  <DocumentCard key={document.id} {...document} />
                ))}
              </div>
            </section>

            <section id="recommended-services">
              <h2 className="mb-4 text-xl font-bold text-slate-950">
                Recommended Services
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.slice(0, 4).map((service) => (
                  <ServiceCard key={service.id} {...service} />
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-950">
                Notifications
              </h2>
              <div className="grid gap-3">
                {notifications.map((notification) => (
                  <NotificationCard key={notification.id} {...notification} />
                ))}
              </div>
            </section>

            <CitizenScoreCard
              profileCompletion={82}
              documentsUploaded={documents.length}
              complaintsResolved={resolvedComplaints.length}
            />

            <section>
              <h2 className="mb-4 text-xl font-bold text-slate-950">
                Emergency Help
              </h2>
              <div className="grid gap-3">
                {emergencyContacts.map((contact) => (
                  <EmergencyCard key={contact.title} {...contact} />
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}
