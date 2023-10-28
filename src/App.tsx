import { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchSearchResults } from './services/fetchApi';
import SearchResults from './components/SearchResults/SearchResults';
import { BeerApiResp } from './models/Api.interface';

type State = {
  searchResult: BeerApiResp[];
  loading: boolean;
};

class App extends Component<Record<string, unknown>, State> {
  state: State = {
    searchResult: [],
    loading: true,
  };

  componentDidMount() {
    const searchQuery = localStorage.getItem('searchQuery') || '';
    this.fetchSearchResultsAndUpdateState(searchQuery);
  }

  handleSearch = (searchQuery: string) => {
    this.setState({ loading: true });
    this.fetchSearchResultsAndUpdateState(searchQuery);
  };

  fetchSearchResultsAndUpdateState = (searchQuery: string) => {
    fetchSearchResults(searchQuery).then((data) => {
      this.setState({ searchResult: data, loading: false });
    });
  };

  render() {
    const { searchResult, loading } = this.state;
    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        <SearchResults searchResult={searchResult} loading={loading} />
      </div>
    );
  }
}

export default App;
