import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../../components/global/Layout'
import { projects } from '../../public/data/projects'
import ErrorPage from '../../components/pages/404/ErrorPage'

const ProjectPage: React.FC = () => {
	const router = useRouter()
	const projectID = router.query.project as string

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (router.isReady) {
			setLoading(false)
		}
	}, [router.isReady])

	const project = projects.find(p => p.name === projectID)

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
							<p className="pr-4">{project.projectDescription}</p>
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
							<Image src={'/images/' + 'Candy_Kittens_page_image.png'} width={1817} height={960} alt="project" />
						</div>
					</a>
				</section>
				<section id="about">
					<div className="flex">
						<div className="flex items-center w-1/5 border-r border-black xl:w-1/3">
							<h5>About the client</h5>
						</div>
						<div className="flex flex-wrap w-4/5 gap-10 border-black xl:w-2/3">
							<div className="flex flex-col items-center w-full gap-5 mx-auto text-center lg:w-3/4">
								<Image src={'/images/' + 'Candy_Kittens_logo.png'} width={236} height={132} alt="project" />
								<p>{project.description}</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	)
}

export default ProjectPage
