import { useState } from "react";
import { getRandomColor } from "../functions";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const postData = {
        title,
        content,
        author: "toon anything"
    };
  
    try {
        const response = await fetch("http://localhost:8080/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
  
        if (!response.ok) {
            throw new Error('Error creating post');
        }
  
        const data = await response.json();
        // console.log('Post created:', data);
        navigate(`/posts/${data._id}`)

    } catch (error) {
        console.error('Error creating post:', error);
    }
  };

  return (
    <div className="blog-form">
      <form onSubmit={handleSubmit} className="create-blog flow" >
          <label>Title:</label>
          <input
            type="text"
            placeholder="A clickbait title goes here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label>Content:</label>
          <textarea
            value={content}
            placeholder="Are you really sure about this?"
            onChange={(e) => setContent(e.target.value)}
            required
          />

        <button
          type="submit"
          style={{backgroundColor: getRandomColor(), color: getRandomColor()}}
         >Make it public</button>
      </form>
    </div>
  );
};

export default CreatePost;


