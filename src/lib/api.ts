import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/';

if (!API_URL) {
    console.warn('NEXT_PUBLIC_API_URL is not defined in your .env file');
}

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// This interceptor will automatically handle adding the Slash 
// to prevent Django's 301 Redirect issues
api.interceptors.request.use((config) => {
    if (config.url && !config.url.endsWith('/') && !config.url.includes('?')) {
        config.url += '/';
    }
    return config;
});

export const getMediaUrl = (path?: string | null) => {
    if (!path) return "/placeholder.jpg";
    if (path.startsWith('http')) return path;

    // Get the base URL (e.g., http://127.0.0.1:8000) from API_URL
    const baseUrl = API_URL.replace(/\/api\/?$/, '');
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${cleanPath}`;
}


/**
 * Standardizes API error handling across services
 */
export const handleApiError = (error: any) => {
    if (axios.isAxiosError(error)) {
        // Handle Django REST Framework style errors
        const message = error.response?.data?.detail ||
            error.response?.data?.error ||
            error.message ||
            'An unexpected error occurred';
        console.error('API Error:', {
            status: error.response?.status,
            data: error.response?.data,
            message: message
        });
        throw new Error(message);
    }
    console.error('Unexpected Error:', error);
    throw error;
};

export default api;