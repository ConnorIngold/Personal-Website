import ProjectCard from './global/ProjectImgCard'

const projectsArr = [
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

const ProjectsComp = () => {
	return (
		<section className="my-7 lg:my-14">
			<div className="h-full my-3 lg:my-7">
				<h3 className="title">My projects</h3>
				<p className="text-center">
					Some text about this portfolio project goes here but for now it’s just a placeholder. Some text about this portfolio project goes here but for now it’s just a
					placeholder. Some text about this portfolio project goes here but for now it’s just a placeholder.
				</p>
			</div>

			<div className="grid grid-cols-2 gap-5 sm:grid-cols-2 my-7 lg:my-14">
				{projectsArr.map((project, index) => (
					<>
						<ProjectCard
							key={project.id}
							name={project.name}
							url={project.url}
							width={project.width}
							height={project.height}
							link={project.link}
							backgroundColor={index % 3 === 0 ? '#BAA086' : '#1A1918'}
						/>
						<div className="border-t border-black my-7 lg:my-14"></div>
					</>
				))}
			</div>
		</section>
	)
}

export default ProjectsComp
