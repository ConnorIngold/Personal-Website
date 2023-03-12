import Image from 'next/image'

const ProjectSteps = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-10 py-5 border-t lg:py-10 md:flex-row md:justify-between">
			<div className="md:w-2/3">
				<Image className="w-full rounded-2xl" src={'via.placeholder/500'} width={500} height={500} alt="hero image" />
			</div>
			<div className="md:w-1/3">
				<h2 className="mb-5 text-4xl font-bold text-center md:text-left">Test</h2>
				<p className="text-center md:text-left">Test</p>
			</div>
		</div>
	)
}

export default ProjectSteps
