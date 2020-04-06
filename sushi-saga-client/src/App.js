import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: {sushis: []},
    clickedSushi: []
  }

  componentDidMount(){
    fetch(`${API}`)
    .then(resp => resp.json())
    .then(data => this.setState({sushis: data}))
  }

  getClickedSushi = (id) => {

    let sushi = [...this.state.sushis]
    let selectedSushi = sushi.filter(sushi => sushi.id === id)
    this.setState({clickedSushi: [...this.state.clickedSushi, selectedSushi]})
  }


  render() {
    console.log(this.state.clickedSushi)
    return (
      <div className="app">
        <SushiContainer sushi = {this.state.sushis} handleClick = {this.getClickedSushi}/>
        <Table sushi = {this.state.clickedSushi} />
      </div>
    );
  }
}

export default App;