import Layout from "@/components/layout/Layout"
import App from "@/components/sections/App"
import Blog1 from "@/components/sections/Blog1"
import Search1 from "@/components/sections/Search1"
import CtaHero from "@/components/sections/Hero"
import Hero1 from "@/components/sections/Hero1"
import CarsList3 from "./cars-list-3/page"



export default function Home() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={1}>
				{/* <CtaHero/> */}
				<Hero1 />
				{/* <Search1 /> */}
				<Blog1 />
				<App />
				{/* <CarsList3/> */}
			</Layout>
		</>
	)
}