// import image
import Image from 'next/image'
// arrow function

const ImageText = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-10 py-5 border-t lg:py-10 md:flex-row md:justify-between">
			<div className="md:w-2/3">
				<Image className="w-full rounded-2xl" src="/images/banner.webp" width={500} height={500} alt="hero image" />
			</div>
			<div className="md:w-1/3">
				<h2 className="mb-5 text-4xl font-bold text-center md:text-left">
					Always Looking <span className="text-[#BAA086]">Forward</span>
				</h2>
				<p className="text-center md:text-left">
					Experience and the inevitable highs and lows of life have brought me to this point in my career. At just 24 years of age, I have already gained 4+ years of valuable
					experience in the ever-evolving field of web development. <br /> Like the ocean tides, my journey has seen its ups and downs, but I have emerged stronger and more
					determined than ever before. Today, I proudly call myself a member of a top London agency, where I continue to hone my craft and push the boundaries of what is possible
					in the digital realm.
				</p>
			</div>
		</div>
	)
}

export default ImageText
