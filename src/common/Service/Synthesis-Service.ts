import {BaseService} from "./BaseService"
import {BannerResponse} from "../entity/Response"
// 综合类型的接口
export class SynthesisService extends BaseService{
  constructor() {
    super();
  }
  static instance: SynthesisService;
  static getInstance () {
    if (!SynthesisService.instance) {
      SynthesisService.instance = new SynthesisService
    }
    return SynthesisService.instance
  }

  // 获取到banner的图片
  public getBannerPic = () :Promise<BannerResponse> => this.request.get("./banner")

  // 获取用户电台
}
