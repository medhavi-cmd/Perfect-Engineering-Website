import {
  Building2,
  Factory,
  PanelsTopLeft,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";

export const company = {
  name: "Perfect Engineering and Services",
  phone: "+918077413551",
  phoneDisplay: "+91 80774 13551",
  email: "perfectengineeringservices.7@gmail.com",
  whatsapp: "918077413551",
  address:
    "Ashiana Aangan, Alwar Bypass Road, Saidpur, Bhiwadi, Rajasthan – 301019",
  mapQuery:
    "6R26+MX4 Ashiana Aangan, Alwar Bypass Rd, Saidpur, Bhiwadi, Milakpur Goojar, Rajasthan 301019",
};

export const services = [
  {
    title: "Industrial & Commercial Solar",
    description:
      "Reliable solar panel installation solutions designed for factories, warehouses, societies, commercial buildings, and business facilities.",
    icon: PanelsTopLeft,
    points: [
      "Rooftop solar installation",
      "Industrial solar systems",
      "Commercial solar solutions",
      "Site survey & technical assessment",
    ],
  },
  {
    title: "Turnkey Solar EPC",
    description:
      "End-to-end execution from site evaluation and engineering to procurement, installation, testing, and commissioning.",
    icon: Factory,
    points: [
      "Feasibility & system design",
      "Procurement & project planning",
      "Installation & quality checks",
      "Testing & commissioning",
    ],
  },
  {
    title: "LT Panel Services",
    description:
      "Practical LT panel and electrical distribution solutions for industrial and commercial project requirements.",
    icon: Zap,
    points: [
      "LT panel installation",
      "Electrical distribution support",
      "Site-specific solutions",
      "Testing & commissioning",
    ],
  },
];

export const processSteps = [
  ["01", "Requirement Discussion", "Understand the facility, energy usage, and project requirement."],
  ["02", "Site Survey", "Assess roof area, site conditions, technical feasibility, and execution needs."],
  ["03", "Engineering & Proposal", "Prepare the system design, scope, and project proposal."],
  ["04", "Procurement & Planning", "Plan materials, manpower, safety measures, and execution schedule."],
  ["05", "Installation & Testing", "Execute installation with quality checks and testing."],
  ["06", "Commissioning & Handover", "Complete final checks, commissioning, and project handover."],
];

export const projects = [
  {
    title: "Industrial Solar Project",
    location: "Jhajjar, Haryana",
    type: "Industrial Solar / EPC",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial Solar Installation",
    location: "Bhiwadi, Rajasthan",
    type: "Commercial Solar",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Electrical & LT Panel Solution",
    location: "Pan India",
    type: "LT Panel Services",
    image:
      "https://images.unsplash.com/photo-1565514020176-db15d10b0e16?auto=format&fit=crop&w=1200&q=80",
  },
];

export const clients = [
  {
    name: "Panasonic India",
    location: "Jhajjar",
    type: "Industrial Client",
  },
  {
    name: "Krish Harmony Society",
    location: "Bhiwadi",
    type: "Community Client",
  },
];