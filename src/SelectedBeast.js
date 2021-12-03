import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';



export default class SelectedBeast extends Component {

  render() {
        return (
      
      <Modal show={this.props.show} onHide={this.props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beastToShow.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card >
            <Card.Img src={this.props.beastToShow.image_url} alt={this.props.beastToShow.description} />
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={this.props.closeModal} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    )
  }

}


