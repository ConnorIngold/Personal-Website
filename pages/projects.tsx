import Layout from '../components/global/Layout'
import MyProjects from '../components/pages/projects/MyProjects'
import projectSteps from './../public/data/projectSteps'
import TitleIconBlocks from '../components/global/TitleIconBlocks/TitleIconBlocks'

const Projects = () => {
	return (
		<Layout>
			<main className="container">
				<section id="banner" className="flex border-b">
					<div className="w-1/2 lg:w-3/4">
						<div className="py-5 lg:py-10">
							<h1 className="mb-5 text-4xl lg:text-[80px] lg:leading-[110%]">My Projects</h1>
							<p className="pr-4">
								Over the past 5+ years, I&apos;ve been a front-end and Shopify developer at various agencies. In front-end development, I&apos;ve crafted engaging websites and applications using React.js and Vue.js, ensuring exceptional user experiences. Additionally, I've specialized in Shopify app and theme development, optimizing online stores and enhancing functionalities for businesses. My expertise lies in seamless integration, customization, and adhering to SEO best practices, ultimately improving online presence and driving growth through the Shopify platform.
							</p>
						</div>
					</div>
					<div className="w-1/2 border-l lg:w-1/4">
						<div className="flex-col lg:justify-evenly lg:max-w-[80%] mx-auto p-2 lg:py-4 h-full flex gap-5">
							<h5 className="uppercase font-Roboto-Mono">Custom Web Apps Building</h5>
							<h5 className="uppercase font-Roboto-Mono">Social media sites</h5>
							<h5 className="uppercase font-Roboto-Mono">Shopify theme development</h5>
						</div>
					</div>
				</section>

				<MyProjects />

				<TitleIconBlocks services={projectSteps} heading="PROJECT STEPS" sectionClassName="my-7 lg:my-14" />
			</main>
		</Layout>
	)
}

export default Projects
