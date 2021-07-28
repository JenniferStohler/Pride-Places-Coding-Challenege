import React, { useState, useEffect } from 'react';
import PostsCard from "./components/PostsCard";


function App() {

  //useState 
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
    
  //Call to the API and fetch posts, then console.log the response to see if you've successfully retrieved the posts from the API.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, []);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">

    </div>
  )
}


export default App;
