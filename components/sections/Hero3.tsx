'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import Link from 'next/link'
import { swiperGroup1 } from '@/util/swiperOptions'

export default function Hero3() {
	return (
		<>
			<section className="box-section block-banner-home3 position-relative">
				<div className="container-banner-home3 position-relative">
					<div className="box-swiper">
						<Swiper {...swiperGroup1} className="swiper-container swiper-group-1">
							<div className="swiper-wrapper">
								<SwiperSlide>
									<div className="item-banner-slide banner-1">
										<div className="container text-center position-relative z-1">
											<Link className="btn btn-primary mt-5 mb-4 " href="/booking-page">
												Go to Booking
												<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</Link>

											<h4 className="mt-20 mb-20 color-white">Finally, Professional Car & Scooter rent possible with Vema Cars</h4>
											
											<div className="box-cta-3">
												<ul className="list-ticks-green text-center">
													<li>
													<h6 className="color-white heading-6-medium">
														Straight & simple booking process
													</h6>
													</li>
													<li>
													<h6 className="color-white heading-6-medium">
														Quick customer support
													</h6>
													</li>
													<li>
													<h6 className="color-white heading-6-medium">
														Well maintained vehicles
													</h6>
													</li>
												</ul>
											</div>


											
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="item-banner-slide banner-2">
										<div className="container text-center position-relative z-1">
											<span className="btn background-brand-2 px-3 py-3 rounded-12 text-sm-bold text-dark">+3600 cars for you</span>
											<h1 className="mt-20 mb-20 color-white">Discover your next car today.</h1>
											<h6 className="color-white heading-6-medium">
												Explore our wide selection and experience a smooth buying process <br className="d-none d-md-block" />
												with personalized support at every stage.
											</h6>
											
										</div>
									</div>
								</SwiperSlide>
							</div>
							<div className="d-none d-md-block">
								<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-2" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-9c1b729b91027a37b">
									<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
										<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
								<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-2" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-9c1b729b91027a37b">
									<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
										<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>
							</div>
						</Swiper>
					</div>
				</div>
			</section>

		</>
	)
}
