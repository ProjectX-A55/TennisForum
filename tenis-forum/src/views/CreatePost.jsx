import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { addPost } from "../services/post-service";
import { Button, Flex } from 'antd';

const CreatePost = () => {

    const { userData } = useContext(AppContext);
    const [post, setPost] = useState({
        title: '',
        content: '',
    });

    const updatePost = (value, key) => {
        setPost({ ...post, [key]: value });
    }
    //TODO: Fix the condition for the title and content
    const createPost = async () => {
        if (post.title.length < 16 || post.title.length > 64) {
            alert('Title must be between 16 and 64 characters');
            return;
        }
        if (post.content.length < 32 || post.content.length > 8192) {
            alert('Content must be between 32 and 8192 characters');
            return;
        }

        await addPost(userData.username, post.title, post.content);

        setPost({
            title: '',
            content: ''
        });

    };

    return (
        <div>
            <h1>Create Post</h1>
            <label htmlFor="input-title">Title</label>
            <input value={post.title} onChange={e => updatePost(e.target.value, 'title')} type="text" name="input-title" id="input-title" /><br />
            <label htmlFor="input-content">Content:</label><br />
            <textarea value={post.content} onChange={e => updatePost(e.target.value, 'content')} name="input-content" id="input-content" cols="30" rows="10"></textarea><br /><br />
            <Flex>
                <Button onClick={createPost} type="primary">Create post</Button>
            </Flex>
        </div>
    );
};


export default CreatePost;