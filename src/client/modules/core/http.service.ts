import axios from 'axios';

const BASE_URL = process.env.API_ROOT; // Consider using environmental.const file for this

export const HttpService = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 25000,
});
