import axios from "axios";

const api = axios.create({
  // To send for the Rocketseat:
  // baseURL: "http://localhost:3333",
  // To see with Android Studio:
  baseURL: 'http://10.0.2.2:3333'
});

export default api;
