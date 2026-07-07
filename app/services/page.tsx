import { Sparkles } from "lucide-react";
import { ServiceGrid } from "@/components/core/service-grid";
import { Card, CardContent } from "@/components/ui/card";
import { mockData } from "@/lib/mockData";

type UserProfile = {
  age?: number;
  occupation?: string;
  isStudent?: boolean;
};

function getRecommendedSchemes(profile: UserProfile) {
  return mockData.schemes.filter((scheme) => {
    const category = scheme.category.toLowerCase();
    const occupation = profile.occupation?.toLowerCase() ?? "";

    if (profile.isStudent && category === "education") {
      return true;
    }

    if (occupation.includes("entrepreneur") && category === "business") {
      return true;
    }

    if ((profile.age ?? 0) >= 60 && category === "welfare") {
      return true;
    }

    return false;
  });
}

export default function ServicesPage() {
  const profile = mockData.users[0] as UserProfile;
  const recommendedSchemes = getRecommendedSchemes(profile);

  return (
    <div className="bg-slate-50 py-10 sm:py-12">
      <div className="container mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-lg border bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase text-blue-700">
            Government Services
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-950">
            Explore Digital Bharat Services
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Search local mock services, filter by category, review required
            documents, and start a mock application flow.
          </p>
        </section>

        <ServiceGrid services={mockData.services} />

        <section>
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-700" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-950">
              Scheme Recommendations
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {recommendedSchemes.map((scheme) => (
              <Card key={scheme.id} className="bg-white">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold text-blue-700">
                    {scheme.category}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-950">
                    {scheme.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {scheme.eligibility}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
