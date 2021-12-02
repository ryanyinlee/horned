
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';
// import data from './data.json';
import InThePopUp from './InThePopUp.js';

export default class PopUp extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleClose = () => {
    this.props.closeModal();
  }

  render() {

    return (

      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {this.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

                      
              <InThePopUp  />
                       
          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    )
  }

}