
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
    <div className="container mx-auto">
      <div className="grid grid-col-3 gap-4">
        <PostsCard posts={posts} />
      </div>
    </div>
    )
  
  
}


export default App;
