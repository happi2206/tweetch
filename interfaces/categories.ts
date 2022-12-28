export interface content {
  videoId: string;
  title: string;
  thumbnails: { height: number; width: number; url: string }[];
  badges: string[];
  author: { avatar: { url: string }[]; title: string };
  movingThumbnails: { height: number; width: number; url: string }[];
  descriptionSnippet?: string;
  stats?: { viewers: string };
  isLiveNow?: boolean;
}

export type videointerface = {
  type: string;
  video: content;
};

export type videodetail = {
  formats: { url: string };
};
