import { useState } from "react";
//test
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Title:", title);
    console.log("Content:", content);
    
    // Reset form after submission 
    setTitle("");
    setContent("");
  };

  return (
    <div className="blog-form">
      <form onSubmit={handleSubmit} className="flow">
        <div>
          <label>Title:</label>
          <input
            type="text"
            placeholder="A clickbait title goes here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            placeholder="Are you really sure about this?"
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Make it public</button>
      </form>
    </div>
  );
};

export default CreatePost;