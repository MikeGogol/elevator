import axios from "axios";

export const baseURL = "http://localhost:3001";
const axiosInstance = axios.create({ baseURL, timeout: 5000 });

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("Logging the error", error);
    alert("An unexpected error occured");
  }

  return Promise.reject(error);
});

export default axiosInstance;
