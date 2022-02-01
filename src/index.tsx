import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {Global} from "./styles/global";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "./styles/theme";
import {Provider} from "react-redux";
import {store} from "./store";

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
        <Global/>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
