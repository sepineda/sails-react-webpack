import React from 'react';
import { Provider } from 'react-redux';
import LandingPage from '../LandingPage';
import store from '../../store';

const App = () =>
  (
    <Provider store={store}>
      <LandingPage/>
    </Provider>
  );

export default App;
