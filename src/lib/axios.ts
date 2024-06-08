import axios from "axios";
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Add a request interceptor
// api.interceptors.request.use(
//   async (config) => {
//     const session = await getSession();
//
//     console.log("config.url:", config.url);
//     console.log("config.baseURL:", config.baseURL);
//
//     if (session) {
//       config.headers.Authorization = `Bearer ${session.token.sub}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default api;
