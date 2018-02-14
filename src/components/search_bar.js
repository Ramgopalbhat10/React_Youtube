import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <p><span className="youtube">YouTube</span> - Lite</p> 
        <input type="text" className="form-control"
          value={this.state.term} 
          onChange={event => this.setState({ term: event.target.value })}/>
      </div> 
    );
  }
}

export default SearchBar;