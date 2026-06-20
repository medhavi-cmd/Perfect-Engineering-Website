import {
  BatteryCharging,
  Factory,
  PanelTop,
  Settings2,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    id: "industrial-solar",
    title: "Industrial Solar Solutions",
    shortTitle: "Industrial Solar",
    description:
      "Rooftop and ground-mounted solar solutions designed for factories, warehouses, manufacturing units, and industrial facilities.",
    icon: Factory,
    highlights: [
      "Factory rooftop solar systems",
      "High-capacity industrial installations",
      "Energy cost reduction planning",
    ],
    accent: "from-[#06265c] to-[#0b3d91]",
  },
  {
    id: "commercial-solar",
    title: "Commercial Solar Solutions",
    shortTitle: "Commercial Solar",
    description:
      "Reliable solar systems for offices, commercial buildings, retail spaces, institutions, and business facilities.",
    icon: PanelTop,
    highlights: [
      "Commercial rooftop installations",
      "Custom system sizing",
      "Long-term energy savings",
    ],
    accent: "from-[#0b3d91] to-[#2563eb]",
  },
  {
    id: "solar-epc",
    title: "Turnkey Solar EPC",
    shortTitle: "Solar EPC",
    description:
      "End-to-end solar project execution from site survey and engineering to procurement, installation, testing, and commissioning.",
    icon: Settings2,
    highlights: [
      "Site survey and feasibility",
      "Engineering and design",
      "Installation and commissioning",
    ],
    accent: "from-[#06265c] to-[#1d4ed8]",
  },
  {
    id: "lt-panels",
    title: "LT Panel Services",
    shortTitle: "LT Panels",
    description:
      "LT panel installation and electrical distribution support for safe, efficient, and reliable power management.",
    icon: Zap,
    highlights: [
      "LT panel installation",
      "Electrical distribution support",
      "System integration",
    ],
    accent: "from-[#0b3d91] to-[#3b82f6]",
  },
  {
    id: "maintenance",
    title: "Solar Maintenance Support",
    shortTitle: "Maintenance",
    description:
      "Basic maintenance and support services to help clients maintain solar system performance and operational reliability.",
    icon: ShieldCheck,
    highlights: [
      "Performance monitoring support",
      "Basic inspection assistance",
      "Operational guidance",
    ],
    accent: "from-[#06265c] to-[#2563eb]",
  },
  {
    id: "energy-consultation",
    title: "Energy Consultation",
    shortTitle: "Consultation",
    description:
      "Guidance for businesses planning to adopt solar energy and improve their overall energy efficiency.",
    icon: BatteryCharging,
    highlights: [
      "Requirement assessment",
      "Project planning guidance",
      "Cost-saving opportunity review",
    ],
    accent: "from-[#0b3d91] to-[#1e40af]",
  },
];

export default services;