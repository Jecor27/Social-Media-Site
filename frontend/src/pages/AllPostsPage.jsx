// import React from 'react'
// import BlogPost from '../components/BlogPost'

// const dummyPosts = [
//   {
//     id: 1,
//     title: 'My cool new blog',
//     content: 'Blah blah blah blah',
//     author: 'Bob'
//   },
//   {
//     id: 2,
//     title: 'All you need to know about Jesus',
//     content: 'Blah blah blah blah',
//     author: 'Jesus'
//   },
//   {
//     id: 3,
//     title: 'Jamar knows best!',
//     content: 'Blah blah blah blah',
//     author: 'Jamar'
//   },
// ]

// export default function AllPosts() {
//   return (
//     <div>
//       <h2>All Posts</h2>
//       <p>hello</p>
//       {dummyPosts.map(post => (
//         <BlogPost post={post} key={post.id} />
//       ))}
//     </div>
//   )
// }

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
