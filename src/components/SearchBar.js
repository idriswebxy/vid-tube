import React from "react";
import './SearchBar.css'



class SearchBar extends React.Component {

  state = {
    searchTerm: ""
  };


  onInputChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <h1>VidTube</h1>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
              placeholder="Search Here..."
            />
          </div> 
        </form>
      </div>

    );
  }
}

export default SearchBar;
