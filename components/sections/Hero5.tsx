'use client'
import Link from "next/link"
import Search1 from "@/components/sections/Search1"


export default function Hero5() {
	return (
		<>

			<section className="box-section block-banner-home1 position-relative hero-section">
				<div className="container position-relative z-1">
					
					<h4 className="color-white mb-35">Finally, Professional Car & Scooter rent  <br className="d-none d-lg-block" />
						possible with Carento pro</h4>

					<ul className="list-ticks-green">
						<li>Straight & Simple booking process</li>
						<li>Quick customer support</li>
						<li>Well maintained vehicles</li>
					</ul>

					<Link className="btn btn-primary btn-booking-hero mt-50 mb-4 " href="/booking-page">
                        Go to Booking
                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

				</div>
				<div className="bg-shape z-0" />

				{/* SEARCH BAR */}
				{/* <div className="hero-search-wrapper position-relative z-2 mt-30">
					<Search1 />
				</div>	 */}
			</section>

            <style jsx>{`
				:global(.hero-section) {
					padding-top: 120px;
					padding-bottom: 150px;
				}

				@media (max-width: 768px) {
					:global(.hero-section) {
					padding-top: 80px;
					padding-bottom: 150px;
					}
				}

				:global(.btn.btn-primary.btn-booking-hero) {
					background-color: var(--bs-neutral-200) !important;
					color: #101010 !important;
				}

				:global(.btn.btn-primary.btn-booking-hero:hover) {
					background-color: var(--bs-brand-2) !important;
					color: #101010 !important;
				}

				:global(.hero-search-wrapper) {
					position: absolute;
					left: 0;
					right: 0;
					bottom: -180px; /* pulls it slightly outside hero */
					z-index: 5;
				}

			`}</style>
		</>
	)
}
