import type { ReactNode } from "react";
import { DashboardNavbar } from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardNavbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <Sidebar />
        <section className="min-w-0 flex-1">{children}</section>
      </div>
    </div>
  );
}
