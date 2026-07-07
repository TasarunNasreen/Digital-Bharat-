export type MockAIResponse = {
  keywords: string[];
  response: string;
};

export const suggestedPrompts = [
  "How do I apply for Passport?",
  "Required documents for Aadhaar?",
  "Track my complaint.",
  "Government schemes for students.",
  "How to update PAN?",
  "How to upload documents?"
] as const;

export const mockAIResponses: MockAIResponse[] = [
  {
    keywords: ["passport", "apply"],
    response:
      "To apply for a Passport, open Services, choose Passport, keep address proof and identity proof ready, then book a Passport Seva appointment."
  },
  {
    keywords: ["aadhaar", "required", "documents"],
    response:
      "For Aadhaar services, you usually need proof of identity, proof of address, and a mobile number for verification."
  },
  {
    keywords: ["track", "complaint"],
    response:
      "You can track a complaint from the dashboard by checking the ticket ID, category, status, and latest update date."
  },
  {
    keywords: ["schemes", "students"],
    response:
      "Students may be eligible for education support schemes. The recommendation section highlights schemes from local mock data based on student status."
  },
  {
    keywords: ["pan", "update"],
    response:
      "To update PAN details, choose PAN from Services, prepare identity proof, address proof, and date of birth proof, then submit a correction request."
  },
  {
    keywords: ["upload", "documents"],
    response:
      "Open Documents, select Upload Document, choose the document type, and review the required checklist before saving the mock record."
  }
];

export function getMockAIResponse(query: string) {
  const normalizedQuery = query.toLowerCase();
  const match = mockAIResponses.find((item) =>
    item.keywords.every((keyword) => normalizedQuery.includes(keyword))
  );

  return (
    match?.response ??
    "I can help with Passport, Aadhaar, PAN, complaints, student schemes, and document upload guidance using mock civic data."
  );
}
