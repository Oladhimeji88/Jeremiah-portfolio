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
  { title: "Ruby", youtubeUrl: "https://youtube.com/shorts/17XbjWGovyo" },
  { title: "Logo reveal", youtubeUrl: "https://youtube.com/shorts/QDnBY8wqlF8?feature=share" },
  { title: "Jesus on a throne", youtubeUrl: "https://youtu.be/YPJpBkXzI-M" },
  { title: "Tol Ads", youtubeUrl: "https://youtube.com/shorts/8UkO9v1LXao" },
  { title: "NativeTalk", youtubeUrl: "https://youtu.be/j-7zUTZfRKo" },
  { title: "Planet Capital", youtubeUrl: "https://youtu.be/9Luw-hpJBMQ" },
  { title: "Wedding trailer", youtubeUrl: "https://youtu.be/EU5fGQEXezY" },
  { title: "Test", youtubeUrl: "" },
];
