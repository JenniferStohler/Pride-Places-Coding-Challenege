import React from 'react';
import ModalPostsComponent from "./ModalPostsComponent";





//Displays all the posts to the page.
export default function PostsCard(props) {

  const showPosts = (props) => {
    const intitialPosts = {
      id: null,
      title: "",
      body: ""
    };

    const []
  const { posts } = props;
  

    if (posts.length > 0) {
    
          return (
            posts.map((post, index) => {
              console.log(post);
              return (
                <div className="post" key={index}>
                  <div className="max-w-md rounded overflow-hidden shadow-lg px-5 py-5 bg-white">  
                    <h2 className="post_title"><strong>{post.title}</strong></h2>
                      <div className="px-2 py-2">
                      <ModalPostsComponent />
                      </div>
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








