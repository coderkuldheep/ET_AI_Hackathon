import api from "./api";

export const uploadMachineImages = async (files) => {

    const formData = new FormData();

    files.forEach(file => {
        formData.append("images", file);
    });

    const response = await api.post(
        "/upload/machines",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};