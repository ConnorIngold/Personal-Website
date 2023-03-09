import ProjectCard from './ProjectCard'

const projects = [
	{
		id: 1,
		name: 'The Nue Co',
		url: '/images/Nue_co_big_banner.png',
		width: 1817,
		height: 960,
		link: '#',
		year: 2023,
	},
	{
		id: 2,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		width: 630,
		height: 300,
		link: '#',
		year: 2023,
	},
	{
		id: 3,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		width: 630,
		height: 300,
		link: '#',
		year: 2023,
	},
	{
		id: 4,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		width: 630,
		height: 300,
		link: '#',
		year: 2023,
	},
	{
		id: 5,
		name: 'Autonative',
		url: '/images/D&D_Page_image.png',
		width: 630,
		height: 300,
		link: '#',
		year: 2023,
	},
]

const MyProjects = () => {
	return (
		<section className="my-7 lg:my-14">
			<div className="h-full my-3 lg:my-7">
				<h3 className="title">My projects</h3>
				<p className="text-center">
					Some text about this portfolio project goes here but for now it’s just a placeholder. Some text about this portfolio project goes here but for now it’s just a
					placeholder. Some text about this portfolio project goes here but for now it’s just a placeholder.
				</p>
			</div>
			<div className="flex items-center gap-10">
				<ProjectCard
					year={projects[0].year}
					name={projects[0].name}
					url={projects[0].url}
					width={projects[0].width}
					height={projects[0].height}
					link={projects[0].link}
					backgroundColor={'#BAA086'}
				/>
			</div>
			<div className="border-t border-black my-7 lg:my-14"></div>
			<div className="grid grid-cols-2 sm:grid-cols-2 gap-5 my-7 lg:my-14">
				{projects.slice(1).map((project, index) => (
					<ProjectCard
						key={project.id}
						name={project.name}
						url={project.url}
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
