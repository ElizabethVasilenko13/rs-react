import React, { Component } from 'react';
import {
  SearchBarProps,
  SearchBarState,
} from '../../models/SearchBar.interface';

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state = {
    searchQuery: localStorage.getItem('searchQuery') || '',
  };

  handleInput = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: value });
  };

  handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { searchQuery } = this.state;
    localStorage.setItem('searchQuery', searchQuery.trim());
    this.props.onSearch(searchQuery.trim());
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={this.handleInput}
          />
          <button onClick={this.handleSearch} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
