import React from 'react';


export default function PostsCard(props) {
  const showPosts = (props) => {
    const { posts } = props;

    if (posts.length > 0) {
      return (
        posts.map((post) => {
          console.log(post);
          return (
            <div className="post" key={post._id}>
              <h3 className="post_title" key={post.title}>{post.title}</h3>
              <p className="Post_body" key={post.body}>{post.body}</p>
            </div>
          )
        })
      )
    } else {
      return (<h3>No posts to show</h3>)
    }
  }
  return (
    <>
    { showPosts(props) }
    </>
  )
}








