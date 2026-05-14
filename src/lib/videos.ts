// Paste your YouTube URL into the youtubeUrl field for each video.
// Leave youtubeUrl as "" for clips not yet uploaded — they'll show a placeholder.
// To add more entries just copy a block and fill in title + youtubeUrl.

export interface VideoEntry {
  title: string;
  youtubeUrl: string;
}

function getId(url: string): string {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : "";
}

export function thumbUrl(entry: VideoEntry): string {
  const id = getId(entry.youtubeUrl);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

export function embedUrl(entry: VideoEntry): string {
  const id = getId(entry.youtubeUrl);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : "";
}

export const videos: VideoEntry[] = [
  { title: "AMO Intro", youtubeUrl: "https://youtu.be/L4n1cKviEDM" },
  { title: "App view", youtubeUrl: "https://youtu.be/wzo4qVkTlLY" },
  { title: "Cybervilla into", youtubeUrl: "https://youtu.be/2B0vyCulIpY" },
  { title: "Quikpay Ads", youtubeUrl: "https://youtu.be/CVTWrh3rGk4" },
  { title: "Digital labs", youtubeUrl: "https://youtu.be/JQY8WoDcGbo" },
  { title: "Product Design", youtubeUrl: "https://youtu.be/oPtODH3-HJE" },
  { title: "Ruby", youtubeUrl: "" },
  { title: "CVilla", youtubeUrl: "" },
  { title: "Jesus on a throne", youtubeUrl: "https://youtu.be/YPJpBkXzI-M" },
  { title: "All Edits", youtubeUrl: "" },
  { title: "Content Core", youtubeUrl: "" },
  { title: "Planet Capital", youtubeUrl: "https://youtu.be/9Luw-hpJBMQ" },
  { title: "Wedding trailer", youtubeUrl: "https://youtu.be/EU5fGQEXezY" },
  { title: "Whisk Motion 3", youtubeUrl: "" },
  { title: "Whisk Motion 4", youtubeUrl: "" },
  { title: "0210", youtubeUrl: "" },
  { title: "0214", youtubeUrl: "" },
  { title: "1031", youtubeUrl: "" },
  { title: "1031 Variant", youtubeUrl: "" },
  { title: "1205", youtubeUrl: "" },
  { title: "Promo Clip", youtubeUrl: "" },
  { title: "Composition", youtubeUrl: "" },
  { title: "Recording", youtubeUrl: "" },
  { title: "Original Cut", youtubeUrl: "" },
  { title: "WH", youtubeUrl: "" },
  { title: "Test", youtubeUrl: "" },
];
