import api, { handleApiError } from '../lib/api';

export const getBlogs = async () => {
    try {
        const response = await api.get('/blogs/');
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
}

export const getBlogDetails = async (pk: number) => {
    try {
        const response = await api.get(`/blogs/${pk}/`);
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
}