import React, { useEffect, useState } from 'react'

const Posts = () => {

    const[posts,setPosts] = useState([]) 

    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then((data)=>data.json())
        .then((data)=>setPosts(data))
        .catch((err)=>console.log(err))
    },[])

  return (
    <div className='d-flex justify-content-center'>
        {
            posts.length >0 ?
            (
                <div className=''>
                    {posts.map((post)=>(
                      <div className='my-3' key={post.id}>
                        <div className='d-flex'>
                            <img className='dp rounded-circle' src={post.user.profile_pic} alt=""  />
                        <h5>{post.user.username}</h5>
                        </div>
                        <img className='img' src={post.image} alt=""/>
                      <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                      </div>
                      <div>
                        <b>{post.likes} Likes</b>
                      </div>
                      <div>
                        {post.caption}
                      </div>
                      </div>  
                    ))}
                </div>
            ) :
            (
                <div>Loading posts</div>
            )
        }
    </div>
  )
}

export default Posts