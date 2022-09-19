import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";

const response = await fetch(
	"https://tony.sanjaya.info/wp-json/wp/v2/posts?per_page=100"
);
const posts = await response.json();

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			link: post.slug,
			title: post.title["rendered"],
			pubDate: post.date,
		})),
	});
