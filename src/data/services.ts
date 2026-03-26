import type { ServicesData } from "../types/site";

export const servicesData: ServicesData = {
  heroSummary:
    "From rough excavation to septic and drainfield installation, Powell's handles the heavy work with clear communication and dependable scheduling.",
  highlightCategories: ["Excavation", "Septic / Drainfield", "Material Delivery"],
  groups: [
    {
      title: "Site Prep And Excavation",
      intro: "We prepare residential and light commercial sites for construction, utilities, and access.",
      bullets: [
        "Foundation and footing excavation",
        "Driveway cut-ins and grading",
        "Land clearing and topsoil stripping"
      ]
    },
    {
      title: "Septic And Drainfield Work",
      intro: "Complete septic projects and replacement work with practical, code-aware installation planning.",
      bullets: [
        "New septic system installation",
        "Drainfield replacement and repair",
        "Septic tank exposure and service access"
      ]
    },
    {
      title: "Property Drainage Solutions",
      intro: "Water management work that protects structures and keeps sites usable in wet conditions.",
      bullets: [
        "French drains and trenching",
        "Yard drainage correction",
        "Culvert and runoff redirection work"
      ]
    }
  ]
};
