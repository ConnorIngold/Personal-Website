import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }: any) => {
	return `${src}?w=${width}&q=${quality || 75}`
}

const ContentfulImage = (imageObj: any) => {
	return (
		<Image
			width={imageObj.image.file.details.image.width || 1000}
			height={imageObj.image.file.details.image.height || 1000}
			loader={contentfulLoader}
			alt={imageObj.image.description ?? 'no alt'}
			src={`https:${imageObj.image.file?.url}`}
		/>
	)
}

export default ContentfulImage
