
import React, { useState } from 'react';
import Modal from 'react-modal';



//Displays all the posts to the page.
export default function PostsCard(props) {
  const [showModal, setShowModal] = useState(false);
  const showPosts = (props) => {
    const { posts } = props;

    if (posts.length > 0) {
    
          return (
            posts.map((post, index) => {
              console.log(post);
              return (
                <div className="post" key={index}>
                  <div className="max-w-md rounded overflow-hidden shadow-lg px-5 py-5 bg-white">  
                    <h3 className="post_title">{post.title}</h3>
                    <p className="post_body">{post.body}</p>
                    <button onClick={() => setShowModal(true)} className="btn px-2 py-2 rounded bg-green-400 text-white">
                      Click Here to Open Modal
                    </button>
                     <Modal isOpen={showModal}
                        onRequestClose={() => setShowModal(false)}
                        ariaHideApp={false}
                      contentLabel="Selected Option"
                    >
                      {post.body}
                      <button className="btn px-2 py-2 rounded bg-red-400 text-white" onClick={() => setShowModal(false)}>Close Modal</button>
                      </Modal>
                  
                  </div>
                </div>
                  
          )
        })
      )
    } else {
      return (<h3>No posts to show</h3>)
    }
  }
  return (
    <>
    { showPosts(props) }
    </>
  )
}








