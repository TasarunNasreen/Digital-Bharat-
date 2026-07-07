import complaints from "@/data/complaints.json";
import documents from "@/data/documents.json";
import notifications from "@/data/notifications.json";
import schemes from "@/data/schemes.json";
import services from "@/data/services.json";
import users from "@/data/users.json";

export const mockData = {
  complaints,
  documents,
  notifications,
  schemes,
  services,
  users
};

export type MockData = typeof mockData;
