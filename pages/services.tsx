// arrow syntax
import Layout from '../components/Layout'
import Service from '../components/Service'
import ProjectCard from '../components/ProjectCard'

// a services array

const Services = () => {
	const projects = [
		{
			id: 1,
			name: 'Autonative',
			url: '/images/D&D_Page_image.png',
			width: 630,
			height: 300,
			link: '#',
			color: '#baa086',
		},
		{
			id: 2,
			name: 'Autonative',
			url: '/images/D&D_Page_image.png',
			width: 630,
			height: 300,
			link: '#',
			color: '#baa086',
		},
		{
			id: 3,
			name: 'Autonative',
			url: '/images/D&D_Page_image.png',
			width: 630,
			height: 300,
			link: '#',
			color: '#baa086',
		},
	]

	const services = [
		{
			id: 1,
			name: 'Custom Web Apps Building',
			description: 'There will be a small description of the service, but there is no text yet, so I added this text here as a placeholder',
			url: '/images/D&D_Page_image.png',
		},
		{
			id: 2,
			name: 'Social Media Marketing',
			description: 'There will be a small description of the service, but there is no text yet, so I added this text here as a placeholder',
			url: '/images/D&D_Page_image.png',
		},
		{
			id: 3,
			name: 'Shopify theme development',
			description: 'There will be a small description of the service, but there is no text yet, so I added this text here as a placeholder',
			url: '/images/D&D_Page_image.png',
		},
	]

	return (
		<Layout>
			<main className="container">
				<section id="banner" className="flex border-b">
					<div className="w-1/2 lg:w-3/4">
						<div className="py-5 lg:py-10">
							<h1 className="mb-5 text-4xl lg:text-[80px] lg:leading-[110%]">My Services</h1>
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
				{projects.map((project, index) => (
					<Service key={project.id} name={services[index].name} description={services[index].description} url={services[index].url} align={index % 2 === 0 ? 'left' : 'right'}>
						<ProjectCard name={project.name} backgroundColor={project.color} url={project.url} width={project.width} height={project.height} link={project.link} />
					</Service>
				))}
			</main>
		</Layout>
	)
}

export default Services
