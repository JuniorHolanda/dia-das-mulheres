'use cliet';

import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    html,
    body {
        max-width: 100vw;
        overflow-x: hidden;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style-type: none;
    }

    button {
        border: none;
    }
`

export default GlobalStyle;