import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {

  //useState 
  const [post, setPost] = useState("");

  //Use Axios to call to the API and fetch posts, then console.log the response to see if you've successfully retrie ved the posts from the API.

  const getPost = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
    })
  }

  //Make a card for the posts to show up on.

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <button onClick={getPost}>Get Post</button>
    </div>
  );
}

export default App;
