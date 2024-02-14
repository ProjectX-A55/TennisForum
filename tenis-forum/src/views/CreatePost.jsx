import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { addPost } from "../services/post-service";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const { userData } = useContext(AppContext);
    const [post, setPost] = useState({
        title: '',
        content: '',
    });

    const navigate = useNavigate();

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

        await addPost(userData.username, post.title, post.content, post.topic);

        setPost({
            title: '',
            content: ''
        });
        navigate('/posts');
    };

    return (
        
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-gray rounded-md shadow-md ring-2 ring-white lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-white">Create a post</h1>
                <div>
                    <label htmlFor="input-title">Title: </label>
                    <input placeholder="Title" className="w-full input input-bordered" value={post.title} onChange={e => updatePost(e.target.value, 'title')} type="text" name="input-title" id="username" />
                </div>
                <br />
                <div>
                    <label htmlFor="input-topic">Topic</label>
                    <select className="select select-bordered w-full" value={post.topic} onChange={e => updatePost(e.target.value, 'topic')}>
                        <option value="General Discussions" selected="selected">General Discussions</option>
                        <option value="Live Matches">Live Matches</option>
                        <option value="Men's Tennis">Men's Tennis</option>
                        <option value="Women's Tennis">Women's Tennis</option>
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="input-content">Content:</label>
                    <br />
                    <textarea placeholder="Content" className="textarea textarea-bordered textarea-sm w-full" value={post.content} onChange={e => updatePost(e.target.value, 'content')} name="input-content" id="input-content" cols="30" rows="10"></textarea>
                </div>
                <br />
                <div>
                    <button className="btn btn-primary w-full" onClick={createPost} type="primary">Create post</button>
                </div>
            </div>
        </div>
    );
};


export default CreatePost;