const EXTERNAL_DATA_URL = process.env.env === 'production' ? 'https://connoringold.com/api/posts' : 'http://localhost:3002/api/posts';


function generateSiteMap (posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://connoringold.com</loc>
     </url>
     <url>
       <loc>https://connoringold.com/about</loc>
     </url>
     <url>
        <loc>https://connoringold.com/services</loc>
     </url>
     <url>
        <loc>https://connoringold.com/projects</loc>
     </url>
     <url>
        <loc>https://connoringold.com/termsandconditions</loc>
     </url>          
     ${posts
      .map(({ name }) => {
        return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${name}`}</loc>
       </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap () {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps ({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
