import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: {sushis: []},
    clickedSushi: [], 
    money: 25
  }

  componentDidMount(){
    fetch(`${API}`)
    .then(resp => resp.json())
    .then(data => this.setState({sushis: data}))
  }

  getClickedSushi = (id) => {

    let sushi = [...this.state.sushis]
    let selectedSushi = sushi.filter(sushi => sushi.id === id)
    console.log(selectedSushi[0].price)
    if(this.state.money-selectedSushi[0].price < 0){
      console.log("You got no bread!")
    }else{
    this.setState({
      money: parseInt(this.state.money - selectedSushi[0].price),
      clickedSushi: [...this.state.clickedSushi, selectedSushi]})
    }
  }


  render() {
    console.log(this.state.clickedSushi)
    return (
      <div className="app">
        <SushiContainer sushi = {this.state.sushis} handleClick = {this.getClickedSushi}/>
        <Table sushi = {this.state.clickedSushi} money = {this.state.money} />
      </div>
    );
  }
}

export default App;