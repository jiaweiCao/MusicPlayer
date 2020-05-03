import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from "axios";

// 所有service的基类

export abstract class BaseService {
  protected axios = axios;
  protected BASE_URL = "./netease-api"
  constructor() {
  }



  protected request = (config: AxiosRequestConfig): Promise<any> => {
    this.axios.interceptors.response.use((res: AxiosResponse) :Promise<AxiosResponse<any>> | AxiosResponse<any> => {
      return Promise.resolve(res.data);
    }, (e: AxiosError) => {
      console.error(e)
    })
    return this.axios({
        ...config,
        baseURL: this.BASE_URL,
        timeout: 30 * 1000
      })
  };
}
