import {BaseService} from "./BaseService"
import {SongListResponse} from "../entity/Response"
// 综合类型的接口
export default class SongsService extends BaseService{
  constructor() {
    super();
  }
  static instance: SongsService;
  static getInstance () {
    if (!SongsService.instance) {
      SongsService.instance = new SongsService
    }
    return SongsService.instance
  }

  // 获取歌单详情
  public getSongListDetail = (id: number | string) :Promise<SongListResponse> => this.request.get(`./playlist/detail?id=${id}`)
}
