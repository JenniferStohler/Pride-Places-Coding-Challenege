
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PostsCard from "./components/PostsCard.js";
import Users from "./components/Users.js";


function App() {
  
  const [posts, getPosts] = useState([]);
  const [users, getUsers] = useState([]);

  //useEffect is a hook that performs effects in the function component.

  useEffect(() => {
    getAllPosts();
  }, []);

  useEffect(() => {
    getAllUsers();
  }, []);

//Gets all the posts from the API.
  const getAllPosts = () => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        const allPosts = res.data;
        getPosts(allPosts);
      })
      .catch(error => console.error(`Error: ${error}`));
  }

//Gets all the users from the API.
  const getAllUsers = () => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const allUsers = res.data;
        getUsers(allUsers);
      })
      .catch(error => console.error(`Error: ${error}`));
  }
  return (
    <div className="container mx-auto text-center bg-gray-300">
      <div className="grid grid-col-3 gap-4 justify-center">
        <PostsCard posts={posts} />
        <Users users={users} />
      </div>
    </div>
    )
  
  
}


export default App;
