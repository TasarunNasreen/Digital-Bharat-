import { Card, CardContent } from "@/components/ui/card";

type CitizenScoreCardProps = {
  profileCompletion: number;
  documentsUploaded: number;
  complaintsResolved: number;
};

export function CitizenScoreCard({
  profileCompletion,
  documentsUploaded,
  complaintsResolved
}: CitizenScoreCardProps) {
  return (
    <Card className="bg-white" id="citizen-score">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div
            className="grid h-36 w-36 place-items-center rounded-full"
            style={{
              background: `conic-gradient(#2563eb ${profileCompletion * 3.6}deg, #e2e8f0 0deg)`
            }}
            aria-label={`Profile completion ${profileCompletion} percent`}
          >
            <div className="grid h-24 w-24 place-items-center rounded-full bg-white">
              <span className="text-3xl font-bold text-slate-950">
                {profileCompletion}%
              </span>
            </div>
          </div>
          <h3 className="mt-5 text-lg font-semibold text-slate-950">
            Citizen Score
          </h3>
          <p className="mt-2 text-sm text-slate-500">Profile Completion</p>
        </div>
        <div className="mt-6 grid gap-3 text-sm">
          <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
            <span className="text-slate-600">Documents Uploaded</span>
            <span className="font-semibold text-slate-950">{documentsUploaded}</span>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3">
            <span className="text-slate-600">Complaints Resolved</span>
            <span className="font-semibold text-slate-950">{complaintsResolved}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
