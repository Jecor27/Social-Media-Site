import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogPreview from '../components/BlogPreview'


export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await axios.get("http://localhost:8080/posts");
      // console.log(response);
      setPosts(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='page home'>
      <div className="container flow">
        <h2>All Posts</h2>
        {/* output blogs from DB here */}
        {posts.map(post => (
          <BlogPreview post={post} key={post._id} />
        ))}
      </div>
    </div>
  )
}
