import { API_ENDPOINT, API_URL, NAME_QUERY } from '../constants/apiConstants';

export const fetchSearchResults = async (searchTerm: string) => {
  try {
    const nameQuery = searchTerm
      ? `${NAME_QUERY}${searchTerm.toLowerCase()}`
      : '';
    const apiCallStr = `${API_URL}${API_ENDPOINT}${nameQuery}`;
    const response = await fetch(apiCallStr);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  } finally {
    await new Promise((resolve) => setTimeout(resolve, 700));
  }
};
