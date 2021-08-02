import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import PostsCard from "./PostsCard";





class ModalPostsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
       
          body: ''
        
      },
      users: [],
      catchPhrase: "",
      isOpen: false
    }
  }
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  
  insertPost() {
    fetch('https://jsonplaceholder.typicode.com', {
      method: 'GET',
      header: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(this.state)
    })
  
  }
  render() {
    return (
      <div>
        <>
          <Button variant="success" onClick={this.openModal}>
            Open Modal
          </Button>
  
          <Modal show={this.state.isOpen}>
            <Modal.Header closeButton onClick={this.closeModal}>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <PostsCard title={this.state.post.title} key={this.state.post.id} body={this.state.post.body} /> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    )
  }
}
export default ModalPostsComponent;
