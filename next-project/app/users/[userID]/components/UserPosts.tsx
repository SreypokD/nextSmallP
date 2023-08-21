type Props ={
    promise: Promise<Post[]>
}
import React from 'react'

export default async function UserPosts ({promise} : Props) {
  const posts = await promise
  const content = posts.map(post =>{
    return (
      <>
      <p key={post.id}></p>
      <h1>{post.title}</h1>
      <p style={{color:"blue"}}>{post.body}</p>
      </>
    )
  })
  return content
}

