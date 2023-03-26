import React, { useEffect, useState } from 'react'
import Image from 'next/image'
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
	service: string
	link: string
	color: string
	date: string
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
							<div className="flex flex-col gap-3">
								<h5 className="uppercase font-Roboto-Mono text-gold">Client</h5>
								<h5 className="uppercase font-Roboto-Mono">{project.title}</h5>
							</div>
							<div className="flex flex-col gap-3">
								<h5 className="uppercase font-Roboto-Mono text-gold">Service</h5>
								<h5 className="uppercase font-Roboto-Mono">{project.service}</h5>
							</div>
							<div className="flex flex-col gap-3">
								<h5 className="uppercase font-Roboto-Mono text-gold">Date</h5>
								<h5 className="uppercase font-Roboto-Mono">{project.date}</h5>
							</div>
						</div>
					</div>
				</section>
				<section id="project" className="flex items-center gap-10 my-5 lg:my-10">
					<a href="#" className="flex flex-col items-center justify-center flex-1 gap-3">
						<div className="flex flex-col items-center justify-center w-full gap-5 rounded-xl">
							<Image src="/images/Candy_Kittens_page_image.png" width={1817} height={960} alt="project" />
						</div>
					</a>
				</section>
			</main>
		</Layout>
	)
}

export default ProjectPage
