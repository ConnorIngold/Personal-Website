import Image from 'next/image'
import services from '../data/MyServices.json'

const MyServices = () => {
	return (
		<section className="my-7 lg:my-14">
			{services.services.map((service, index) => (
				<div key={index} className="flex flex-col items-center gap-5">
					<h4 className="text-center">{service.title}</h4>
					<p>{service.description}</p>
				</div>
			))}
		</section>
	)
}

export default MyServices
