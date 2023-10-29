import React, { Component } from 'react';
import {
  SearchBarProps,
  SearchBarState,
} from '../../models/SearchBar.interface';
import styles from './SearcBar.module.scss';

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state = {
    searchQuery: localStorage.getItem('searchQuery') || '',
    isError: false,
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

  handleError = () => {
    this.setState({ isError: true });
  };

  render() {
    const { searchQuery, isError } = this.state;
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
        <button
          onClick={this.handleError}
          type="button"
          className={styles.buttonError}
        >
          Show Error
        </button>
        {isError &&
          (() => {
            throw new Error('I crashed!');
          })()}
      </div>
    );
  }
}

export default SearchBar;
