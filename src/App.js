import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchCat } from  './ducks/cat/actions';
import { getCatUrl, getCatLoading } from './ducks/cat/selectors';

class App extends Component {
  componentWillMount() {
    this.props.onLoadCat();
  }

  render() {
    const { loading, onLoadCat, src } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={src} className="App-logo" alt="logo" />
          <p>
            {loading ? 'Loading cat...' : 'Cat loaded'}
          </p>
          <button onClick={onLoadCat}>Load Cat</button>
        </header>
      </div>
    );
  }
}

export default connect(
  (state) => ({ loading: getCatLoading(state), src: getCatUrl(state) }),
  { onLoadCat: fetchCat }
)(App);
// export default App;
