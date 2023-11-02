import Button from '../components/global/Button'
// A single service component. which has props to align the image on the left or right. the image is a prop, so it can be changed to any image
// use flex direction to change the order of the image and text

interface Props {
	title?: string
	description?: string
	aboveHeadingText?: string
	date?: string
	price?: string
	url?: string
	children?: React.ReactElement
	align: 'left' | 'right'
	buttonText?: string
}

const ServiceCard = (props: Props): JSX.Element => {
	return (
		// if align is left, then add the class 'flex-row-reverse' to the section
		<section className={`flex my-5 py-5 gap-10 border-b flex-wrap lg:flex-nowrap ${props.align === 'right' && 'flex-row-reverse'}`}>
			<div className="flex-1 border-b lg:pr-10 lg:border-b-0 lg:border-r">{props.children}</div>
			<div className="flex flex-col justify-center gap-5 text-left lg:flex-1">
				<h5>{props.aboveHeadingText}</h5>
				<h3 className="text-2xl font-normal lg:text-4xl">{props.title}</h3>
				<h5>{props.date}</h5>
				<p>{props.description}</p>
				<a className="block mt-2" href={props.url}>
					<Button>{props.buttonText}</Button>
				</a>
			</div>
		</section>
	)
}

export default ServiceCard
