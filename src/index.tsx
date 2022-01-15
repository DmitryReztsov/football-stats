import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {Global} from "./styles/global";
import {ThemeProvider} from "styled-components";
import {lightTheme} from "./styles/theme";

ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
            <App/>
            <Global/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);
