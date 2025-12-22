'use client'

export default function CarCard1({ car, onBook }: any) {
  return (
    <div className="card-journey-small background-card hover-up">
      <div className="card-image">
        <img
          src={`/assets/imgs/cars-listing/cars-listing-6/${car.image}`}
          alt={car.name}
        />
      </div>

      <div className="card-info p-4 pt-30">
        <div className="card-title">
          <span className="text-lg-bold neutral-1000">
            {car.name}
          </span>
        </div>

        <div className="endtime">
          <div className="card-price">
            <h6 className="text-lg-bold neutral-1000">$89.32</h6>
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
  )
}
