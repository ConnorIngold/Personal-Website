// next.js api route to return a list of posts from contentful

import { NextApiRequest, NextApiResponse } from "next";

const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_TEST_CONTENTFUL_SPACE_ID}`;
// a list of posts

const query = `
    {
        projectCollection {
            total
            items {
                name
            }
        }
    }
`;


export interface ProjectCollection {
	items: Item[];
}

export interface Item {
	name: string;
}


const posts = async (req: NextApiRequest, res: NextApiResponse) => {
  // make a request to contentful
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TEST_CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();

    // return the list of posts
    res.status(200).json(data.projectCollection.items);
  } catch (error) {
    console.log("🚀 ~ file: posts.ts:37 ~ posts ~ error", error);
    res.status(500).json({ error });
  }
};

export default posts;
