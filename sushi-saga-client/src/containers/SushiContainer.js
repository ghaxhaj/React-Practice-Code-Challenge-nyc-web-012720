import React, { Fragment } from 'react'
import Sushi from "../components/Sushi"
import MoreButton from '../components/MoreButton'

class SushiContainer extends React.Component{

  state = {
    firstLimit: 0,
    lastLimit: 4
  }

  renderSushi = () => {
    if(this.props.sushi.length > 0){
      var fourSushi = this.props.sushi.slice(this.state.firstLimit,this.state.lastLimit)
      return fourSushi.map(sushi => {
        if(this.props.eatenSushi.filter(s => s.id === sushi.id).length > 0){
          return <Sushi key={sushi.id} className = "eaten" {...sushi} />
        }else{
        return <Sushi key={sushi.id} className = "uneaten" handleClick = {this.props.handleClick} {...sushi} />
      }})
    }
  }

  onLoadMore = () => {
    this.setState({
      firstLimit: this.state.firstLimit + 4,
      lastLimit: this.state.lastLimit + 4
    })
  }

  render(){

  return (
    <Fragment>
      <div className="belt">
        {
          this.renderSushi()
        }
        <MoreButton handleClick = {this.onLoadMore}/>
      </div>
    </Fragment>
  )}
}

export default SushiContainer