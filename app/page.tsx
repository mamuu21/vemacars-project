import Layout from "@/components/layout/Layout"
import App from "@/components/sections/App"
import Blog1 from "@/components/sections/Blog1"
import Search1 from "@/components/sections/Search1"
import Hero2 from "@/components/sections/Hero2"
import Hero1 from "@/components/sections/Hero1"
import Hero3 from "@/components/sections/Hero3"
import Hero4 from "@/components/sections/Hero5"
import CarsList3 from "./cars-list-3/page"
import Hero5 from "@/components/sections/Hero5"
import Brand2 from "@/components/sections/Brand2"



export default function Home() {

	return (
		<>

			<Layout headerStyle={2} footerStyle={1}>
				{/* <CtaHero/> */}
				{/* <Hero1 /> */}
				<Hero5 />
				{/* <Search1 /> */}
				<Blog1 />
				<App />
				<Brand2 />
				{/* <CarsList3/> */}
			</Layout>
		</>
	)
}