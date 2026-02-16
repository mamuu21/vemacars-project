'use client'
import Link from 'next/link'
import { getMediaUrl } from '@/src/lib/api'
import { Car } from '@/src/types' // Importing your interface

interface CarCardProps {
  car: Car;
  onBook: (car: Car) => void;
}


export default function CarCard1({ car, onBook }: CarCardProps) {
  // 1. Logic to find the primary image from your CarImage[] array
  const displayImage = car.images?.find(img => img.is_primary)?.image ||
    car.images?.[0]?.image;

  return (
    <div className="card-journey-small background-card hover-up">
      <div className="card-image">
        <img
          src={displayImage ? getMediaUrl(displayImage) : "/placeholder.jpg"} // Using the extracted image URL with fallback
          alt={car.name}
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
      </div>

      <div className="card-info p-4 pt-30">
        <div className="card-title">
          <Link className="text-lg-bold neutral-1000 text-nowrap" href={`/cars/${car.id}`}>
            {car.name}
          </Link>
        </div>

        <div className="card-program">
          <div className="card-location">
            {/* Note: Ensure 'location' is returned by your Serializer */}
            <p className="text-location text-sm-medium neutral-500">{car.location}</p>
          </div>

          <div className="card-facitlities">
            <p className="card-gear text-md-medium">{car.transmission}</p>
            {/* Changed from car.fuelType to car.fuel_type to match your Django model */}
            <p className="card-fuel text-md-medium">{car.fuel_type}</p>
            <p className="card-seat text-md-medium">{car.seats} seats</p>
          </div>

          <div className="endtime">
            <div className="card-price">
              {/* Changed from car.price to car.price_per_day to match your Model */}
              <h6 className="text-lg-bold neutral-1000">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(Number(car.price_per_day))}
              </h6>
              <p className="text-md-medium neutral-500">/ day</p>
            </div>
            <div className="card-button">
              <button
                className="btn btn-primary"
                onClick={() => onBook(car)}
              >
                Select Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}