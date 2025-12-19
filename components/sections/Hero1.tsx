import Cta3 from "@/components/sections/Cta3"
import Search1 from "@/components/sections/Search1"


export default function Hero1() {
	return (
		<>
			<section className="box-section block-banner-home1 position-relative">
				{/* use block-banner-home1 class in main.css to change the padding of the hero section
				, like whether it should start from top of the screen or not. */}

				{/* Your CTA content inside hero */}
				<div className="position-relative z-1">
					<Cta3 />
				</div>

				{/* SEARCH BAR */}
				<div className="hero-search-wrapper position-relative z-2 mt-30">
					<Search1 />
				</div>

			</section>
		</>
	)
}
