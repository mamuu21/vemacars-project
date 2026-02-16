
'use client'
import CarCard2 from '@/components/elements/carcard/CarCard2'
import SortCarsFilter from '@/components/elements/SortCarsFilter'
import ByPagination from '@/components/Filter/ByPagination'
import Layout from "@/components/layout/Layout"
import useCarFilter from '@/util/useCarFilter'
import Marquee from 'react-fast-marquee'
import { Car } from '@/src/types'
import { getCars } from '@/src/services/cars'
import { useEffect, useState } from "react"

export default function CarsList4() {
	const [carsData, setCarsData] = useState<Car[]>([])
	const [loading, setLoading] = useState(true)

	const {
		sortCriteria,
		itemsPerPage,
		currentPage,
		sortedCars,
		totalPages,
		paginatedCars,
		handleSortChange,
		handleItemsPerPageChange,
		handlePageChange,
		handlePreviousPage,
		handleNextPage,
		handleClearFilters,
		startItemIndex,
		endItemIndex,
	} = useCarFilter(carsData)

	useEffect(() => {
		const fetchCars = async () => {
			try {
				const data = await getCars()
				setCarsData(data)
			} catch (error) {
				console.error("Error fetching cars:", error)
			} finally {
				setLoading(false)
			}
		}

		fetchCars()
	}, [])

	if (loading) {
		return <Layout footerStyle={1}><div className="container py-5 mt-100">Loading vehicles...</div></Layout>
	}

	return (
		<>
			<Layout footerStyle={1}>
				<div>
					<section className="section-box pt-50 background-body">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-9 mb-30 wow fadeInUp">
									<h4 className="title-svg neutral-1000 mb-15">Available Vehicles</h4>
								</div>
							</div>
						</div>
					</section>

					<section className="box-section block-content-tourlist background-body">
						<div className="container">
							<div className="box-content-main pt-20">
								<div className="content-right">
									<div className="box-filters mb-25 pb-5 border-bottom border-1">
										<SortCarsFilter
											sortCriteria={sortCriteria}
											handleSortChange={handleSortChange}
											itemsPerPage={itemsPerPage}
											handleItemsPerPageChange={handleItemsPerPageChange}
											handleClearFilters={handleClearFilters}
											startItemIndex={startItemIndex}
											endItemIndex={endItemIndex}
											sortedCars={sortedCars}
										/>
									</div>
									<div className="box-grid-hotels wow fadeIn">
										<div className="row">
											{paginatedCars.length === 0 && (
												<div className="text-center py-5">
													No vehicles found matching your criteria.
												</div>
											)}
											{paginatedCars.map((car) => (
												<div className="col-xl-12 col-lg-12" key={car.id}>
													<CarCard2 car={car} />
												</div>
											))}
										</div>
									</div>
									<ByPagination
										handlePreviousPage={handlePreviousPage}
										totalPages={totalPages}
										currentPage={currentPage}
										handleNextPage={handleNextPage}
										handlePageChange={handlePageChange}
									/>
								</div>
							</div>
						</div>
						<div className="background-100 pt-55 pb-55">
							<div className="container">
								<Marquee direction='left' pauseOnHover={true} className="carouselTicker carouselTicker-left box-list-brand-car justify-content-center wow fadeIn">
									<ul className="carouselTicker__list">
										{[
											"lexus", "mer", "bugatti", "jaguar", "honda", "chevrolet", "acura", "bmw", "toyota"
										].map((brand) => (
											<li key={brand} className="carouselTicker__item">
												<div className="item-brand">
													<img className="light-mode" src={`/assets/imgs/page/homepage2/${brand}.png`} alt={brand} />
													<img className="dark-mode" src={`/assets/imgs/page/homepage2/${brand}-w.png`} alt={brand} />
												</div>
											</li>
										))}
									</ul>
								</Marquee>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</>
	)
}