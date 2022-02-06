import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import App from './components/App/App';
import {Global} from "./styles/global";
import {baseTheme} from "./styles/theme";
import {store} from "./store";

ReactDOM.render(
  <ThemeProvider theme={baseTheme}>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
        <Global/>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
