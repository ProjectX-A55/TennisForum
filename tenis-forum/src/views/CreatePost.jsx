import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { addPost } from "../services/post-service";
import { useNavigate } from "react-router-dom";
import TagsInput from "../components/TagsInput/TagsInput";

const CreatePost = () => {
    const { userData } = useContext(AppContext);
    const [post, setPost] = useState({
        title: '',
        content: '',
        tags: [],
    });

    const navigate = useNavigate();

    const updatePost = (value, key) => {
        setPost({ ...post, [key]: value });
    }

    const updateTags = (selectedOptions) => {
        updatePost(selectedOptions || [], 'tags');
    }

    const createPost = async () => {
        if (post.title.length < 16 || post.title.length > 64) {
            alert('Title must be between 16 and 64 characters');
            return;
        }
        if (post.content.length < 32 || post.content.length > 8192) {
            alert('Content must be between 32 and 8192 characters');
            return;
        }

        if (post.tags.length === 0) {
            alert('You must select at least one tag');
            return;
        }

        let tags = post.tags.length > 0 ? post.tags.map(tag => tag.value) : [];

        await addPost(userData.username, post.title, post.content, post.topic, tags);

        setPost({
            title: '',
            content: '',
            tags: []
        });
        navigate('/posts');
    };


    return (
        <>
            {userData.isBlocked ? 
            <h1 className="shadow shadow-2xl box rounded-md flex flex-row  border border-amber-950 text-wrap ml-7 mr-7 mt-7 mb-7">{`You can't create a new post because you are banned. Sorry not sorry. Hasta la vista, baby.`} </h1 > 
                :
                <div className="relative w-full flex flex-col  justify-center mt-12">
                    <div className="w-full p-6 m-auto bg-gray rounded-md shadow-2xl ring-2 ring-white lg:max-w-xl" style={{ borderColor: '#654321' }}>
                        <h1 className="text-3xl font-semibold text-center">Create a post</h1>
                        <div>
                            <label htmlFor="input-title">Title: </label>
                            <input placeholder="Title" className="w-full input input-bordered" value={post.title} onChange={e => updatePost(e.target.value, 'title')} type="text" name="input-title" id="username" />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="input-topic">Topic</label>
                            <select className="select select-bordered w-full" value={post.topic} onChange={e => updatePost(e.target.value, 'topic')}>
                                <option value="General Discussions">{`General Discussions`}</option>
                                <option value="Live Matches">{`Live Matches`}</option>
                                <option value="Men's Tennis">{`Men's Tennis`}</option>
                                <option value="Women's Tennis">{`Women's Tennis`}</option>
                            </select>
                        </div><br />
                        <div>
                            <TagsInput updateTags={updateTags} alreadySelectedTags={post.tags} />
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
                </div>}
        </>
    );
};

export default CreatePost;
