import React, { Component } from 'react';
import Loader from 'react-loader-spinner'
import './App.css';
import { connect } from 'react-redux';
import { fetchCat, fetchCatError } from  './ducks/cat/actions';
import { getCatUrl, getCatLoading, getCatError } from './ducks/cat/selectors';

class App extends Component {
  componentWillMount() {
    this.props.onLoadCat();
  }

  render() {
    const { loading, onLoadCat, makeBadRequest, src, error } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <div className="cat-container">
            {loading && <Loader type="Hearts" color="#FFC0CB" height={500} width={500} />}
            {!loading && error}
            {!loading && !error && <img src={src} alt="cat" />}
          </div>
          <button className="button" onClick={onLoadCat}>Load Cat</button>
          <button className="button" onClick={makeBadRequest}>Load Cat (error)</button>
        </header>
      </div>
    );
  }
}

export default connect(
  (state) => ({ loading: getCatLoading(state), src: getCatUrl(state), error: getCatError(state) }),
  { onLoadCat: fetchCat, makeBadRequest: fetchCatError }
)(App);
