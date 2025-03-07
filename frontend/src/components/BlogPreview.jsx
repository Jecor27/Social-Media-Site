import { Link } from "react-router-dom";
import { getRandomColor } from "../functions";

export default function BlogPreview({ post }) {

  return (
    <div 
      className='blog-preview border-radius-1'
      style={{backgroundColor: getRandomColor(), color: getRandomColor()}}
    >
      <h3>{ post.title }</h3>
      <p>{ post.content }</p>
      <p>{ post.author }</p>
      <Link to={`/posts/${post._id}`}>Read more</Link>
    </div>
  )
}
