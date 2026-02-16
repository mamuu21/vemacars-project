import api, { handleApiError } from "../lib/api";

export const getCarImages = async (carId: number) => {
    try {
        const response = await api.get(`/cars/${carId}/images/`);
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
}