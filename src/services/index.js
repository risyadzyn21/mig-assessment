import axios from "axios";
const BASE_URL = "https://mitramas-test.herokuapp.com";

export const setToken = (currentUser) => {
  const user = localStorage.setItem("user", JSON.stringify(currentUser));
  return user;
};

export const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token;
};

export const removeToken = () => {
  localStorage.removeItem("user");
};

const API = axios.create({
  baseURL: BASE_URL
});

API.interceptors.request.use(
  (config) => {
    const token = getToken();
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpc3lhZHp5bkBnbWFpbC5jb20iLCJpZCI6ODcsImlhdCI6MTYzNTg1NzE4NH0.Wf-HD8tD7FwvBPmQTZ-Ey_fL_7wG30Q-H6CzrAkvJ2I";

    if (token) {
      config.headers = {
        Authorization: `${token}`
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use((response) => {
  // Check apakah ada tokennya apa ngga
  // Kalo ada save ke localstorage
  if (response.data.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data.access_token));
  }
  return response.data;
});

export default API;

