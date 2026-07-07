"use client";

import { FormEvent, useMemo, useState } from "react";
import { Ambulance, Edit3, Flame, PhoneCall, Save, Shield, Users } from "lucide-react";
import { CitizenScoreCard } from "@/components/dashboard/citizen-score-card";
import { EmergencyCard } from "@/components/dashboard/emergency-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocalStorage } from "@/hooks/useLocalStorage";

type UserProfile = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  address: string;
  state: string;
  preferredLanguage: string;
  verified: boolean;
  age: number;
  occupation: string;
  isStudent: boolean;
};

type Scheme = {
  id: string;
  name: string;
  category: string;
  eligibility: string;
  status: string;
};

type UserProfileCardProps = {
  user: UserProfile;
  documents: Array<{ id: string; name: string; status: string }>;
  complaints: Array<{ id: string; title: string; status: string }>;
  schemes: Scheme[];
};

const emergencyContacts = [
  { title: "Police", number: "100", icon: Shield },
  { title: "Ambulance", number: "108", icon: Ambulance },
  { title: "Fire", number: "101", icon: Flame },
  { title: "Women Helpline", number: "1091", icon: PhoneCall },
  { title: "Child Helpline", number: "1098", icon: Users }
];

function getRecommendationReason(profile: UserProfile, scheme: Scheme) {
  const category = scheme.category.toLowerCase();
  const occupation = profile.occupation.toLowerCase();

  if (profile.isStudent && category === "education") {
    return "Recommended because your profile is marked as Student.";
  }

  if (profile.age >= 60 && category === "welfare") {
    return "Recommended because your profile qualifies as Senior Citizen.";
  }

  if (occupation.includes("farmer") && category === "agriculture") {
    return "Recommended because your occupation is Farmer.";
  }

  if (
    (occupation.includes("professional") || occupation.includes("entrepreneur")) &&
    (category === "employment" || category === "business")
  ) {
    return "Recommended because your profile matches working professional support.";
  }

  return "";
}

export function UserProfileCard({
  user,
  documents,
  complaints,
  schemes
}: UserProfileCardProps) {
  const [profile, setProfile] = useLocalStorage<UserProfile>(
    "digital-bharat-profile",
    user
  );
  const [storedComplaints] = useLocalStorage<Array<{ id: string; title: string; status: string }>>(
    "digital-bharat-complaints",
    []
  );
  const [isEditing, setIsEditing] = useState(false);
  const allComplaints = [...storedComplaints, ...complaints];
  const recommendations = useMemo(
    () =>
      schemes
        .map((scheme) => ({
          ...scheme,
          reason: getRecommendationReason(profile, scheme)
        }))
        .filter((scheme) => scheme.reason),
    [profile, schemes]
  );
  const resolvedCount = allComplaints.filter(
    (complaint) => complaint.status.toLowerCase() === "resolved"
  ).length;

  function updateField(field: keyof UserProfile, value: string | boolean | number) {
    setProfile((currentProfile) => ({ ...currentProfile, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsEditing(false);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <Card className="bg-white">
          <CardContent className="p-6">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase text-blue-700">
                    Citizen Profile
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">
                    {profile.name}
                  </h2>
                </div>
                <Button
                  type={isEditing ? "submit" : "button"}
                  variant={isEditing ? "default" : "outline"}
                  className="gap-2"
                  onClick={() => {
                    if (!isEditing) {
                      setIsEditing(true);
                    }
                  }}
                >
                  {isEditing ? (
                    <Save className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Edit3 className="h-4 w-4" aria-hidden="true" />
                  )}
                  {isEditing ? "Save Profile" : "Edit Profile"}
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {(["name", "email", "mobile", "address", "preferredLanguage", "occupation"] as const).map(
                  (field) => (
                    <label key={field} className="grid gap-2 text-sm font-medium text-slate-700">
                      {field === "preferredLanguage" ? "Preferred Language" : field.charAt(0).toUpperCase() + field.slice(1)}
                      <input
                        value={String(profile[field])}
                        disabled={!isEditing}
                        onChange={(event) => updateField(field, event.target.value)}
                        className="h-11 rounded-lg border bg-white px-3 text-sm outline-none disabled:bg-slate-50 disabled:text-slate-500 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                      />
                    </label>
                  )
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-slate-950">
              Uploaded Documents
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {documents.map((document) => (
                <div key={document.id} className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-950">
                    {document.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{document.status}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-slate-950">
              Submitted Complaints
            </h2>
            <div className="mt-4 grid gap-3">
              {allComplaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-slate-50 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {complaint.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{complaint.id}</p>
                  </div>
                  <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    {complaint.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <aside className="space-y-6">
        <CitizenScoreCard
          profileCompletion={88}
          documentsUploaded={documents.length}
          complaintsResolved={resolvedCount}
        />

        <Card className="bg-white">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-slate-950">
              Recommended Schemes
            </h2>
            <div className="mt-4 grid gap-3">
              {recommendations.map((scheme) => (
                <div key={scheme.id} className="rounded-lg bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-950">
                    {scheme.name}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {scheme.reason}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-slate-950">
              Emergency Help
            </h2>
            <div className="mt-4 grid gap-3">
              {emergencyContacts.map((contact) => (
                <EmergencyCard key={contact.title} {...contact} />
              ))}
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
