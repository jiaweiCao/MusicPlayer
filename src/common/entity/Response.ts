
type code = string | number

// 基础返回
export class ResponseCommon<T extends {}> {
  code: code;
  datas: T
}

// banner图的返回
export class BannerRespones {
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
