import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
  const params = useParams();
  console.log(params.id)

  const [blog, setBlog] = useState({})

  useEffect(() => {
    // fetch blog by id here
    // setBlog(the fetched blog)

  }, [params])



  return (
    <div className='page blog-details'>
      <div className="container">
        <h2>Blog Details</h2>
        {/* output blog details here... */}
      </div>
    </div>
  )
}
