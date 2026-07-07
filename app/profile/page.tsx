import { UserProfileCard } from "@/components/citizen/user-profile-card";
import { mockData } from "@/lib/mockData";

export default function ProfilePage() {
  return (
    <div className="bg-slate-50 py-10 sm:py-12">
      <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase text-blue-700">
            Profile
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            Citizen Profile
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Manage local profile information, view documents and complaints, and
            review scheme recommendations based on mock profile rules.
          </p>
        </section>

        <UserProfileCard
          user={mockData.users[0]}
          documents={mockData.documents}
          complaints={mockData.complaints}
          schemes={mockData.schemes}
        />
      </div>
    </div>
  );
}
