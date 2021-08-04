
import React from 'react';

import PostsCard from "./components/PostsCard.js";
// import Users from "./components/Users.js";
import Modal from "react-modal";
import ModalPostsComponent from "./components/ModalPostsComponent";


Modal.setAppElement('#root')
function App()   {
  
  
  // const [loading, setLoading] = useState(false);
//   const [users, getUsers] = useState([]);
//   const [showModal, setShowModal] = useState(false);

  

//   function toggleModal() {
//     setShowModal(!showModal);
//   }

//   //useEffect is a hook that performs effects in the function component.

  

//   useEffect(() => {
//     getAllUsers();
//   }, []);

// //Gets all the posts from the API.
 
  

// //Gets all the users from the API.
//   const getAllUsers = () => {
//     Axios.get('https://jsonplaceholder.typicode.com/users')
//       .then((res) => {
//         const allUsers = res.data;
//         getUsers(allUsers);
//       })
//       .catch(error => console.error(`Error: ${error}`));
//   }
  


  return (
    <div className="container mx-auto text-center">
      <div className="grid grid-col-3 gap-4 justify-center">
          <PostsCard />
        <ModalPostsComponent />
      </div>
      </div>
  )
  
  
}


export default App;