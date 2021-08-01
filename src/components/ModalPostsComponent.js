import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";




class ModalPostsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      posts: {
        body: ""
      },
      user: {
        catchPhrase: ""
      }
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
              <div name="post" value={this.state.post}></div>
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
