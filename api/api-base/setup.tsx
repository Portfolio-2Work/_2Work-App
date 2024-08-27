import appJson from "@/app.json";
import axios from "axios";
import { asyncGetData } from "@/utils/localStorage";

const apiClient = axios.create({
  baseURL: appJson.api,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token
apiClient.interceptors.request.use(
  async (config) => {
    const user = await asyncGetData("user");

    if (user) {
      const json = JSON.parse(user);
      config.headers.Authorization = `Bearer ${json.Token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
