import axios, { AxiosRequestConfig } from 'axios';

export class RequestService {
  static baseUrl = process.env.NEXT_PUBLIC_API_HOST;

  constructor(baseUrl?: string) {
    if (baseUrl) RequestService.baseUrl = baseUrl;
  }

  static async getRequest<RequestT>(
    route: string,
    token?: string,
    customHeader?: AxiosRequestConfig['headers']
  ) {
    const res = await axios.get<RequestT>(
      this.baseUrl + route,
      {
        headers: {
          ...customHeader,
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  }

  static async postRequest<RequestT, ResponseT>(
    route: string,
    body: any,
    token?: string,
    customHeader?: AxiosRequestConfig['headers']
  ) {
    const res = await axios.post<RequestT, ResponseT>(
      this.baseUrl + route,
      body,
      {
        headers: {
          ...customHeader,
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  }
}

export default RequestService;
