function toRssXML(posts) {
    const latestPostDate = moment(posts[0].metadata.date, "MM/DD/YYYY");
    let postXml = "";

    posts.forEach((post) => {
        const date = moment(post.metadata.date, "MM/DD/YYYY");
        const href = `https://www.slashproto.com/posts/${post.slug}`;
        postXml += `
        <item>
            <title>${post.metadata.title}</title>
            <link>${href}</link>
            <pubDate>${date.format("ddd, DD MMM YYYY HH:mm:ss ZZ")}</pubDate>
            <guid>${href}</guid>
            <description>
            &lt;![CDATA[ ${post.metadata.description} ]]&gt;
            </description>
        </item>`;
    });

    return `<?xml version="1.0" ?>
    <rss version="2.0">
        <channel>
            <title>/proto - Protocol7's Blog</title>
            <link>https://www.slashproto.com/</link>
            <description>I'm a software developer &amp; web designer in Colorado Springs, Colorado. I like to explore and write about code, video games, technology, and more.</description>
            <language>en</language>
            <lastBuildDate>${latestPostDate.format("ddd, DD MMM YYYY HH:mm:ss ZZ")}</lastBuildDate>
            ${postXml}
        </channel>
    </rss>`;
}

// const posts = getPosts();
// const xml = toRssXML(posts);
const xml = 'test';
fs.writeFileSync("./public/rss.xml", xml);