import axios from "axios";

let baseURL;
if (process.env.NODE_ENV === "production") {
  baseURL = "http://localhost:3000";
} else if (process.env.NODE_ENV === "testing") {
  baseURL = "http://localhost:3000";
} else if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "http://localhost:3000";
}

let server = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  withCredentials: false
});
 server.interceptors.request.use(
    config => {
      return config
    },
    err => {
      return Promise.reject(err)
    }
  )
server.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
export default server;

