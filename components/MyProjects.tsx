import ProjectCard from './global/ProjectImgCard'
import { projects } from './../public/data/projects'

const MyProjects = () => {
	return (
		<section className="my-7 lg:my-16" id="MyProjects">
			<div className="h-full my-3 lg:my-7">
				<h2 className="mb-5 text-center title">My projects</h2>
				<p className="text-center">
					Over the past 5 years, I&apos;ve had the opportunity to work in a variety of industries and use a range of technologies. <br /> Here are some of my favorite projects have
					been involved in:
				</p>
			</div>
			<div className="flex items-center gap-10">
				<div className="px-20 py-16 bg-gold rounded-xl">
					<ProjectCard
						year={projects[0].date}
						name={projects[0].name}
						url={projects[0].url}
						alt={projects[0].alt}
						width={projects[0].width}
						height={projects[0].height}
						link={projects[0].link}
						backgroundColor={'#BAA086'}
					/>
				</div>
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
