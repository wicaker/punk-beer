import React, { Component } from 'react'
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions.js/action"
import './Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  componentWillMount(){
    this.props.loadBeer();
  }
  render () {
    console.log(this.props)
    const beer = this.props.beer;
    const beerList = beer.map(item => {
      return (
        <div className="grid-example col s12 m4" key={item.id}>
          <div className="card horizontal">
            <div className="card-image"><NavLink to={'/beer/'+item.name}>
              <img src={item.image_url} alt="" height="250" width="20"/>
            </NavLink></div>
            <div className="card-stacked">
              <div className="title center"><h5>{item.name}</h5></div>
              <div className="card-content" ><p>{item.description.slice(0,100)}...</p></div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className='row'>
          {beerList}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return state
};

export default connect (mapStateToProps, actionCreators)(Home);