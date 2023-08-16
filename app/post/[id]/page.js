import BlogPost from "@/app/component/blogPost";

export default function Post({ params }) {
    const id = parseInt(params.id);  // post id
    return (
        <div>
            <BlogPost postId={id} />
        </div>
    )
}