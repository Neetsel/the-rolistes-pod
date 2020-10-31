
const fs = require ('fs');
var axios = require('axios');
// const xmlData = require('./src/assets/therolistespodcast.xml');

const getPosts = () => {        
    
    fs.readFile('./src/assets/therolistespodcast.xml', function(err, data){
        console.log();
        let xml2js = require('xml2js');
        let parser = new xml2js.Parser();
        
        const fetchedPosts = [];
        const fetchedPodcast = [];

        parser.parseString(
            data,
            (err,result) => {

                for (let key in result["rss"]["channel"][0]["item"]) {                           
                    
                    fetchedPosts.push({
                        ...result["rss"]["channel"][0]["item"][key],
                        id:key
                    });
                                            
                    const currentDate = new Date();
                    const publishDate = new Date(fetchedPosts[key]["pubDate"][0]);       

                    fetchedPosts[key]["pubDate"][0] = publishDate.toDateString();;

                    let str= fetchedPosts[key]["content:encoded"][0];
                    let newStr= str.replace(/\[audio/,'<audio controls');
                    newStr= newStr.replace(/mp3\"\]/,'mp3"></audio><br>');
                    
                    fetchedPosts[key]["content:encoded"][0] = newStr;                        
                    
                    if(fetchedPosts[key]["category"] && (
                        fetchedPosts[key]["wp:status"][0] === "publish" || (
                            fetchedPosts[key]["wp:status"][0] === "draft" && currentDate.getTime() > publishDate.getTime()
                            )
                        )
                    ){

                        for (let i=0; i < fetchedPosts[key]["category"].length; i++) {
                            
                            switch(fetchedPosts[key]["category"][i]["$"]["nicename"]){

                                case "podcast": 
                                    fetchedPodcast.push({
                                    title:fetchedPosts[key],
                                    link:fetchedPosts[key],
                                    pubDate:fetchedPosts[key],
                                    guid:fetchedPosts[key],                                    
                                    description:fetchedPosts[key],
                                    id:key                                                
                                    });

                                    break;
                            }
                        }                                    
                    }                            
                }

                fetchedPosts.reverse();
                fetchedPodcast.reverse();
                console.log("fgfd");                
                return fetchedPodcast;                                 
            }
           
        )
    }) 
}

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
            <description>kjioji</description>
            <language>en</language>
            <lastBuildDate>${latestPostDate.format("ddd, DD MMM YYYY HH:mm:ss ZZ")}</lastBuildDate>
            ${postXml}
        </channel>
    </rss>`;
}

const posts = getPosts();
// const xml = toRssXML(posts);
const xml = 'test';
fs.writeFileSync("./public/rss.xml", xml);
