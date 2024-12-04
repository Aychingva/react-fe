import { api } from "../api";

export const getPosts = async (id) => {
    const response = await api.get(`/posts/${id}`);
    console.log(response.data);
    if (!response.data) {
        throw new Error("No data");
    }
    return response.data;
};



export const getTodo = async (id) => {
    const response = await api.get(`/todos/${id}`);
    console.log(response.data);
    if (!response.data) {
        throw new Error("No data");
    }
    return response.data;
};
