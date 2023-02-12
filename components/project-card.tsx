// Project card component with image
import React from 'react'
import Image from 'next/image'
export interface ProjectCardProps {
	// ProjectCardProps
	/**
	 * What is the image url?
	 * @default 'https://via.placeholder.com/300'
	 * */
	imgUrl?: string
	/**
	 * What is the background color?
	 * @default '#baa086'
	 * */
	backgroundColor?: string
	/**
	 * title of the project
	 * @default 'Project'
	 * */
	label: string
	/**
	 * date of the project
	 * @default '2021'
	 * */
	date?: number
	/**
	 * description of the project
	 * @default 'This is a project'
	 * */
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgUrl, backgroundColor = '#baa086', label = 'Project', date = 2021, ...props }) => {
	return (
		<div className="card" style={{ backgroundColor }} {...props}>
			<div className="card-image">
				<Image src={backgroundColor} alt={label} />
			</div>
			<div className="card-content">
				<h2>{label}</h2>
				<h3>{date}</h3>
				<p>This is a project</p>
			</div>
		</div>
	)
}

// Path: components/project-card.tsx
