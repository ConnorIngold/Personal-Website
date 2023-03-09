import Image from 'next/image'
import ProjectCard from './ProjectCard'

const MyProjects = () => {
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

	const projectCards = [
		<ProjectCard
			key={projects[1].id}
			name={projects[1].name}
			url={projects[1].url}
			width={projects[1].width}
			height={projects[1].height}
			link={projects[1].link}
			backgroundColor={'#1A1918'}
		/>,
		<ProjectCard
			key={projects[2].id}
			name={projects[2].name}
			url={projects[2].url}
			width={projects[2].width}
			height={projects[2].height}
			link={projects[2].link}
			backgroundColor={'#BAA086'}
		/>,
		<ProjectCard
			key={projects[3].id}
			name={projects[3].name}
			url={projects[3].url}
			width={projects[3].width}
			height={projects[3].height}
			link={projects[3].link}
			backgroundColor={'#BAA086'}
		/>,
		<ProjectCard
			key={projects[4].id}
			name={projects[4].name}
			url={projects[4].url}
			width={projects[4].width}
			height={projects[4].height}
			link={projects[4].link}
			backgroundColor={'#1A1918'}
		/>,
	]

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
					year={2023}
					name={projects[0].name}
					url={projects[0].url}
					width={projects[0].width}
					height={projects[0].height}
					link={projects[0].link}
					backgroundColor={'#BAA086'}
				/>
			</div>
			<div className="border-t border-black my-7 lg:my-14"></div>
			<div className="flex flex-wrap gap-5 my-7 lg:my-14">
				<ProjectCard
					key={projects[1].id}
					year={2023}
					name={projects[1].name}
					url={projects[1].url}
					width={projects[1].width}
					height={projects[1].height}
					link={projects[1].link}
					backgroundColor={'#1A1918'}
				/>
				<ProjectCard
					key={projects[2].id}
					year={2023}
					name={projects[2].name}
					url={projects[2].url}
					width={projects[2].width}
					height={projects[2].height}
					link={projects[2].link}
					backgroundColor={'#BAA086'}
				/>
			</div>
			<div className="flex flex-wrap gap-5 my-7 lg:my-14">
				<ProjectCard
					key={projects[1].id}
					year={2023}
					name={projects[1].name}
					url={projects[1].url}
					width={projects[1].width}
					height={projects[1].height}
					link={projects[1].link}
					backgroundColor={'#BAA086'}
				/>
				<ProjectCard
					key={projects[2].id}
					year={2023}
					name={projects[2].name}
					url={projects[2].url}
					width={projects[2].width}
					height={projects[2].height}
					link={projects[2].link}
					backgroundColor={'#1A1918'}
				/>
			</div>
		</section>
	)
}

export default MyProjects
