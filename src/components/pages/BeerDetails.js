import React, { Component } from 'react'
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions.js/action"
import './Home.css';

class BeerDetails extends Component {
  render () {
    let id = this.props.match.params.id;
    let beer = [];
    console.log(beer);
    for(let i=0 ; i<this.props.beer.length ; i++ ){
      if(this.props.beer[i].name === id ){
        beer.push(this.props.beer[i]);
      }
      else{
        continue;
      }
    }
    const beerList = beer.map(item => {
      return (
        <div className="row center" key={item.id}>
          <div><h3>{item.name}</h3></div>
          <div><img src={item.image_url} alt="" height="250" /> </div>
          <div><p>{item.description}</p></div>
        </div>
      )
    })
    return (
      <div className='container'>
       {beerList}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return state
};

export default connect (mapStateToProps, actionCreators)(BeerDetails);