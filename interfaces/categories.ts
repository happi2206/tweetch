export interface content {
  videoId: string;
  title: string;
  thumbnails: { height: number; width: number; url: string }[];
  badges: string[];
  author: { avatar: { url: string }[]; title: string };
}

export type videointerface = {
  type: string;
  video: content;
};

export type videodetail = {
  formats: { url: string };
};
