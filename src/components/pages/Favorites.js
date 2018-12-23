import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Favorites extends Component {
  state = {
    posts : []
  }

  componentWillMount(){
    fetch('http://localhost:8080/feed/posts')
    .then(res => {
      if(res.status !== 200){
        throw new Error('Failed to fetch status');
      }
      return res.json();
    })
    .then(resData => {
      this.setState({
        posts : resData.posts
      });
    })
    .catch(err=> console.log(err));
  }

  handleDelete = (postId) => {
    fetch('http://localhost:8080/feed/post/' + postId, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Deleting a post failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState(prevState => {
          const updatedPosts = prevState.posts.filter(p => p._id !== postId);
          return { posts: updatedPosts};
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render () {
    const { posts } = this.state;
    const favoriteBeer = posts.length ? (
      posts.map(post => {
        return (
          <div className="grid-example col s12 m4" key={post._id}>
            <div className="card horizontal">
              <div className="card-image">
                <img src={post.imageUrl} alt="" height="250" width="20"/>
              </div>
              <div className="card-stacked">
                <div className="title center"><NavLink to={'/beer/'+post.title}><h5>{post.title}</h5></NavLink></div>
                <div className="card-content" ><p>{post.content}</p></div>
                <div className='center'><button id='123' onClick={this.handleDelete.bind(this,post._id)}>Delete</button></div>
              </div>
            </div>
          </div>
        )
      })
    ) : (<div className='center'>No Favorite Beer</div>)
    return (
      <div className='row'>
          {favoriteBeer}
      </div>
    )
  }
}


export default Favorites ;