import axios from "axios";

const BASE_URL = "https://ecommerce-backend-7cyp.onrender.com/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTM1ZTEzYjQxYWE5MGVkOGFmNmVmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODEzNDUyMiwiZXhwIjoxNjg4OTk4NTIyfQ.1bLZIwjGN1H0y_Mu8OOlfk9mXE21-TA8dT9wBqr-aCc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: `Bearer ${TOKEN}`,
});

export const newRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});
