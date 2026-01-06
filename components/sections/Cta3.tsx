
import Link from "next/link"

export default function Cta3() {
	return (
		<>

			<section className="background-body">
				<div className="box-cta-3 background-100 py-96 mx-auto rounded-3 position-relative overflow-hidden">
					<div className="container">
						<div className="row align-items-center">

							<div className="col-lg-5 pe-lg-5">
								<Link className="btn btn-primary mt-5 mb-4 " href="/booking-page">
									Go to Booking
									<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								
								<p className="text-lg-medium neutral-500 mb-4 wow fadeInUp">
									Finally, Professional Car & Scooter rent  <br className="d-none d-lg-block" />
									possible with Vema Cars
								</p>
								<div className="row">
									<div className="col">
										<ul className="list-ticks-green">
											<li className="neutral-1000">Straight & simple booking process </li>
											<li className="neutral-1000">Quick customer support </li>
											<li className="neutral-1000">Well maintained vehicles</li>
										</ul>
									</div>
								</div>
								
							</div>

							<div className="col-lg-6 offset-lg-1 position-relative z-1 mt-lg-0 mt-4">
								<div className="box-image-payment-2">
									<div className="row align-items-center">
										<div className="col-sm-4 mb-30">
											<img className="bdrd8 w-100 " data-wow-delay="0.1s" src="/assets/imgs/znz/img-1.jpg" alt="VemaCars" />
										</div>
										<div className="col-sm-4 mb-30">
											<img className="bdrd8 w-100 mb-15 " data-wow-delay="0.2s" src="/assets/imgs/znz/img-2.jpg" alt="VemaCars" />
											<img className="bdrd8 w-100 " data-wow-delay="0.3s" src="/assets/imgs/znz/img-3.png" alt="VemaCars" />
										</div>
										<div className="col-sm-4 mb-30">
											<img className="bdrd8 w-100 mb-15" data-wow-delay="0.4s" src="/assets/imgs/znz/img-5.webp" alt="VemaCars" />
											<img className="bdrd8 w-100" data-wow-delay="0.5s" src="/assets/imgs/znz/img-6jpg" alt="Vemacars" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill">
					</div>
				</div>
			</section>
		</>
	)
}
