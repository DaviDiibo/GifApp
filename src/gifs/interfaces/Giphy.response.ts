export interface GiphyResponse {
  data: Datum[];
  meta: Meta;
  pagination: Pagination;
}

export interface Datum {
  type: Type;
  id: string;
  url: string;
  slug: string;
  bitlyGIFURL: string;
  bitlyURL: string;
  embedURL: string;
  username: string;
  source: string;
  title: string;
  rating: Rating;
  contentURL: string;
  sourceTLD: string;
  sourcePostURL: string;
  isSticker: number;
  importDatetime: Date;
  trendingDatetime: TrendingDatetimeUnion;
  images: Images;
  analyticsResponsePayload: string;
  analytics: Analytics;
  altText: string;
  isLowContrast: boolean;
  user?: User;
}

export interface Analytics {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original: FixedHeight;
  fixedHeight: FixedHeight;
  fixedHeightDownsampled: FixedHeight;
  fixedHeightSmall: FixedHeight;
  fixedWidth: FixedHeight;
  fixedWidthDownsampled: FixedHeight;
  fixedWidthSmall: FixedHeight;
}

export interface FixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4Size?: string;
  mp4?: string;
  webpSize: string;
  webp: string;
  frames?: string;
  hash?: string;
}

export type Rating = "g" | "pg" | "pg-13" | "r" | string;

export type TrendingDatetimeUnion = Date | string;

export type Type = "gif" | string;

export interface User {
  avatarURL: string;
  bannerImage: string;
  bannerURL: string;
  profileURL: string;
  username: string;
  displayName: string;
  description: string;
  instagramURL: string;
  websiteURL: string;
  isVerified: boolean;
}

export interface Meta {
  status: number;
  msg: string;
  responseID: string;
}

export interface Pagination {
  totalCount: number;
  count: number;
  offset: number;
}
