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
			name: 'billionaire boys club',
			image: '/images/billionaire_boys_club_logo.png',
			width: 236,
			height: 100,
		},
		{
			id: 3,
			name: 'The Samsung Frame',
			image: '/images/The_frame_logo.png',
			width: 236,
			height: 100,
		},
		{
			id: 4,
			name: 'dandd-logo',
			image: '/images/dandd-logo.avif',
			width: 236,
			height: 100,
		},
		{
			id: 5,
			name: 'RNLI',
			image: '/images/RNLI_logo.png',
			width: 236,
			height: 100,
		},
		{
			id: 6,
			name: 'Roomix',
			image: '/images/Roomix_Logo.avif',
			width: 236,
			height: 100,
		},
		{
			id: 7,
			name: 'debshelf',
			image: '/images/logoblue.c38cd28d.png',
			width: 236,
			height: 100,
		},
		{
			id: 8,
			name: 'Candy Kittens',
			image: '/images/candy_kittens_logo.png',
			width: 236,
			height: 100,
		},
		{
			id: 9,
			name: 'billionaire boys club',
			image: '/images/billionaire_boys_club_logo.png',
			width: 236,
			height: 100,
		},
		{
			id: 10,
			name: 'The Samsung Frame',
			image: '/images/The_frame_logo.png',
			width: 236,
			height: 100,
		},
		{
			id: 11,
			name: 'dandd-logo',
			image: '/images/dandd-logo.avif',
			width: 236,
			height: 100,
		},
		{
			id: 12,
			name: 'RNLI',
			image: '/images/RNLI_logo.png',
			width: 236,
			height: 100,
		},
		{
			id: 13,
			name: 'Roomix',
			image: '/images/Roomix_Logo.avif',
			width: 236,
			height: 100,
		},
		{
			id: 14,
			name: 'debshelf',
			image: '/images/logoblue.c38cd28d.png',
			width: 236,
			height: 100,
		},
	]

	return (
		<section className="overflow-x-hidden my-7 lg:my-20">
			<div className="items-center hidden gap-10 lg:flex">
				<div className="h-full">
					<h4 className="flex-0">
						A few of the <br />
						Sites I&apos;ve <br /> Worked On
					</h4>
				</div>
				<div className="logo-slider">
					<div className="logo-slide-track">
						{clients.map((client, index) => (
							<div className="logo-slide" key={client.id}>
								<Image
									className={`flex-1 object-contain ${index === 0 && 'border-l border-black pl-3'}`}
									src={client.image}
									width={client.width}
									height={client.height}
									alt={client.name}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Clients
