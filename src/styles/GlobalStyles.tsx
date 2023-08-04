'use client'

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #0f0f0f;
        --white: #f0f0f0;
        --gray: #6a6a6a;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: var(--black);
        color: var(--white);
        max-height: 100vw;
        width: 100%;
    }
`