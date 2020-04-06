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
    let clickedSushi = [...this.state.clickedSushi]
    let tester = clickedSushi.filter(sushi => sushi.id === id)
    let sushi = [...this.state.sushis]
    let selectedSushi = sushi.filter(sushi => sushi.id === id)
    if(tester.length > 0){
      console.log("You already Ate this Sushi")
    }else{
    this.setState({clickedSushi: [...this.state.clickedSushi, selectedSushi]})
  }}


  render() {
    console.log(this.state.clickedSushi)
    return (
      <div className="app">
        <SushiContainer sushi = {this.state.sushis} handleClick = {this.getClickedSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;