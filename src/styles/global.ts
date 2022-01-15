import { createGlobalStyle } from "styled-components"
import {lightTheme} from "./theme";


export const Global = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        border: 0;
    }
    
    *,
    *::before,
    *::after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    :focus,
    :active {
        outline: none;
    }
    
    a:focus,
    a:active {
        outline: none;
    }
    
    nav,
    footer,
    header,
    aside,
    section {
        display: block;
    }
    
    html,
    body {
        height: 100%;
        width: 100%;
        font-size: 16px;
        line-height: 1;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        font-family: 'Roboto', sans-serif;
        background-color: ${lightTheme.colors.bg};
        color: ${lightTheme.colors.black}
    }
    
    input,
    button,
    textarea {
        font-family: 'Roboto', sans-serif;
    }
    
    input::-ms-clear {
        display: none;
    }
    
    button {
        cursor: pointer;
    }
    
    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }
    
    a,
    a:visited {
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: none;
    }
    
    ul li {
        list-style: none;
    }
    
    img {
        vertical-align: top;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: 400;
    }
`