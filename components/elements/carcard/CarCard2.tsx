import Link from 'next/link'
import { Car } from '@/src/types'
import { getMediaUrl } from '@/src/lib/api'

interface CarCardProps {
	car: Car
}

export default function CarCard2({ car }: CarCardProps) {
	const displayImage = car.images?.find(img => img.is_primary)?.image || car.images?.[0]?.image;

	return (
		<>
			<div className="card-flight card-hotel card-property background-card border">
				<div className="card-image">
					<Link href={`/cars/${car.id}`}>
						<img
							src={displayImage ? getMediaUrl(displayImage) : "/placeholder.jpg"}
							alt={car.name}
							style={{ width: '100%', height: '250px', objectFit: 'cover' }}
						/>
					</Link>
				</div>
				<div className="card-info p-md-40 p-3">

					<div className="card-title">
						<Link className="heading-6 neutral-1000" href={`/cars/${car.id}`}>{car.name}</Link>
					</div>
					<div className="card-program">
						<div className="card-location mb-25">
							<p className="text-location text-md-medium neutral-500">{car.location}</p>
						</div>
						<div className="card-facilities">
							<div className="item-facilities">
								<p className="room text-md-medium neutral-1000">Unlimited mileage</p>
							</div>
							<div className="item-facilities">
								<p className="size text-md-medium neutral-1000">{car.transmission}</p>
							</div>
							<div className="item-facilities">
								<p className="bed text-md-medium neutral-1000">{car.fuel_type}</p>
							</div>
							<div className="item-facilities">
								<p className="bathroom text-md-medium neutral-1000">{car.seats} seats</p>
							</div>
							<div className="item-facilities">
								<p className="pet text-md-medium neutral-1000">{car.status}</p>
							</div>
						</div>
						<div className="endtime">
							<div className="card-price">
								<p className="text-md-medium neutral-500 mr-5">From</p>
								<h6 className="heading-6 neutral-1000">
									{new Intl.NumberFormat('en-US', {
										style: 'currency',
										currency: 'USD',
									}).format(Number(car.price_per_day))}
								</h6>
								<p className="text-md-medium neutral-500">/ day</p>
							</div>
							<div className="card-button">
								<Link className="btn btn-gray" href={`/cars/${car.id}`}>Book Now</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
