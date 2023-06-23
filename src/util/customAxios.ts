import axios, { AxiosError } from "axios";

export const customAxios = axios.create({
  baseURL: "http://server.fastwash.kro.kr:8080/",
});

customAxios.interceptors.request.use(
  async function (config: any) {
    const accessToken = localStorage.getItem("Authorization");
    accessToken &&
      (config.headers = {
        Authorization: `Bearer ${accessToken}`,
      });
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);
