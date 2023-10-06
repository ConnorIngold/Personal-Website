// import image
import Image from 'next/image'
// arrow function

const ImageTextV2 = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-10 py-5 border-y lg:py-10 md:flex-row md:justify-between">
			<div className="md:w-2/4">
				<Image className="w-full rounded-2xl" src="/images/pages/about/banner.webp" width={500} height={500} alt="hero image" />
			</div>
			<div className="md:w-2/4">
				<div className="top">
					<h4 className="mb-3">Top Shopify Agency Member</h4>
					<p className="text-center md:text-left">
						This success paved the way for me to join the workforce as a full-time web developer. I have since worked for a digital marketing agency in Milton Keynes where I first
						picked up Shopify and honed my skills. After nearly 2 years, I moved on to work for one of the top Shopify development agencies in London.
					</p>
				</div>
				<div className="my-5 border-b lg:my-10"></div>
				<div className="bottom">
					<h4 className="mb-3">Freelancer</h4>
					<p className="text-center md:text-left">
						In my spare time, I also continue to work as a freelancer for Fully Fused, a B2B wholesale fireworks company. My passion for web development and my commitment to
						delivering high-quality work is evident in my portfolio, where you can see some of my past projects and the skills I bring to the table. I&apos;m a hardworking and
						dedicated individual and I&apos;m excited to bring my expertise to new and challenging projects.
					</p>
				</div>
			</div>
		</div>
	)
}

export default ImageTextV2
