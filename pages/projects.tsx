import Layout from '../components/global/Layout'
import MyProjects from '../components/pages/projects/MyProjects'
import projectSteps from './../public/data/projectSteps'
import TitleIconBlocks from '../components/global/TitleIconBlocks'

const Projects = () => {
	return (
		<Layout>
			<main className="container">
				<section id="banner" className="flex border-b">
					<div className="w-1/2 lg:w-3/4">
						<div className="py-5 lg:py-10">
							<h1 className="mb-5 text-4xl lg:text-[80px] lg:leading-[110%]">My Projects</h1>
							<p className="pr-4">
								There will be a small description of the services, but there is no text yet, <br /> so I added this text here as a placeholder
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
