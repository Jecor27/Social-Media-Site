import React from 'react'
import BlogPost from '../components/BlogPost'

const dummyPosts = [
  {
    id: 1,
    title: 'My cool new blog',
    content: 'Blah blah blah blah',
    author: 'Bob'
  },
  {
    id: 2,
    title: 'All you need to know about Jesus',
    content: 'Blah blah blah blah',
    author: 'Jesus'
  },  
  {
    id: 3,
    title: 'Jamar knows best!',
    content: 'Blah blah blah blah',
    author: 'Jamar'
  },
]

export default function AllPosts() {
  return (
    <div>
      <h2>All Posts</h2>
      <p>hello</p>
      {dummyPosts.map(post => (
        <BlogPost post={post} key={post.id} />
      ))}
    </div>
  )
}
