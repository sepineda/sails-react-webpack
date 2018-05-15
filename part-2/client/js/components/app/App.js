import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from '../LandingPage';
import store from '../../store';

const App = () =>
  (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
        </div>
      </Router>
    </Provider>
  );

export default App;
