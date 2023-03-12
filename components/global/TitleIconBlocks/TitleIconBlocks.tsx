import { useEffect, useState, useRef } from 'react'
import { useIsScreenSize } from '../../../hooks/useIsScreenSize'
import styles from './TitleIconBlocks.module.css'
import './TitleIconBlocks.module.css'

interface TabProps {
	title: string
	icon: React.ReactNode
	content: React.ReactNode
}

interface IconBlockProps {
	icon: React.ReactNode
	title: string
	description: string
	borderColor?: string
	index?: number
}

const IconTextBlock = ({ icon, title, description, borderColor, index }: IconBlockProps) => {
	return (
		<div className="flex gap-8 mt-12 mb-5 lg:m-0">
			<div className="flex-shrink-0 hidden lg:block">{icon}</div>
			<div className="flex flex-col">
				<h3 className="lg:text-3xl">{title}</h3>
				<p>{description}</p>
			</div>
			{borderColor && <div className={`${index === 0 && `border-l`} border-${borderColor} pl-8`}> </div>}
		</div>
	)
}

interface TitleIconBlocksProps {
	services: IconBlockProps[]
	heading: string
	sectionClassName?: string
}

const TitleIconBlocks = ({ services, heading, sectionClassName }: TitleIconBlocksProps) => {
	const isMobile = useIsScreenSize(1024)
	const [activeTab, setActiveTab] = useState(0)
	const intervalRef = useRef<string | number | NodeJS.Timeout | undefined>()

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setActiveTab(prevTab => (prevTab + 1) % services.length)
		}, 4000)
		return () => clearInterval(intervalRef.current)
	}, [services.length])

	if (isMobile) {
		const tabs: TabProps[] = services.map(service => ({
			title: service.title,
			icon: service.icon,
			content: <IconTextBlock {...service} />,
		}))

		const handleTabClick = (index: number) => {
			setActiveTab(index)
			clearInterval(intervalRef.current)
		}
		return (
			<section className={sectionClassName ?? 'my-7 lg:my-14'} id="TitleIconBlocks">
				<div id="mobile" className="flex flex-col">
					<div className={`border-b border-black mb-10`}>
						<h4>{heading}</h4>
					</div>
					<div className="relative">
						<div className={`flex gap-10 ${styles['tabs-controls']}`}>
							{tabs.map((tab, index) => (
								<div
									key={index}
									className={`tabs-control w-1/4 max-w-[25%] ${activeTab === index ? `${styles['active']}` : `${styles['inactive']}`}`}
									onClick={() => handleTabClick(index)}
								>
									{tab.icon}
								</div>
							))}
						</div>
						<div className="tab-content">{tabs[activeTab].content}</div>
					</div>
				</div>
			</section>
		)
	}

	return (
		<section className={sectionClassName ?? 'my-7 lg:my-14'} id="TitleIconBlocks">
			<div id="desktop" className="hidden gap-10 lg:flex">
				<div className={`${heading.includes('STEPS') ? 'w-1/5' : 'block w-1/5 xl:w-1/3'} border-r border-black`}>
					<h4>{heading}</h4>
				</div>
				<div className={`flex flex-wrap ${heading.includes('STEPS') ? 'w-4/5' : 'w-4/5 xl:w-2/3'} gap-10 border-black`}>
					<div className="flex border-black">
						{services.slice(0, 2).map((service, index) => (
							<div className="flex w-1/2 gap-8" key={index}>
								<IconTextBlock {...service} borderColor={index < services.length - 1 ? 'black' : undefined} index={index} />
							</div>
						))}
					</div>
					<div className="w-full border-b border-black"></div>
					<div className="flex border-black">
						{services.slice(2).map((service, index) => (
							<div className="flex w-1/2 gap-8" key={index}>
								<IconTextBlock {...service} borderColor={index < services.length - 1 ? 'black' : undefined} index={index} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default TitleIconBlocks
