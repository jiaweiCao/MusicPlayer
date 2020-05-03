import {BaseService} from "./BaseService"
import {CommendSongResponse} from "../entity/Response"
// 综合类型的接口
export default class RecommendService extends BaseService{
  constructor() {
    super();
  }
  static instance: RecommendService;
  static getInstance () {
    if (!RecommendService.instance) {
      RecommendService.instance = new RecommendService
    }
    return RecommendService.instance
  }

  // 获取推荐歌单,可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
  public getRecommendList = () :Promise<CommendSongResponse> => this.request.get("./personalized?limit=10")


  // 获取用户电台
}
