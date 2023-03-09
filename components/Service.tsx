// A single service component. which has props to align the image on the left or right. the image is a prop, so it can be changed to any image
// use flex direction to change the order of the image and text

interface Props {
	name: string
	description: string
	url: string
	children: React.ReactElement
	align: 'left' | 'right'
}

const Service = (props: Props): JSX.Element => {
	return (
		// if align is left, then add the class 'flex-row-reverse' to the section
		<section className={`flex my-5 py-5 gap-10 border-b ${props.align === 'right' && 'flex-row-reverse'}`}>
			<div className="flex-1 border-r pr-10">{props.children}</div>
			<div className="flex-1">
				<h3>{props.name}</h3>
				<p>{props.description}</p>
				<a href={props.url}>
					<button>VIEW PROJECTS</button>
				</a>
			</div>
		</section>
	)
}

export default Service
