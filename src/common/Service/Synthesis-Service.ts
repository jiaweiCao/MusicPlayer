import {BaseService} from "./BaseService"
import {BannerRespones} from "../entity/Response"
// 综合类型的接口
export class SynthesisService extends BaseService{
  constructor() {
    super();
  }
  static instance: SynthesisService;
  static getInstance () {
    return !SynthesisService.instance ?  SynthesisService.instance = new SynthesisService : SynthesisService.instance
  }

  // 获取到banner的图片
  public getBannerPic () :Promise<BannerRespones>{
    return this.request({
      method: "GET",
      url: "./banner"
    });
  }

  // 获取用户电台
}
