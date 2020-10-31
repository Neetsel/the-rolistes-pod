
const fs = require ('fs');
var axios = require('axios');
// const xmlData = require('./src/assets/therolistespodcast.xml');

function toRssXML(posts) {    
    // console.log(posts); 

    const latestPostDate = new Date(posts[0]["pubDate"], "MM/DD/YYYY"); 
    let postXml = "";

    posts.forEach((post) => {
        const date = new Date(post.pubDate, "MM/DD/YYYY");
        // const href = `https://www.slashproto.com/posts/${post.slug}`;
        const href = `https://www.slashproto.com/posts/`;
        postXml += `
        <item>
            <title>${post.title}</title>
            <link>${href}</link>
            <pubDate>${post.pubDate}</pubDate>
            <guid>${href}</guid>
            <description>
            &lt;![CDATA[ ${post.description} ]]&gt;
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
            <lastBuildDate>${latestPostDate}</lastBuildDate>
            ${postXml}
        </channel>
    </rss>`;
}

function getPosts () {    
    
    const fetchedPosts = [];
    const fetchedPodcast = [];
    
    fs.readFile('./src/assets/therolistespodcast.xml', function(err, data){
        let xml2js = require('xml2js');
        let parser = new xml2js.Parser();            

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
                            
                            console.log(i);

                            switch(fetchedPosts[key]["category"][i]["$"]["nicename"]){

                                case "podcast": 
                                    fetchedPodcast.push({
                                    title:fetchedPosts[key]["title"],
                                    link:fetchedPosts[key]["title"],
                                    pubDate:fetchedPosts[key]["pubDate"][0],
                                    guid:fetchedPosts[key]["title"],                                    
                                    description:fetchedPosts[key]["title"],
                                    id:key                                                
                                    });

                                    break;
                            }
                        }                                    
                    }                            
                }

                fetchedPosts.reverse();
                fetchedPodcast.reverse();
                // console.log(fetchedPodcast); 

                const xml = toRssXML(fetchedPodcast);
                // const xml = 'test';
                fs.writeFileSync("./public/rss.xml", xml);                                                                            
            }
           
        )
    }) 
    console.log(fetchedPodcast);

    // console.log('test');
    // console.log(posts);
    
 
}

const posts = getPosts();
// console.log('test');
// console.log(posts);
// const xml = toRssXML(posts);
// const xml = 'test';
// fs.writeFileSync("./public/rss.xml", xml);
 

