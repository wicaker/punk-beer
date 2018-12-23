import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from './paginator/Paginator';

class Favorites extends Component {
  state = {
    posts : [],
    totalPosts: 0,
    postPage: 1,
    postsLoading: true,
  }

  componentDidMount(){
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
    this.loadPosts();
  }

  loadPosts = direction => {
    if (direction) {
      this.setState({ postsLoading: true, posts: [] });
    }
    let page = this.state.postPage;
    if (direction === 'next') {
      page++;
      this.setState({ postPage: page });
    }
    if (direction === 'previous') {
      page--;
      this.setState({ postPage: page });
    }
    fetch('http://localhost:8080/feed/posts?page='+ page)
      .then(res => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch posts.');
        }
        return res.json();
      })
      .then(resData => {
        this.setState({
          posts: resData.posts,
          totalPosts: resData.totalItems,
          postsLoading: false
        });
      })
      .catch(this.catchError);
  };

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
        <Paginator
          onPrevious={this.loadPosts.bind(this, 'previous')}
          onNext={this.loadPosts.bind(this, 'next')}
          lastPage={Math.ceil(this.state.totalPosts / 2)}
          currentPage={this.state.postPage}
        >
        <div className='row'>
            {favoriteBeer}
        </div>
        </Paginator>
    )
  }
}


export default Favorites ;