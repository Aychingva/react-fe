import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com"
export const api = axios.create({
    baseURL: apiUrl
});


