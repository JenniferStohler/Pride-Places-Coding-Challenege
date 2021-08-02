
import React from 'react';
import ModalPostsComponent from "./ModalPostsComponent";





//Displays all the posts to the page.
export default function PostsCard(props) {


    const intialPosts = {
      id: null,
      title: "",
      body: ""
    };

    
  const { posts } = props;
  

 
    
          return (
            posts.map((post, index) => {
              console.log(post);
              return (
                <div className="post" key={index}>
                  <div className="max-w-md rounded overflow-hidden shadow-lg px-5 py-5 bg-white">  
                    <h1 className="post_title"><strong>{post.title}</strong></h1>
                      <div className="px-2 py-2">
                      <ModalPostsComponent />
                      </div>
                  </div>
                </div>
                  
          )
        })
      )
   
}
  
 
