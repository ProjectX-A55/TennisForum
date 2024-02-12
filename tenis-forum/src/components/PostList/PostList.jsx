import './PostList.css'
import { PostListItem } from '../PostListItem/PostListItem'

export function PostList({ posts }) {
    return (
    <div className="post-list">
        {posts.map((post) => <PostListItem post={post}/>)}
    </div>
    )
}