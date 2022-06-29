const contentful = require("contentful");

// const client = contentful.createClient({
//     space: process.env.SPACE_ID,
//     accessToken: process.env.CONTENTFUL_DELIVERY
// })

function client(){
    return contentful.createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY
    })
}

export async function postsBanner(){
    const dataModel = [
        'sys.id','fields.title', 'fields.url', 'fields.excerpt', 'fields.imagePost'
        , 'sys.createdAt', 'metadata.tags'
    ];

    const response = await client().getEntries({
        content_type : "blogPost",
        select : dataModel.join(',')
    });

    return response 
}


