import type { TrustData } from "../types/site";

export const trustData: TrustData = {
  stats: [
    { label: "Local Service Area", value: "Regional" },
    { label: "Core Work Types", value: "Excavation + Septic" },
    { label: "Response Focus", value: "Fast Site Scheduling" }
  ],
  signals: [
    "Straightforward scope and scheduling communication",
    "Jobsite-first planning for access, safety, and clean-up",
    "Practical equipment and crew support for residential projects"
  ],
  reviews: [
    {
      source: "Customer Feedback",
      quote: "They explained the work clearly, showed up when scheduled, and left the site ready for the next crew.",
      author: "Homeowner, Hillside"
    },
    {
      source: "Repeat Client Note",
      quote: "Good communication, fair expectations, and no surprises during our drainfield replacement.",
      author: "Property Owner, County Route 9"
    }
  ]
};
