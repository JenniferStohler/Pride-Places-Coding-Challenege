
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ModalPostsComponent from "./ModalPostsComponent";





//Displays all the posts to the page.
export default function PostsCard() {
  const [post, getPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        const allPosts = res.data;
        getPosts(allPosts);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>...Loading...</p>
  }

    

  

 
    
  return (
            //.Map is undefined
            post.map((post, index) => {
              console.log(post);
              return (
                <div className="post" key={index}>
                  <div className="max-w-md rounded overflow-hidden shadow-lg px-5 py-5 bg-white">  
                    <h1 className="post_title"><strong>{post.title}</strong></h1><h2>{post.body}</h2>
                      <div className="px-2 py-2">
                      <ModalPostsComponent />
                      </div>
                  </div>
                </div>
                  
          )
        })
      )
   
}
  
 
