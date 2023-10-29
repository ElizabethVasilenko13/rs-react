import { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchSearchResults } from './services/fetchApi';
import SearchResults from './components/SearchResults/SearchResults';
import { AppState } from './models/App.interface';
import Loader from './components/Loader/Loader';

class App extends Component<Record<string, unknown>, AppState> {
  state: AppState = {
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
      <div className="app-container">
        <SearchBar onSearch={this.handleSearch} />
        {loading ? <Loader /> : <SearchResults searchResult={searchResult} />}
      </div>
    );
  }
}

export default App;
