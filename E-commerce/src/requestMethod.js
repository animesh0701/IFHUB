const { default: axios } = require("axios");

const BASE_URL = "https://ifootballhub.herokuapp.com/api/";
const Token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmFmODI0NTI4MzY5NDMxYjM5NTNlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDc5NTMxNSwiZXhwIjoxNjYxMDU0NTE1fQ.mlNaBConhdi-dUzJE3W0t8t7IRqJX4bX4er_uRWruVU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${Token}` },
});
