import axios from "axios";

// Conexión a nuestra API
export const reqResApi = axios.create({
baseURL: "https://reqres.in/api/"
});
