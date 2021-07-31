
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PostsCard from "./components/PostsCard.js";
import Users from "./components/Users.js";
import Modal from "react-modal";


Modal.setAppElement('#root')
function App()   {
  
  const [posts, getPosts] = useState([]);
  const [users, getUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

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
    <div className="container mx-auto text-center">
      <div className="grid grid-col-3 gap-4 justify-center">
        <button onClick={toggleModal}>
          <PostsCard key={posts.id} posts={posts} /></button>
            <Modal
              isOpen={showModal}
              onRequestClose={toggleModal}
              contentLabel="posts"
        >
              <button onClick={toggleModal} className="bg-red-400 rounded px-2 py-2 text-white">Close Modal</button>
            </Modal>
        <Users key={users.id} users={users} />
      </div>
    </div>
    )
  
  
}


export default App;
