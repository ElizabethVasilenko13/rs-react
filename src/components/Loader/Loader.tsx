import { Component } from 'react';
import './Loader.scss';

class Loader extends Component {
  render() {
    return (
      <div className="container">
        <div className="mug">
          <div className="beer" />
        </div>
        <div className="bubble" />
        <div className="small-bubbles" />
        <div className="drip" />
        <div className="loader" />
      </div>
    );
  }
}

export default Loader;
