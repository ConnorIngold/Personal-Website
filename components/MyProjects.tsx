import ProjectCard from './global/ProjectImgCard'
import { projects } from './../public/data/projects'

const MyProjects = () => {
	return (
		<section className="my-7 lg:my-16" id="MyProjects">
			<div className="h-full my-3 lg:my-7">
				<h4 className="text-center">A few of</h4>
				<h2 className="mb-5 text-center title">My Best Projects</h2>
				<p className="text-center">
					Over the past 5 years, I&apos;ve had the opportunity to work in a variety of industries and use a range of technologies. <br /> Here are some of my favorite projects have
					been involved in:
				</p>
			</div>
			<div className="grid grid-cols-1 gap-5 lg:grid-cols-2 sm:grid-cols-2 my-7 lg:my-14">
				{projects.map((project, index) => (
					<ProjectCard
						key={project.id}
						name={project.title}
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
