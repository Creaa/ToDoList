import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/toDoListReducer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const store = createStore(rootReducer);
const theme = createMuiTheme({});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);