import api from "./api";

export const getPredictions = async () => {

    const response = await api.get("/prediction");

    return response.data;

};