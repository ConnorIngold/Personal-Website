// arrow syntax
import Layout from '../components/global/Layout'
import Service from '../components/Service'
import ProjectImgCard from '../components/global/ProjectImgCard'
import ContactSection from '../components/global/Contact/ContactSection'
import projectSteps from './../public/data/projectSteps'
import TitleIconBlocks from '../components/global/TitleIconBlocks/TitleIconBlocks'

// a services array

const Services = () => {
	const projects = [
		{
			id: 1,
			name: 'Autonative',
			url: '/images/D&D_Page_image.png',
			alt: 'project',
			width: 904,
			height: 302,
			link: '#',
			color: '#baa086',
		},
		{
			id: 2,
			name: 'Autonative',
			url: '/images/D&D_Page_image.png',
			alt: 'project',
			width: 904,
			height: 302,
			link: '#',
			color: '#baa086',
		},
		{
			id: 3,
			name: 'Autonative',
			url: '/images/D&D_Page_image.png',
			alt: 'project',
			width: 904,
			height: 302,
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
					<Service
						key={project.id}
						buttonText="View project"
						name={services[index].name}
						description={services[index].description}
						url={services[index].url}
						align={index % 2 === 0 ? 'left' : 'right'}
					>
						<ProjectImgCard backgroundColor={project.color} url={project.url} width={project.width} height={project.height} link={project.link} alt={project.alt} />
					</Service>
				))}
				<TitleIconBlocks services={projectSteps} heading="PROJECT STEPS" sectionClassName="my-7 lg:my-14" />
				<div className="border-b"></div>
				<ContactSection title="Let???s bring your business to the next level" />
			</main>
		</Layout>
	)
}

export default Services
