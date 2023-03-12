import Service from '../../../components/Service'
import ProjectImgCard from '../../../components/global/ProjectImgCard'

const projects = [
	{
		id: 1,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		alt: 'project',
		width: 1404,
		height: 600,
		link: '#',
		color: '#baa086',
	},
	{
		id: 2,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		alt: 'project',
		width: 1404,
		height: 600,
		link: '#',
		color: '#baa086',
	},
	{
		id: 3,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		alt: 'project',
		width: 1404,
		height: 600,
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

const MyProjects = () => {
	return (
		<section className="my-7 lg:my-14">
			{projects.map((project, index) => (
				<Service
					key={project.id}
					aboveHeadingText="My work"
					buttonText="view projects"
					name={services[index].name}
					date="April 2022"
					description={services[index].description}
					url={services[index].url}
					align={'left'}
				>
					<ProjectImgCard backgroundColor={project.color} url={project.url} width={project.width} height={project.height} link={project.link} alt={project.alt} />
				</Service>
			))}
		</section>
	)
}

export default MyProjects
