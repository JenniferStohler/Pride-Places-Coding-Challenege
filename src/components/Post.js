
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Posts() {
   
  const [loading, setLoading] = useState([]);

  //Goes through all the data and grabs them by their id

   useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(async data => {
      const posts = data.post;
      await Promise.all(posts.forEach(async post => await this.postById(post.id, post)))

      this.setState({
        posts
      });
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);
  
  if (loading) {
    return <p>...Loading...</p>
  }
  postById = async (id, post) => {
    return await fetch('https://jsonplaceholder.typicode.com/posts' + id)
      .then(response => response.json())
      .then(data => {
        post.title = data.title;
        post.body = data.body;
      });
  }

  


  return (
    <div>
      
    </div>
  )
}
