import React from 'react';





//Displays all the posts to the page.
export default function PostsCard(props) {

  const showPosts = (props) => {
  const { posts } = props;
  

    if (posts.length > 0) {
    
          return (
            posts.map((post, index) => {
              console.log(post);
              return (
                <div className="post" key={index}>
                  <div className="max-w-md rounded overflow-hidden shadow-lg px-5 py-5 bg-white">  
                    <h3 className="post_title">{post.title}</h3>
                      <p className="post_body">{post.body}</p>
                        
                  
                  </div>
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








