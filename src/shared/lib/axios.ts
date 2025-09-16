import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_PUBLIC_VERSION = "/api/v1/public";
const API_PRIVATE_VERSION = "/api/v1";

const axiosConfig = axios.create({
    baseURL: API_URL + API_PUBLIC_VERSION,
    headers: {
      Accept: "application/json",
     "x-village-id": process.env.NEXT_PUBLIC_VILLAGE_ID,
    },
    timeout: 15000
  });
  
axiosConfig.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        console.error("Request error:", error);
        return Promise.reject(error); 
    }
);

axiosConfig.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 404) {
            return { data: null }; 
        }
        return Promise.reject(error);
    }
);

export const axiosConfigPrivate = axios.create({
  baseURL: API_URL + API_PRIVATE_VERSION,
  headers: {
    Accept: "application/json",
     "x-village-id": process.env.NEXT_PUBLIC_VILLAGE_ID,
  },
});

axiosConfigPrivate.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosConfigPrivate.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 404) {
            return { data: null }; 
        }
        return Promise.reject(error);
    }
);

export default axiosConfig;

// // shared/lib/axios.ts
// import axios from 'axios'

// export const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   withCredentials: true, // kalau kamu butuh cookie/auth di cross-origin
// })

// // OPTIONAL: Interceptor request → misalnya inject token
// api.interceptors.request.use(
//   (config) => {
//     const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
//     if (token) {
//       // config.headers.Authorization = `Bearer ${token}`
//       // config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTU3YjUyZjJhMTZlNjI1YjlhMjExMTZlZDRmMTY4MmUzMWEzMTJhZjY5YTliMGRmY2YzMjIzZTk0NWU5ZjM2ZWU0YzQ5OGQzZmRlM2M2NTciLCJpYXQiOjE3NDYxNDkyMzcuNjI2Mjc3LCJuYmYiOjE3NDYxNDkyMzcuNjI2MjgxLCJleHAiOjE3Nzc2ODUyMzcuNjIxOTQsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.dvltRehKjeaS6E9fT5p1WVqYTgsV19Bwg3GlfcjGeFp7z2jdLCtIlXbQVh4OgEiqpuNGljt3G_03hc5mhsL_B8SzOkVg6xyXwFx-RRG4wwrSgqwhInM0H5ke1Tz_fxD7GsX53EpWBbpLTptMxgn85crLv7Thh_O6eU2lauGp3js_ECJYVlHpCXoxld6s7K0P4KHRR42It27-kM16CWUbmvUI01mxAW9zp_jFwiLA_1LnmOmPaFf8aMaiy4BeZQ5nhKyUHLyZHi9ko4ei0zDdAcHSSiPKwsHWAyDXVhLQHNF9EUrePL-YZOeKwwFO6XNHtnKAnKc0_jo2pfTD5ncQ_p3faHAEddFWV-y4OkWysv9S6lwLGQjufsMFVecrBSe7wO32D-imqemP9bY75YymUz2eOC7AA-QjsI1QWU1Mt6pdRk_lSvywE4eGBumkert-k-tJ8x7ch13z5a0yzFU2Cjfa79wmO1Tgv4WJCtcDiFhi9wiYuq5VuT5JZtkFRsTjryT6jO0q1kzALq4D8iF8f1FSJYAF2j2eVkK9qyZCx499WJ3UqYzD_TyLJoAyntaO0QcIEPk6X4bl3n82pAupX3bT6c6evo3Otd--aGX2SCyIx1Jq-2sMc2gO-0vMQTaR0ccXkLppJjX3xdmFd268Q-CbvVXDZqAp2-zH4S_oirE`
//       config.timeout= 15000
//     }
//     return config
//   },
//   (error) => Promise.reject(error)
// )

// // OPTIONAL: Interceptor response → misalnya redirect jika 401
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // bisa redirect ke login misalnya
//       console.warn('Unauthorized, redirect to login...')
//     }
//     return Promise.reject(error)
//   }
// )
