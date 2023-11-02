import Button from '../components/global/Button'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// types
import type { ProjectData } from '../types/ProjectData' // Import the ProjectData interface

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
				<div className="flex flex-wrap gap-3 lg:flex-nowrap">
					<a className="block mt-2" href={props.projectUrl}>
						<Button>Project Website</Button>
					</a>
					<a className="block mt-2" href={`/projects/${props.name?.toLowerCase().replaceAll(' ', '')}`}>
						<button className={'btn secondary'}>Project Details</button>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Service
