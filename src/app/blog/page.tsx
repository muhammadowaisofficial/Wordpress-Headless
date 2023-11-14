import { getPostList } from "../../lib/posts";
import PostList from "../../components/PostList";

export default async function BlogHome({ params }) {

    const initialPosts = await getPostList();

    return (
        <>
            <PostList initialPosts={initialPosts} />
        </>
    );
}