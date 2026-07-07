export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(date));
}

export function toTitleCase(value: string) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function getStatusTone(status: string) {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus.includes("resolved") || normalizedStatus.includes("approved")) {
    return "success";
  }

  if (normalizedStatus.includes("pending") || normalizedStatus.includes("review")) {
    return "warning";
  }

  return "default";
}
