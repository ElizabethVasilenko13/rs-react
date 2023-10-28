import { API_ENDPOINT, API_URL, NAME_QUERY } from '../constants/apiConstants';

export const fetchSearchResults = async (searchTerm: string) => {
  const nameQuery = searchTerm
    ? `${NAME_QUERY}${searchTerm.toLowerCase()}`
    : '';
  const apiCallStr = `${API_URL}${API_ENDPOINT}${nameQuery}`;
  const response = await fetch(apiCallStr);
  const data = await response.json();
  return data;
};
