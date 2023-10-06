// arrow syntax
// import { projects } from '../public/data/projects'

import Layout from '../components/global/Layout'
import ServiceCard from '../components/ServiceCard'
import ProjectImgCard from '../components/global/ProjectImgCard'
import ContactSection from '../components/global/Contact/ContactSection'
import projectSteps from './../public/data/projectSteps'
import TitleIconBlocks from '../components/global/TitleIconBlocks/TitleIconBlocks'

// a services array

const Services = () => {
	const services = [
		{
			id: 1,
			title: 'Shopify theme development',
			description: `As a Shopify developer, I specialize in crafting custom, user-friendly themes tailored to boost online businesses. Using HTML, CSS, JavaScript, and Shopify's Liquid language, I create responsive themes that align with brand identity and captivate target audiences. Services include theme customization, third-party app integration, speed optimization, and SEO adherence. Let's enhance your online presence and drive business growth with a standout Shopify theme.`,
			linkToService: '/shopifythemes',
			backgroundColor: '#8bc74c',
			image: {
				url: '/images/pages/services/shopify.png',
				width: 1000,
				height: 700,
				alt: 'image'
			}
			
		},
		{
			id: 2,
			title: 'Custom Web Development',
			description: `As a front-end developer specializing in Vue.js and React.js, I craft engaging, interactive web experiences. Using these powerful frameworks, I create dynamic, responsive, and visually appealing user interfaces. My expertise lies in efficiently translating design concepts into seamless, functional applications that resonate with users. Services include front-end development, UI/UX design integration, optimization for speed and performance, and cross-browser compatibility. Let's elevate your web presence and engage your audience with a compelling, modern, and user-friendly front end.`,
			linkToService: '/images/pages/services/shopify.png',
			backgroundColor: '#000551',
			image: {
				url: '/images/pages/services/frontend.png',
				width: 1000,
				height: 700,
				alt: 'image'
			}
		},
		{
			id: 3,
			title: 'Shopify app development',
			description: `As a Shopify app developer, I focus on building tailored, efficient apps to enhance online stores. With expertise in web technologies and Shopify's APIs, I create seamless apps that optimize functionality and user experience. Services include app customization, integration with Shopify stores, performance optimization, and adherence to SEO best practices. Let's elevate your Shopify store's capabilities with a customized app that suits your unique needs and boosts business productivity.`,
			linkToService: '/images/pages/services/shopifyApp.png',
			backgroundColor: '#243c36',
			image: {
				url: '/images/pages/services/shopifyApp.png',
				width: 1000,
				height: 700,
				alt: 'image'
			}		
		},
	]

	return (
		<Layout>
			<main className="container">
				<section id="banner" className="flex border-b">
					<div className="w-1/2 lg:w-3/4">
						<div className="py-5 lg:py-10">
							<h1 className="mb-5 text-4xl lg:text-[80px] lg:leading-[110%]">My Services</h1>
							<p className="pr-4">
								I provide a wide a specifc set of services to help you start or grow your business. 
							</p>
						</div>
					</div>
					<div className="w-1/2 border-l lg:w-1/4">
						<div className="flex-col lg:justify-evenly lg:max-w-[80%] mx-auto p-2 lg:py-4 h-full flex gap-5">
							<h5 className="uppercase font-Roboto-Mono">Shopify theme development</h5>
							<h5 className="uppercase font-Roboto-Mono">Custom web development</h5>
							<h5 className="uppercase font-Roboto-Mono">Shopify App development</h5>
						</div>
					</div>
				</section>
				{services.map((service, index) => (
					<ServiceCard
						key={service.id}
						title={service.title}
						description={service.description}
						url={service.linkToService}
						align={index % 2 === 0 ? 'left' : 'right'}
						buttonText="See Related Projects"
					>
						<ProjectImgCard backgroundColor={service.backgroundColor} url={service.image.url} width={service.image.width} height={service.image.height} link={service.linkToService} alt={service.image.alt} />
					</ServiceCard>
				))}
				<TitleIconBlocks services={projectSteps} heading="PROJECT STEPS" sectionClassName="my-7 lg:my-14" />
				<div className="border-b"></div>
				<ContactSection title="Let’s bring your business to the next level" />
			</main>
		</Layout>
	)
}

export default Services
