export interface BlogPost {
    id: number;
    title: string;
    content: string;
    image?: string;
    created_at: string;
    updated_at: string;
    is_featured?: boolean;
}

export interface CarImage {
    id: number;
    image: string;
    is_primary: boolean;
}

export interface Car {
    id: number;
    name: string;
    overview?: string;
    price_per_day: number;
    fuel_type: string;
    transmission: string;
    location: string;
    seats: number;
    status: string;
    images: CarImage[];
    car_type?: string;
    amenities?: string;
    rating?: number;
}

export interface CustomerInfo {
    full_name: string;
    email: string;
    phone_number: string;
}

export interface Booking {
    id?: number;
    reference_code?: string;
    car: number;
    customer_info: CustomerInfo;
    rental_start: string;
    rental_end: string;
    pickup_location: string;
    dropoff_location: string;
    total_price?: number;
    status?: string;
}
