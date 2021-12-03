import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import data from './data.json';
// import InThePopUp from './InThePopUp.js';


export default class SelectedBeast extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  openModal = () => {
    this.setState({ showModal: true })
}

closeModal = () => {
    this.setState({ showModal: false })
}


  handleClose = () => {
    this.closeModal();
  }

  render() {

    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton >
            <Modal.Title> {this.props.beastToShow.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card >
              <Card.Img variant="top" src={this.props.beastToShow.image_url} alt={this.props.beastToShow.description} />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  {this.props.beastToShow.description}
                 </Card.Text>
              </Card.Body>
            </Card>
         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }

}