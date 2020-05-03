
type code = string | number

// 基础返回
export class ResponseCommon<T extends {}> {
  code: code;
  datas: T
}

// banner图的返回
export class BannerResponse {
  code: code;
  banners: Banner[]
}
export class Banner {
  titleColor: string;
  typeTitle: string;
  tagetType: number;
  url: string;
  pic: string;
  exclusive: boolean;
  targetId: number
}

// 推荐歌单返回
export class CommendSongResponse {
  code: code;
  category: number;
  hasTaste: boolean;
  result: CommendSong[]
}

// 推荐歌单
export class CommendSong {
  alg: string
  canDislike: boolean
  copywriter: string
  highQuality: boolean
  id: number
  name: string
  picUrl: string
  playCount: number
  trackCount: number
  trackNumberUpdateTime: Date
  type: number
}

// 歌单详情
export class SongListResponse {
  code: code;
  playlist: any;
  privileges: any[];
  relatedVideos: any[];
  urls: any[]
}
