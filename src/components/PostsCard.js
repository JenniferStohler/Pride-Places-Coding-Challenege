import React from 'react';


//Displays all the posts to the page.
export default function PostsCard(props) {
  const showPosts = (props) => {
    const { posts } = props;

    if (posts.length > 0) {
      return (
        posts.map((post) => {
          console.log(post);
          return (

            //Card creation here.
          <div className="max-w-md rounded overflow-hidden shadow-lg px-5 py-5 bg-white">
            <div className="post" key={post._id}>
                <h3 className="post_title" key={post.title}>
                  <strong>{post.title}</strong>
                </h3>
              <p className="Post_body" key={post.body}>{post.body}</p>
              </div>
           <button className="btn px-2 py-2 rounded bg-green-400 text-white">Click Here to Open Modal</button>
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








