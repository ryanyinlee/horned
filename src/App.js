import React, { Component } from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beastToShow: {},
      showModal: false
    }
  }


  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  updateBeast = (beast) => {
    this.setState({beastToShow: beast});
    this.openModal();
  }

  render() {
    return (
      <div>
        <Header />
        <Main updateBeast={this.updateBeast} data={data} />
        <SelectedBeast showModal={this.state.showModal} beastToShow={this.state.beastToShow} closeModal={this.state.showModal} />
        <Footer />
      </div>
    )
  }
}