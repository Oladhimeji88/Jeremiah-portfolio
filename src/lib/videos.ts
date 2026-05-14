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
  { title: "AMO Intro", youtubeUrl: "" },
  { title: "Amo Intro Vid", youtubeUrl: "" },
  { title: "Logo Reveal 2", youtubeUrl: "" },
  { title: "TF Open", youtubeUrl: "" },
  { title: "UI/UX Module 2", youtubeUrl: "" },
  { title: "Video Boss", youtubeUrl: "" },
  { title: "Ruby", youtubeUrl: "" },
  { title: "CVilla", youtubeUrl: "" },
  { title: "Ellipse", youtubeUrl: "" },
  { title: "All Edits", youtubeUrl: "" },
  { title: "Content Core", youtubeUrl: "" },
  { title: "Whisk Motion 1", youtubeUrl: "" },
  { title: "Whisk Motion 2", youtubeUrl: "" },
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
