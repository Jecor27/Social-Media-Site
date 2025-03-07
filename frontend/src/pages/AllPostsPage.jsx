import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogPost from "../components/BlogPost";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await axios.get("http://localhost:8080/posts");
      console.log(response);
      setPosts(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  );
}
export default AllPosts;
