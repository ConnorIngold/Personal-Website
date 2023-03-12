import Service from '../../../components/Service'
import ProjectImgCard from '../../../components/global/ProjectImgCard'
import { projects } from '../../../public/data/projects'

const MyProjects = () => {
	return (
		<section className="my-7 lg:my-14">
			{projects.map((project, index) => (
				<Service
					key={project.id}
					aboveHeadingText="My work"
					buttonText="view projects"
					name={project.title}
					date="April 2022"
					description={project.description}
					url={project.url}
					align={'left'}
				>
					<ProjectImgCard backgroundColor={project.color} url={project.url} width={project.width} height={project.height} link={project.link} alt={project.alt} />
				</Service>
			))}
		</section>
	)
}

export default MyProjects
