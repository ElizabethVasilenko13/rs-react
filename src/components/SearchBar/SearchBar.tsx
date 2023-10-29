import React, { Component } from 'react';
import {
  SearchBarProps,
  SearchBarState,
} from '../../models/SearchBar.interface';
import styles from './SearcBar.module.scss';

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
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={this.handleInput}
          />
          <button
            onClick={this.handleSearch}
            type="submit"
            className={styles.button}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
