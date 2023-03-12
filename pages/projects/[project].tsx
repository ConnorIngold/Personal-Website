import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/global/Layout'
import { projects } from '../../public/data/projects'
import ErrorPage from '../../components/pages/404/ErrorPage'

export interface IProject {
	id: number
	name: string
	title: string
	description: string
	url: string
	alt: string
	width: number
	height: number
	link: string
	color: string
}

const ProjectPage: React.FC = () => {
	const router = useRouter()
	const projectID = router.query.project as string
	console.log('project', projectID)

	const project: IProject | undefined = projects.find(p => p.name === projectID)

	if (!project) {
		return <ErrorPage />
	}

	return (
		<Layout>
			<main className="container">
				<section id="banner" className="flex border-b">
					<div className="w-1/2 lg:w-3/4">
						<div className="py-5 lg:py-10">
							<h1 className="mb-5 text-4xl lg:text-[80px] lg:leading-[110%]">{project.title}</h1>
							<p className="pr-4">{project.description}</p>
						</div>
					</div>
					<div className="w-1/2 border-l lg:w-1/4">
						<div className="flex-col lg:justify-evenly lg:max-w-[80%] mx-auto p-2 lg:py-4 h-full flex gap-5">
							<h5 className="uppercase font-Roboto-Mono">Custom Web Apps Building</h5>
							<h5 className="uppercase font-Roboto-Mono">Social media sites</h5>
							<h5 className="uppercase font-Roboto-Mono">Shopify theme development</h5>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	)
}

export default ProjectPage
