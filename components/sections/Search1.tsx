
import Link from "next/link"
import HeroSearch from '../elements/HeroSearch'

export default function Search1() {
	return (
		<>

			<section className="box-section box-search-advance-home10 ">
				<div className="container">
					<div className="box-search-advance background-card">
						<div className="box-top-search">
							<div className="left-top-search">
								<Link className="category-link text-sm-bold btn-click active" href="#">Car rent</Link>
								<Link className="category-link text-sm-bold btn-click" href="#">Pick up</Link>
								<Link className="category-link text-sm-bold btn-click" href="#">Tour packages</Link>
							</div>
							<div className="right-top-search d-none d-md-flex">
								<Link className="text-sm-medium need-some-help" href="/contact">Manage reservations?</Link>
							</div>
						</div>
						<HeroSearch />
					</div>
				</div>
			</section>
		</>
	)
}
