'use client'
import Link from 'next/link'

export default function CarCard1({ car, onBook }: any) {
  return (
    <div className="card-journey-small background-card hover-up">
      <div className="card-image">
        <img
          src={`/assets/imgs/cars-listing/cars-listing-6/${car.image}`}
          alt={car.name}
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
      </div>

      <div className="card-info p-4 pt-30">
        <div className="card-title">
          <Link className="text-lg-bold neutral-1000 text-nowrap" href="#">
            {car.name}
          </Link>
        </div>
        
        <div className="card-program">
          <div className="card-location">
            {/* Pulls "Stone Town, Zanzibar" from JSON */}
            <p className="text-location text-sm-medium neutral-500">{car.location}</p>
          </div>
          
          <div className="card-facitlities">
            {/* Pulls specific car specs */}
            <p className="card-gear text-md-medium">{car.transmission || 'Automatic'}</p>
            <p className="card-fuel text-md-medium">{car.fuelType}</p>
            <p className="card-seat text-md-medium">{car.seats || '5'} seats</p>
          </div>

          <div className="endtime">
            <div className="card-price">
              {/* Pulls $60, $120, or $55 */}
              <h6 className="text-lg-bold neutral-1000">${car.price}</h6>
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