import { Component } from 'react';
import { BeerApiResp } from '../../models/Api.interface';

type SearchResultsProps = {
  searchResult: BeerApiResp[];
  loading: boolean;
};

class SearchResults extends Component<SearchResultsProps> {
  render() {
    const { searchResult } = this.props;
    return (
      <div>
        {searchResult.length === 0 ? (
          <div>No results found</div>
        ) : (
          searchResult.map((searchItem: BeerApiResp) => (
            <div key={searchItem.id}>{searchItem.name}</div>
          ))
        )}
      </div>
    );
  }
}

export default SearchResults;
