import React, { Component } from 'react'
import {connect} from "react-redux"; //connect redux store to component
import * as actionCreators from "../../store/actions.js/action" //connect redux store to component
import './Home.css';

class BeerDetails extends Component {
  state = {
    beer : ''
  }
  componentWillMount(e){
    let id = this.props.match.params.id;
    for(let i=0 ; i<this.props.beer.length ; i++ ){
      if(this.props.beer[i].name === id ){
        this.setState({ beer : this.props.beer[i]}) //change state beer value 
      }
      else{
        continue;
      }
    }
  }
  handleClick = (e) => {
    e.preventDefault();
    const post = {
      title: this.state.beer.name,
      content: this.state.beer.description,
      imageUrl: this.state.beer.image_url
    }
    console.log(post);
    this.props.createPost(post);
  }
  render () {
    return (
      <div className='container'>
        <div className="row center">
          <div><h3>{this.state.beer.name}</h3></div>
          <div><img src={this.state.beer.image_url} alt="" height="250" /> </div>
          <div><p>{this.state.beer.description}</p></div>
          <button onClick={this.handleClick}>Add As Favorite</button>
        </div>
      </div>
    )
  }
}

//connect redux store to component
const mapStateToProps=(state)=>{
  return state
};

export default connect (mapStateToProps, actionCreators)(BeerDetails);