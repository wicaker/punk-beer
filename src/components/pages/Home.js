import React, { Component } from 'react'

class Home extends Component {
  constructor(props){
    super(props);
    this.state ={
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=10')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }
  render () {
    var { isLoaded, items} = this.state;
    if(!isLoaded){
      return <div>Loading</div>
    }
    else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )
    }
  }
}

export default Home;