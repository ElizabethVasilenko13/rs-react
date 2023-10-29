import { Component } from 'react';
import { BeerApiResp } from '../../models/Api.interface';
import { SearchResultsProps } from '../../models/SearchResult.interface';
import SearchItem from '../SearchItem/SearchItem';
import styles from './SearchResults.module.scss';

class SearchResults extends Component<SearchResultsProps> {
  render() {
    const { searchResult } = this.props;
    return (
      <div>
        {searchResult.length === 0 || !searchResult ? (
          <h1>Oops, something went wrong...</h1>
        ) : (
          <>
            <h1>Our beer</h1>
            <div className={styles.beerContainer}>
              {searchResult.map((searchItem: BeerApiResp) => (
                <SearchItem key={searchItem.id} beer={searchItem} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default SearchResults;
