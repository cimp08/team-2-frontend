import axios from "axios";
import jwtDecode from "jwt-decode";

const apiUrl = process.env.REACT_APP_API_URL;

export function login(data) {
  return axios.post(`${apiUrl}/auth`, data);
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (error) {
    console.log("Current user is not unavaible");
    return null;
  }
}

export function logout() {
  localStorage.removeItem("token");
}
