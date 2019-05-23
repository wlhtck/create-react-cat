import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ImageView extends Component {
  componentWillMount() {
    if (!this.props.src) {
      this.props.loadImage();
    }
  }

  render() {
    const {
      loading, loadImage, makeBadRequest, src, error, type, link, linkText,
    } = this.props;

    return (
      <div className="Cat">
        <header className="Cat-header">
          <div className="cat-container">
            {loading && 'Loading...'}
            {!loading && error}
            {!loading && !error && <img src={src} alt={type} />}
          </div>
          <button className="button" onClick={loadImage}>Load Image</button>
          <button className="button" onClick={makeBadRequest}>Load Image (error)</button>
          <Link to={link}>{linkText}</Link>
        </header>
      </div>
    );
  }
}
