import {BaseService} from "./BaseService"
// 电台有关的服务接口

export class DJService extends BaseService{
  constructor() {
    super();
  }
  static instance: DJService;
  static getInstance () {
    return !DJService.instance ?  DJService.instance = new DJService : DJService.instance
  }

  // 获取到banner的图片
  public getBannerPic () :Promise<any>{
    return this.request({
      method: "GET",
      url: "/dj/banner"
    });
  }

  // 获取用户电台
  public getUserAudio(uid: string) :Promise<any> {
    return this.request({
      method: "GET",
      url: `/user/audio?uid=${uid}`
    });
  }

  // 获取热门电台
  // limit : 返回数量 , 默认为 30
  // offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 接口地址 : /dj/hot
  public getHotAudio(limit: number, offset: number) :Promise<any> {
    return this.request({
      method: "GET",
      url: ``
    });
  }
}
