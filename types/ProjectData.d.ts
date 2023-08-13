// import contentful types
import * as Contentful from 'contentful'

export interface ProjectData {
	name: Contentful.EntryFields.Text
	title: Contentful.EntryFields.Text
	companyDescription: Contentful.EntryFields.RichText
	projectDescription: Contentful.EntryFields.RichText
	mainImage: Contentful.EntryFields.AssetLink
	service: Contentful.EntryFields.Text
	projectUrl: Contentful.EntryFields.Text
	startDate: Contentful.EntryFields.Date
	endDate: Contentful.EntryFields.Date
	companyLogo: Contentful.EntryFields.AssetLink
}
