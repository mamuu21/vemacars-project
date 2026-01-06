'use client'
import Link from "next/link"

export default function Hero4() {
	return (
		<>
			<section className="background-body pt-0 pb-50">
				<div className="container">
					<div className="item-banner-slide-review d-flex align-items-center rounded-12">
						<div className="ps-md-5 ps-2 position-relative z-1">
							<Link href="#" className="btn btn-primary btn-booking-hero mt-30">
								Go to Booking
								<svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} viewBox="0 0 24 25" fill="none">
									<path
										d="M12 19.5L19 12.5L12 5.5M19 12.5L5 12.5"
										stroke="#101010"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</Link>

							<h3 className="mt-20 mb-20 color-white">
								Hyundai Tucson Plug-In <br className="d-none d-md-block" />
								Hybrid 2025 review
							</h3>

							<p className="text-lg-medium color-white">
								The Tucson Plug-in Hybrid is easy to drive and provides a sufficient all-electric range.
							</p>
						</div>
					</div>
				</div>
			</section>

			<style jsx>{`
				:global(.btn.btn-primary.btn-booking-hero) {
					background-color: var(--bs-neutral-200) !important;
					color: #101010 !important;
				}

				:global(.btn.btn-primary.btn-booking-hero:hover) {
					background-color: var(--bs-brand-2) !important;
					color: #101010 !important;
				}
			`}</style>
		</>
	)
}
