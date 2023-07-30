import ProjectCard from './global/ProjectImgCard'

const projects = [
	{
		id: 1,
		name: 'candy-kittens',
		title: 'Candy Kittens',
		description:
			'Candy Kittens is a British confectionery brand that produces gourmet sweets with playful flavors and natural ingredients. It was founded in 2012 and is known for its bold packaging. They also offer vegan and vegetarian options.',
		projectURL: 'https://candykittens.co.uk',
		projectDescription:
			'The Candy Kittens online Shopify store is an e-commerce platform that allows customers to browse, purchase, and pay for products online. Its hosted on Shopifys servers, responsible for managing the websites functionality, security, and order processing.',
		url: '/images/Candy_Kittens_page_image.png',
		alt: 'project',
		width: 1817,
		height: 960,
		service: 'Shopify theme development',
		link: '/projects/candy-kittens',
		color: '#baa086',
		date: '2021 - 2023',
		logo: '/images/Candy_Kittens_logo.png',
	},
	{
		id: 2,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		alt: 'project',
		width: 630,
		height: 300,
		link: '#',
		year: 2023,
	},
	{
		id: 3,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		alt: 'project',
		width: 630,
		height: 300,
		link: '#',
		year: 2023,
	},
	{
		id: 4,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		alt: 'project',
		width: 630,
		height: 300,
		link: '#',
		year: 2023,
	},
	{
		id: 5,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		alt: 'project',
		width: 630,
		height: 300,
		link: '#',
		year: 2023,
	},
]

const MyProjects = () => {
	return (
		<section className="my-7 lg:my-16">
			<div className="h-full my-3 lg:my-7">
				<h2 className="mb-5 text-center title">My projects</h2>
				<p className="text-center">
					Over the past 5 years, I&apos;ve had the opportunity to work in a variety of industries and use a range of technologies. <br /> Here are some of my favorite projects have
					been involved in:
				</p>
			</div>
			<div className="flex items-center gap-10">
				<ProjectCard
					year={projects[0].year}
					name={projects[0].name}
					url={projects[0].url}
					alt={projects[0].alt}
					width={projects[0].width}
					height={projects[0].height}
					link={projects[0].link}
					backgroundColor={'#BAA086'}
				/>
			</div>
			<div className="border-t border-black my-7 lg:my-14"></div>
			<div className="grid grid-cols-2 gap-5 sm:grid-cols-2 my-7 lg:my-14">
				{projects.slice(1).map((project, index) => (
					<ProjectCard
						key={project.id}
						name={project.name}
						url={project.url}
						alt={project.alt}
						width={project.width}
						height={project.height}
						link={project.link}
						backgroundColor={index % 3 === 0 ? '#BAA086' : '#1A1918'}
					/>
				))}
			</div>
		</section>
	)
}

export default MyProjects
