import React, { useEffect, useState } from 'react'

import Service from '../../../components/Service'
import Layout from '../../../components/global/Layout'
import ErrorPage from '../../../components/pages/404/ErrorPage'
import { fetchProjectData } from '../../../utils/contentfulUtils' // Import the utility function
import ContentfulImage from '../../../components/global/ContentfulImage'

// types
import type { ProjectData } from '../../../types/ProjectData.d.ts' // Import the ProjectData interface

const MyProjects = () => {
	const [loading, setLoading] = useState(true)
	const [projects, setProjects] = useState<ProjectData[] | null>(null)

	useEffect(() => {
		const fetchProject = async () => {
			const projectsData: ProjectData[] = await fetchProjectData('project', undefined, true)
			console.log(projectsData)

			setProjects(projectsData)
			setLoading(false)
		}

		fetchProject()
	}, [])

	if (loading) {
		return (
			<Layout>
				<main className="container">
					{/* Can add a loading indicator here but left it to 100vh to stop CLS */}
					<div className="h-screen"></div>
				</main>
			</Layout>
		)
	}

	if (!projects) {
		return <ErrorPage />
	}

	return (
		<section className="my-7 lg:my-14">
			{projects.map((project, index) => (
				<Service
					key={index}
					aboveHeadingText="My work"
					buttonText="view project"
					name={project.title}
					date={project.startDate}
					description={project.projectDescription}
					url={project.projectUrl}
					align={'left'}
				>
					<ContentfulImage image={project.mainImage.fields} />
				</Service>
			))}
		</section>
	)
}

export default MyProjects
