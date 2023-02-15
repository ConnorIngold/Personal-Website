import Image from 'next/image'

const MeNow = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="flex flex-col items-center justify-center w-full h-full gap-5">
				<Image src="/images/MeNow.png" width={1920} height={1080} alt="MeNow" />
			</div>
		</div>
	)
}
