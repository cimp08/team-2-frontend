import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export function register(data) {
  return axios.post(`${apiUrl}/users`, data);
}
