import { Booking } from '../types';
import api, { handleApiError } from '../lib/api';

export const createBooking = async (bookingData: Booking) => {
    try {
        const response = await api.post('/bookings/', bookingData);
        return response.data;
    } catch (error) {
        throw handleApiError(error);
    }
}

export const getBookingStatus = async (referenceCode: string) => {
    try {
        const response = await api.get(`/bookings/${referenceCode}/`);
        return response.data
    } catch (error) {
        throw handleApiError(error);
    }
}