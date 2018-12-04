import React, { Component } from 'react'
import {connect} from "react-redux";
import * as actionCreators from "../../store/actions.js/action"
import './Home.css';

class Home extends Component {
  componentDidMount(){
    window.addEventListener('load', this.props.loadBeer);
  }
  render () {
    const beer = this.props.beer;
    const beerList = beer.map(item => {
      return (
        <div className="grid-example col s12 m4" key={item.id}>
          <div className="card horizontal">
            <div className="card-image">
              <img src={item.image_url} alt="" height="320" width="20"/>
            </div>
            <div className="card-stacked">
              <div className="title center">{item.name}</div>
              <div className="card-content">{item.description}</div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className="row">
          {beerList}
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return state
};

export default connect (mapStateToProps, actionCreators)(Home);