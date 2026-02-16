import api, { handleApiError } from '../lib/api';

export const getCars = async () => {
    try {
        const response = await api.get('/cars/');
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
}

export const getCarById = async (id: string | number) => {
    try {
        const response = await api.get(`/cars/${id}/`);
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
}