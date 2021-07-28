import React, { useState, useEffect } from 'react';


function App() {

  //useState 
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([])
    ;
  //Call to the API and fetch posts, then console.log the response to see if you've successfully retrie ved the posts from the API.

  const getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data[1].title)
        console.log(data)
    });
  }

  const getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        setUser(data[0].company.name)
        console.log(data)
      });
  }

  //Make a card for the posts to show up on.

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <button onClick={getPost}>Get Post</button>
      {post}
      <button onClick={getUser}>Get User</button>
      {user}
    </div>
  );
}

export default App;
