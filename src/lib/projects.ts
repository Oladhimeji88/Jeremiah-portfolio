import pPadii from "@/assets/jeremiah/p-padii.png";
import pNetflix from "@/assets/jeremiah/p-netflix.png";
import pMoniepoint from "@/assets/jeremiah/p-moniepoint.png";
import pLagrent from "@/assets/jeremiah/p-lagrent.png";
import pCesado from "@/assets/jeremiah/p-cesado.png";
import tapeboxHero from "@/assets/Tapebox/Hero section.png";
import tapeboxScreenshot from "@/assets/Tapebox/Screenshot 2026-05-14 153901.png";
import tapeboxMobile from "@/assets/Tapebox/mobile view hero section.png";
import tapeboxVideo from "@/assets/Tapebox/tapebox landing page ui.mp4";

export type ProjectProcess = {
  title: string;
  body: string;
};

export type Project = {
  id: string;
  n: string;
  tag: string;
  title: string;
  year: string;
  thumbnail?: string;
  video?: string;
  images: string[];
  description: string;
  services: string[];
  process: ProjectProcess[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "padii",
    n: "01",
    tag: "Mobile Design",
    title: "PADII Conversational AI",
    year: "2024",
    thumbnail: pPadii,
    images: [pPadii],
    description: "Details coming soon.",
    services: ["UI/UX Design", "Mobile Design", "Graphics"],
    process: [],
    liveUrl: undefined,
  },
  {
    id: "netflix",
    n: "02",
    tag: "Website Design",
    title: "Netflix AI Movie Creator",
    year: "2024",
    thumbnail: pNetflix,
    images: [pNetflix],
    description: "Details coming soon.",
    services: ["UI/UX Design", "Website Design", "Animation"],
    process: [],
    liveUrl: undefined,
  },
  {
    id: "moniepoint",
    n: "03",
    tag: "Mobile Design",
    title: "Moniepoint Mini Bank",
    year: "2023",
    thumbnail: pMoniepoint,
    images: [pMoniepoint],
    description: "Details coming soon.",
    services: ["UI/UX Design", "Mobile Design"],
    process: [],
    liveUrl: undefined,
  },
  {
    id: "lagrent",
    n: "04",
    tag: "Website Design",
    title: "Lagrent Rent App",
    year: "2023",
    thumbnail: pLagrent,
    images: [pLagrent],
    description: "Details coming soon.",
    services: ["Website Design", "Interaction Design"],
    process: [],
    liveUrl: "https://www.behance.net/gallery/231280891/LAGOS-HOME-RENT",
  },
  {
    id: "cesado",
    n: "05",
    tag: "Website Design",
    title: "Cesado Art Gallery",
    year: "2023",
    thumbnail: pCesado,
    images: [pCesado],
    description: "Details coming soon.",
    services: ["Website Design"],
    process: [],
    liveUrl: undefined,
  },
  {
    id: "tapebox",
    n: "06",
    tag: "Website Design",
    title: "TapeBox",
    year: "2025",
    thumbnail: tapeboxHero,
    video: tapeboxVideo,
    images: [tapeboxHero, tapeboxScreenshot, tapeboxMobile],
    description: "TapeBox is a logistics platform built around smarter delivery management — clean interfaces, intuitive flows, and a system designed to reduce friction for businesses handling shipments.",
    services: ["UI/UX Design", "Website Design", "Branding", "Mobile Design"],
    process: [
      {
        title: "Discovery & Research",
        body: "Deep-dived into logistics pain points through stakeholder interviews and competitor analysis. Mapped the key frustrations delivery managers and businesses face — fragmented tracking, poor visibility, and clunky handoff flows.",
      },
      {
        title: "Information Architecture",
        body: "Structured the platform around three core user journeys: shipment creation, real-time tracking, and team management. Wireframes and user flow diagrams aligned the product vision before any visual decisions were made.",
      },
      {
        title: "Visual Design System",
        body: "Built a clean, data-forward design language — a restrained color palette, sharp typography, and a component library that scales across dashboard, mobile, and marketing surfaces without losing coherence.",
      },
      {
        title: "Prototyping & Validation",
        body: "Delivered high-fidelity interactive prototypes and ran usability sessions with logistics operators. Iterated on shipment status flows, notification patterns, and the onboarding experience based on real feedback.",
      },
      {
        title: "Handoff & Implementation",
        body: "Produced annotated design specs, exportable assets, and a design-to-dev handoff guide. Worked closely with the engineering team during build to ensure the live product matched design intent down to motion and spacing.",
      },
    ],
    liveUrl: "https://tapebox-chi.vercel.app/",
  },
];
