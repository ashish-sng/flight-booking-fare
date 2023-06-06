import axios from "axios";
import { SERVER_URL } from "../constant";

export const loginApi = async (email, password) =>
  axios.post(`${SERVER_URL}/login`, {
    email,
    password,
  });

export const registerApi = async (email, password) =>
  axios.post(`${SERVER_URL}/register`, {
    email,
    password,
  });
