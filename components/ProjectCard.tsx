// Product card with image, text, link to project and background color
import Image from 'next/image'
import React from 'react'

interface ProjectCardProps {
	name: string
	url: string
	width: number
	height: number
	link: string
	backgroundColor: string
}

const ProjectCard: React.FC<ProjectCardProps> = props => {
	return (
		<a href="#" className="flex flex-col items-center justify-center flex-1 gap-5">
			<div className={`flex flex-col items-center justify-center gap-5 w-full rounded-xl bg-[${props.backgroundColor}]`}>
				<Image className="flex-1 object-contain" src={props.url} width={props.width} height={props.height} alt={props.name} />
			</div>
			<div className="flex justify-between w-full">
				<h4>{props.name}</h4> <h4>2023</h4>
			</div>
		</a>
	)
}

export default ProjectCard