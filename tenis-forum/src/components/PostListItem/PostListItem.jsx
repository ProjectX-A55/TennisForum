import './PostListItem.css'
import { Flex, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HighlightOutlined, PlayCircleOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons'

export function PostListItem({ post }) {
    const iconFunc = (topic) => {
        console.log(topic)
        switch(topic){
        case "General Discussions":
            return <HighlightOutlined />
        case "Live Matches":
            return <PlayCircleOutlined />
        case "Men's Tennis":
            return <ManOutlined />
        case "Women's Tennis":
            return <WomanOutlined />
        default:
            return <HighlightOutlined />
        }
    }
    const navigate = useNavigate();
    const summary = post.content.length <= 64 ? post.content : `${post.content.substr(0,64)}…`

    return (
        <div className="post-list-item" onClick={() => navigate(`/posts/${post.id}`)}>
            <div className="post-list-item-icon">{iconFunc(post.topic)}</div>
            <div className="post-list-item-main">
                <h3 className="post-item-title">{post.title}</h3>
                <h5 className="post-item-summary">{summary}</h5>
            </div>
            <div className="post-list-item-meta">
                <h3 className="posted-by">{`Posted by: ${post.author}`}</h3>
                <h5 className='posted-on'>{`Posted on: ${post.createdOn}`}</h5>
            </div>
        </div>
    )
} 
