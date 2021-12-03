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
      show: false
    }
  }


  // openModal = () => {
  //   this.setState({ show: true });
  // }


  closeModal = () => {
    this.setState({ show: false });
  }

  updateBeast = (beast) => {
    this.setState({ beastToShow: beast });
    this.setState({show: true});
  }

  render() {
    return (
      <div>
        <Header />
        <Main updateBeast={this.updateBeast} data={data} />
        <SelectedBeast show={this.state.show} beastToShow={this.state.beastToShow} closeModal={this.closeModal} />
        <Footer />
      </div>
    )
  }
}