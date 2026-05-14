import pPadii from "@/assets/jeremiah/p-padii.png";
import pNetflix from "@/assets/jeremiah/p-netflix.png";
import pMoniepoint from "@/assets/jeremiah/p-moniepoint.png";
import pLagrent from "@/assets/jeremiah/p-lagrent.png";
import pCesado from "@/assets/jeremiah/p-cesado.png";

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
    thumbnail: "",
    images: [],
    description: "TapeBox is a logistics platform built around smarter delivery management — clean interfaces, intuitive flows, and a system designed to reduce friction for businesses handling shipments.",
    services: ["UI/UX Design", "Website Design", "Branding", "Mobile Design"],
    process: [],
    liveUrl: "https://tapebox-chi.vercel.app/",
  },
];
