// images of clients
import Image from 'next/image'
import { Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

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
		<section className="my-7">
			<Swiper modules={[Autoplay]} className="lg:hidden" spaceBetween={50} slidesPerView={1} autoplay={true} rewind={true}>
				{clients.map((client, index) => (
					<SwiperSlide key={index}>
						<Image className="object-contain m-auto" key={client.id} src={client.image} width={client.width} height={client.height} alt={client.name} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default Clients
