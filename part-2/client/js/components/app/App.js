import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Navbar from './../navbar/Navbar';
import AdminPage from './../admin/AdminPage';
import store from '../../store';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#37474F',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
});

const App = () =>
  (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
      <Router>
        <div>
          <Route exact path="/" component={Navbar} />
          <Route path="/admin" component={AdminPage} />
        </div>
      </Router>
      </MuiThemeProvider>
    </Provider>
  );

export default App;
