export interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

export interface SearchBarState {
  searchQuery: string;
}
