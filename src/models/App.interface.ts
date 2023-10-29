import { BeerApiResp } from './Api.interface';

export interface AppState {
  searchResult: BeerApiResp[];
  loading: boolean;
}
