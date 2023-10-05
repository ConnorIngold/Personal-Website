import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/global/Layout'
import ErrorPage from '../../components/pages/404/ErrorPage'
import { fetchProjectData } from '../../utils/contentfulUtils' // Import the utility function
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ContentfulImage from '../../components/global/ContentfulImage'

// types
import type { ProjectData } from '../../types/ProjectData' // Import the ProjectData interface

// utils
import { formatDate } from '../../utils/formatDate'

const ProjectPage: React.FC = () => {
	const router = useRouter()
	const projectID = router.query.project as string | undefined

	const [loading, setLoading] = useState(true)
	const [project, setProject] = useState<ProjectData | null>(null)

	useEffect(() => {
		console.log("projectID", projectID);
		
		const fetchProject = async () => {
				if (!projectID) {
					return;
        }

			setProject(null)
			try {
				const projectData: ProjectData = await fetchProjectData('project', projectID, false)
				console.log("🚀 ~ file: [project].tsx:25 ~ fetchProject ~ projectData:", projectData)
				setProject(projectData)
				setLoading(false)
				
			} catch (error) {
				setProject(null)
			}
			
		}

		fetchProject()
	}, [projectID])

	if (loading) {
		return (
			<Layout>
				<main className="container">
					{/* Can add a loading indicator here but left it to 100vh to stop CLS */}
					<div className="h-screen flex justify-center items-center">
						Loading...
					</div>
				</main>
			</Layout>
		)
	}

	if (project) {
		return (
			<Layout>
				<main className="container">
					<section id="banner" className="flex flex-wrap lg:flex-nowrap border-b">
						<div className="w-full lg:w-3/4">
							<div className="py-5 lg:py-10 lg:pr-10">
								<h1 className="mb-5 text-4xl lg:text-[80px] lg:leading-[110%]">{project.title}</h1>
								{project.projectDescription && documentToReactComponents(project.projectDescription)}
							</div>
						</div>
						<div className="w-full border-l lg:w-1/4">
							<div className="flex-col lg:justify-evenly lg:max-w-[80%] mx-auto p-2 lg:py-4 h-full flex gap-5">
								<div className="flex flex-col gap-1">
									<h5 className="uppercase font-Roboto-Mono text-gold">Client</h5>
									<h5 className="uppercase font-Roboto-Mono">{project.title}</h5>
								</div>
								<div className="flex flex-col gap-1">
									<h5 className="uppercase font-Roboto-Mono text-gold">Service</h5>
									<h5 className="uppercase font-Roboto-Mono">{project.service}</h5>
								</div>
								<div className="flex flex-col gap-1">
									<h5 className="uppercase font-Roboto-Mono text-gold">Date</h5>
									<h5 className="uppercase font-Roboto-Mono">
										{project.startDate && formatDate(project.startDate)} - {project.endDate && formatDate(project.endDate)}
									</h5>
								</div>
							</div>
						</div>
					</section>
					{/* <Image src={} width={1817} height={960} alt="project" /> */}

					<section id="project" className="flex items-center gap-10 my-5 lg:my-10">
						<a href={project.projectUrl} className="flex flex-col items-center justify-center flex-1 gap-3">
							<div className="flex flex-col items-center justify-center w-full gap-5 rounded-xl">
								<div className="px-2 py-2 lg:px-20 lg:py-16 bg-gold rounded-xl">
									<div className="overflow-hidden rounded-xl">
										<ContentfulImage image={project.mainImage && project.mainImage.fields} />
									</div>
								</div>
							</div>
						</a>
					</section>
					<section id="about">
						<div className="flex flex-wrap lg:flex-nowrap">
							<div className="flex items-center justify-center lg:justify-start w-full lg:w-1/5 lg:border-r border-black xl:w-1/3">
								<h5 className="uppercase font-Roboto-Mono mb-4 lg:mb-0">About the client</h5>
							</div>
							<div className="flex flex-wrap w-full lg:w-4/5 gap-10 border-black xl:w-2/3">
								<div className="flex flex-col items-center w-full gap-5 mx-auto text-center lg:w-3/4">
									<ContentfulImage image={project.companyLogo && project.companyLogo.fields} />
									{project.companyDescription && documentToReactComponents(project.companyDescription)}
								</div>
							</div>
						</div>
					</section>
				</main>
			</Layout>
		)
	}
	
	return <ErrorPage />
}

export default ProjectPage