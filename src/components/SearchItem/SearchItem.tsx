import { Component } from 'react';
import beerImage from '../../assets/beer.png';
import { SearchItemProps } from '../../models/SearchItem.interface';
import styles from './SearchItem.module.scss';

class SearchItem extends Component<SearchItemProps> {
  render() {
    const { beer } = this.props;

    return (
      <div className={styles.beerCard}>
        <img src={beerImage} alt="" width={40} />
        <div className={styles.beerInfo}>
          <h3>{beer.name.toUpperCase()}</h3>
          <p>
            {beer.tagline} | {beer.abv}% ABV | {beer.abv}% ABV |
          </p>
        </div>
      </div>
    );
  }
}

export default SearchItem;
