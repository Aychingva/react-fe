import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getPosts } from '../services/post'

function Post() {
    const {id}=useParams()
    const [post,setPost]=useState({})
    useEffect(()=>{
        getPosts(id)
        .then(data=>setPost(data))
        .catch(err=>console.log(err))

    
    },[id])


    if (!post) {
        return <div>Loading...</div>;
    }
    return (
        <div className="max-w-3xl  mt-8 mx-auto p-6  bg-green-500 rounded-lg shadow-md">
          <div className="mb-6 ">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4"> Title:{post.title}</h2>
            <p className="text-lg text-gray-700">Body:{post.body}</p>
          </div>
        </div>
      );
      
}
export default Post