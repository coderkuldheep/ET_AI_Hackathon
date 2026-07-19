import api from "./api";

export const getDiagnosis = async (machineId) => {

    const response = await api.get(

        `/diagnosis/${machineId}`

    );

    return response.data;

};