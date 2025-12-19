'use client'

import ProgressBar from '@/components/elements/ProgressBar'
import CarCard1 from '@/components/elements/carcard/CarCard1'
import HeroSearch from '@/components/elements/HeroSearch'
import SortCarsFilter from '@/components/elements/SortCarsFilter'
import Layout from "@/components/layout/Layout"
import rawCarsData from "@/util/cars.json"
import useCarFilter from '@/util/useCarFilter'
import Link from "next/link"
import Marquee from 'react-fast-marquee'
import { Swiper, SwiperSlide } from "swiper/react"
import { swiperGroup3 } from '@/util/swiperOptions'

const carsData = rawCarsData.map(car => ({
  ...car,
  rating: parseFloat(car.rating as string)
}))

export default function CarsList3() {
  const {
    sortCriteria,
    itemsPerPage,
    handleSortChange,
    handleItemsPerPageChange,
    handleClearFilters,
    startItemIndex,
    endItemIndex,
    sortedCars,
  } = useCarFilter(carsData)

  

  return (
    <Layout footerStyle={1}>
      <div>
        <ProgressBar currentStepId={1} />

        {/* PAGE HEADER */}
        <div className="page-header-2 pt-30 background-body">
          <div className="custom-container position-relative mx-auto">
            <div className="bg-overlay rounded-12 overflow-hidden">
              <img
                className="w-100 h-100 img-fluid img-banner"
                src="/assets/imgs/page-header/banner6.png"
                alt="Carento"
              />
            </div>

            <div className="container position-absolute z-1 top-50 start-50 pb-70 translate-middle text-center">
              <span className="text-sm-bold bg-2 px-4 py-3 rounded-12">
                Find cars for sale and for rent near you
              </span>
              <h2 className="text-white mt-4">Locate the Car That Fits You Best</h2>
              <span className="text-white text-lg-medium">
                Search and find your best car rental with easy way
              </span>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <section className="box-section box-search-advance-home10 background-body">
          <div className="container">
            <div className="box-search-advance background-card wow fadeIn">
              <div className="box-top-search">
                <div className="left-top-search">
                  <Link className="category-link text-sm-bold btn-click active" href="#">Car rent</Link>
                  <Link className="category-link text-sm-bold btn-click" href="#">Pick up</Link>
                  <Link className="category-link text-sm-bold btn-click" href="#">Tour packages</Link>
                </div>
                <div className="right-top-search d-none d-md-flex">
                  <Link className="text-sm-medium need-some-help" href="/contact">
                    Manage Reservations
                  </Link>
                </div>
              </div>
              <HeroSearch />
            </div>
          </div>
        </section>

        {/* TITLE */}
        <section className="section-box pt-50 background-body">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-md-9 mb-30 wow fadeInUp">
                <h4 className="title-svg neutral-1000 mb-15">Choose Vehicle</h4>
                <p className="text-lg-medium text-bold neutral-500">
                  Turning dreams into reality with versatile vehicles.
                </p>
              </div>

			  <div className="col-md-3 position-relative mb-30 wow fadeInUp">
							<div className="box-button-slider box-button-slider-team justify-content-end">
								<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-2" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-f147def6ba09c37a">
									<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
										<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-2" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-f147def6ba09c37a">
									<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
										<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
							</div>
						</div>
            </div>
          </div>
        </section>

        {/* CAR SLIDER */}
        <section className="box-section block-content-tourlist background-body">
          <div className="container">
            <div className="box-content-main pt-20">
              <div className="content-right">



                {/* FILTER BAR (UNCHANGED) */}
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

				

                {/* SLIDER */}
                <div className="box-grid-tours wow fadeIn">
                  <Swiper {...swiperGroup3} className="swiper-container swiper-group-3">
                    {sortedCars.map((car) => (
                      <SwiperSlide key={car.id} className="pt-2">
                        <CarCard1 car={car} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* BRANDS MARQUEE (UNCHANGED) */}
        <div className="background-100 pt-55 pb-55">
          <div className="container">
			<Marquee direction='left' pauseOnHover={true} className="carouselTicker carouselTicker-left box-list-brand-car justify-content-center  wow fadeIn">
				<ul className="carouselTicker__list">
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/lexus.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/lexus-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/mer.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/mer-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/bugatti.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/bugatti-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/jaguar.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/jaguar-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/honda.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/honda-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/chevrolet.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/chevrolet-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/acura.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/acura-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/bmw.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/bmw-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/toyota.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/toyota-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/lexus.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/lexus-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/mer.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/mer-w.png" alt="Carento" />
						</div>
					</li>
					<li className="carouselTicker__item">
						<div className="item-brand">
							<img className="light-mode" src="/assets/imgs/page/homepage2/bugatti.png" alt="Carento" />
							<img className="dark-mode" src="/assets/imgs/page/homepage2/bugatti-w.png" alt="Carento" />
						</div>
					</li>
				</ul>
			</Marquee>
          </div>
        </div>

      </div>
    </Layout>
  )
}
