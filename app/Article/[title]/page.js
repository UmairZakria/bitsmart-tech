import Main from "../components/main";

async function getPostData(title) {
    try {
        // Fetch post data
        const resPost = await fetch(`http://localhost:3000/api/blogpost?id=${title}`);
        const post = await resPost.json();
        
        // Fetch related posts (optional)
        const resRelated = await fetch(`http://localhost:3000/api/blogpost`, );
        const data = await resRelated.json();

        return { post:post.blog ,data: data.blogs };
    } catch (err) {
        console.error("Error fetching post data:", err);
        return { post: null, data: [] };
    }
}
export async function generateMetadata({ params }) {
    const { title } = await params;

    const { post } = await getPostData(title);

    if (!post) {
        return {
            title: "404 - Not Found",
            description: "The requested article was not found.",
        };
    }

    return {
        title: post.title,
        description: post.discription,
        keywords: post.keywords, 
            
        openGraph: {
            title: post.title,
            description: post.description,
            url: `http://localhost:3000/Article/${post.slug}`, // Canonical URL
            images: [
                {
                    url: post.image, 
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        icons: {
            icon: "/favicon.ico", // Path to your favicon
        },
    };
}

export default async function Page({ params }) {
    const { title } = await params; // Access dynamic route parameter

    // Fetch data during server-side rendering
    const {  post, data } = await getPostData(title);

    // Handle not-found case
    if (!post) {
        return <h1>404 - Post Not Found</h1>;
    }

    return (
        <>
            <Main post={post} data={data} slug={title} />
        </>
    );
}
