import React from 'react'

export default function BlogPost({ post }) {
  return (
    <div>
      <h3>{ post.title }</h3>
      <p>{ post.content }</p>
      <p>{ post.author }</p>
    </div>
  )
}
