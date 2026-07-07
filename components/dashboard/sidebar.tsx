import Link from "next/link";
import {
  Bot,
  FileText,
  Home,
  Landmark,
  LifeBuoy,
  Settings,
  ShieldCheck,
  User,
  WalletCards
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Services", href: "#recommended-services", icon: Landmark },
  { label: "AI Assistant", href: "#quick-actions", icon: Bot },
  { label: "Report Issue", href: "#quick-actions", icon: LifeBuoy },
  { label: "Track Complaint", href: "#recent-complaints", icon: ShieldCheck },
  { label: "Documents", href: "#recent-documents", icon: FileText },
  { label: "Profile", href: "#citizen-score", icon: User },
  { label: "Settings", href: "#settings", icon: Settings }
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 md:block">
      <div className="sticky top-36 rounded-lg border bg-white p-3 shadow-sm">
        <div className="mb-3 flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-3 text-sm font-semibold text-blue-700">
          <WalletCards className="h-4 w-4" aria-hidden="true" />
          Citizen Portal
        </div>
        <nav className="space-y-1" aria-label="Dashboard navigation">
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-700"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
