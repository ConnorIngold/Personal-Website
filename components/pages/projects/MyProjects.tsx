import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Service from '../../../components/Service'
import Layout from '../../../components/global/Layout'
import ErrorPage from '../../../components/pages/404/ErrorPage'
import { fetchProjectData } from '../../../utils/contentfulUtils' // Import the utility function
import ContentfulImage from '../../../components/global/ContentfulImage'

// types
import type { ProjectData } from '../../../types/ProjectData' // Import the ProjectData interface

enum TagIDOptions {
	shopifyAppDevelopment = 'shopifyAppDevelopment',
	shopifyThemeDevelopment = 'shopifyThemeDevelopment',
	customWebDevelopment = 'customWebDevelopment',
	teachAndMentorship = 'teachAndMentorship',
}


const MyProjects = () => {
	const [loading, setLoading] = useState(true)
	const [projects, setProjects] = useState<ProjectData[] | null>(null)
	const router = useRouter();
    const tag = router.query.tag;

	useEffect(() => {
		
		const fetchProject = async () => {
			const projectsData: ProjectData[] = await fetchProjectData('project', undefined, true, tag as TagIDOptions)
			console.log(projectsData)

			setProjects(projectsData)
			console.log("projects", projects);
			
			setLoading(false)
		}

		fetchProject()
	}, [tag])

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
				<Service key={index} name={project.title} startDate={project.startDate} projectDescription={project.projectDescription} projectUrl={project.projectUrl} align={'left'}>
					<ContentfulImage image={project?.mainImage?.fields} />
				</Service>
			))}
		</section>
	)
}

export default MyProjects
