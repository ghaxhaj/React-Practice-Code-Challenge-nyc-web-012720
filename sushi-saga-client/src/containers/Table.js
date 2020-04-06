import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  const renderMoney = (array) => {
    let money = 20
    let total = array.map(object => {
      return object[0].price}).reduce(function (a,b){return a + b}, 0)
    console.log(total)
    if(money - total < 0){
      console.log("You got no bread left!")
    }else{
    return money - total
  }}

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${renderMoney(props.sushi)} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.sushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table