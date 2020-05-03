import axios, {AxiosRequestConfig, AxiosResponse, AxiosError, AxiosInstance} from "axios";

// 所有service的基类

export abstract class BaseService {
  protected axios = axios;
  protected BASE_URL = "./netease-api";
  protected constructor() {
    this.request = axios.create({
      baseURL: this.BASE_URL,
    });
    this.request.interceptors.response.use((res: AxiosResponse) :Promise<AxiosResponse<any>> | AxiosResponse<any> => {
      return Promise.resolve(res.data);
    }, (e: AxiosError) => {
      console.error(e)
    })
  }
  protected request: AxiosInstance
}
