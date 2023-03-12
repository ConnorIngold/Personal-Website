// images of clients
import Image from 'next/image'

const Clients = () => {
	const clients = [
		{
			id: 1,
			name: 'Candy Kittens',
			image: '/images/candy_kittens_logo.png',
			width: 236,
			height: 100,
		},
		{
			id: 2,
			name: 'Autonative',
			image: '/images/ford_logo.png',
			width: 236,
			height: 100,
		},
		{
			id: 3,
			name: 'Candy Kittens',
			image: '/images/The_frame_logo.png',
			width: 236,
			height: 100,
		},
		{
			id: 4,
			name: 'Candy Kittens',
			image: '/images/logoblue.c38cd28d.png',
			width: 236,
			height: 100,
		},
	]

	return (
		<section className="overflow-x-hidden my-7 lg:my-14">
			<div className="items-center hidden gap-10 lg:flex">
				<div className="h-full">
					<h4 className="flex-0">
						Sites I&apos;ve <br /> Worked On
					</h4>
				</div>
				{clients.map((client, index) => (
					<Image
						className={`flex-1 object-contain ${index === 0 && 'border-l border-black pl-3'}`}
						key={client.id}
						src={client.image}
						width={client.width}
						height={client.height}
						alt={client.name}
					/>
				))}
			</div>
		</section>
	)
}

export default Clients
