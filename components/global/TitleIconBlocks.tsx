import React from 'react'

interface IconBlockProps {
	icon: React.ReactNode
	title: string
	description: string
	borderColor?: string
	index?: number
}

const IconTextBlock = ({ icon, title, description, borderColor, index }: IconBlockProps) => {
	return (
		<div className="flex gap-8">
			<div className="flex-shrink-0">{icon}</div>
			<div className="flex flex-col">
				<h3 className="text-3xl">{title}</h3>
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
	return (
		<section className={sectionClassName ?? 'my-7 lg:my-14'}>
			<div className="flex gap-10">
				<div className={`${heading.includes('STEPS') ? 'w-1/5' : 'w-1/3'} border-r border-black`}>
					<h4>{heading}</h4>
				</div>
				<div className={`flex flex-wrap ${heading.includes('STEPS') ? 'w-4/5' : 'w-2/3'} gap-10 border-black`}>
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
