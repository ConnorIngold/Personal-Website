import Button from '../components/global/Button'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ContentfulImage from '../components/global/ContentfulImage'
// types
import type { ProjectData } from '../types/ProjectData' // Import the ProjectData interface

// A single service component. which has props to align the image on the left or right. the image is a prop, so it can be changed to any image
// use flex direction to change the order of the image and text

// Extend the ProjectData interface with additional properties
interface ServiceData extends ProjectData {
	// Add your additional properties here
	children: React.ReactNode
	align: 'left' | 'right'
}

const Service = (props: ServiceData): JSX.Element => {
	return (
		// if align is left, then add the class 'flex-row-reverse' to the section
		<section className={`flex my-5 py-5 gap-10 border-b flex-wrap lg:flex-nowrap ${props.align === 'right' && 'flex-row-reverse'}`}>
			<div className="flex-1 pr-10 border-r">{props.children}</div>
			<div className="flex flex-col justify-center flex-1 gap-5 text-left">
				<h5>{props.title}</h5>
				<h3 className="font-normal">{props.name}</h3>
				<h5>{props.startDate}</h5>
				{props.projectDescription && documentToReactComponents(props.projectDescription)}
				<a className="block mt-2" href={props.projectUrl}>
					<Button>See Project</Button>
				</a>
			</div>
		</section>
	)
}

export default Service
