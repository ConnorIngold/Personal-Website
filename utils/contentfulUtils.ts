import { createClient } from 'contentful'

const client = createClient({
	space: process.env.NEXT_PUBLIC_TEST_CONTENTFUL_SPACE_ID || '',
	accessToken: process.env.NEXT_PUBLIC_TEST_CONTENTFUL_MANAGEMENT_TOKEN || '',
})

enum TagIDOptions {
	shopifyAppDevelopment = 'shopifyAppDevelopment',
	shopifyThemeDevelopment = 'shopifyThemeDevelopment',
	customWebDevelopment = 'customWebDevelopment',
	teachAndMentorship = 'teachAndMentorship',
}


export const fetchProjectData = async (content_type: string, projectID: string | undefined, fetchAllProjects: boolean, tagID?: TagIDOptions): Promise<any> => {
	console.log("tagID", tagID);
	
try {
	let queryOptions = {
		['fields.name']: '',
		content_type: content_type,
		['metadata.tags.sys.id[all]']: tagID,
	}

	if (projectID && !fetchAllProjects) {
		queryOptions['fields.name'] = projectID
	}

	const response = await client.getEntries(queryOptions)

	if (fetchAllProjects) {
		return response.items.map((item: any) => item.fields) // Return an array of all projects
	} else if (!!response.items.length) {
		return response.items[0].fields // Return the first project found
	} else {
		return null
	}
} catch (error) {
	console.error('Error fetching project:', error)
	return null
}
}
