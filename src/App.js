
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PostsCard from "./components/PostsCard.js";


function App() {
  
  const [posts, getPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);


  const getAllPosts = () => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        const allPosts = res.data;
        getPosts(allPosts);
      })
      .catch(error => console.error(`Error: ${error}`));
  }
  return (
      <PostsCard posts={posts} />
    )
  
  
}


export default App;
