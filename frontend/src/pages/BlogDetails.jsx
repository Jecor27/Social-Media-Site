import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";

export default function BlogDetails() {
  const params = useParams();
  // console.log(params.id)

  const [post, setPost] = useState({})

  async function getPost() {
    try {
      const response = await axios.get(`http://localhost:8080/posts/${params.id}`);
      console.log(response.data);
      setPost(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPost()
  }, [params])

  return (
    <div className='page blog-details'>
      <div className="container">
        <h2>Blog Details</h2>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>Author: {post.author}</p>
      </div>
    </div>
  )
}
