import { createGlobalStyle } from "styled-components/macro";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        padding: 0;
    }

    body,
    html {
    cursor: pointer;
    width: 100%;
    }

    body {
    background-color: #212121;
    }

    a,
    a:link,
    a:hover,
    a:visited {
    text-decoration: none;
    }

    ul,
    ol,
    li {
    list-style: none;
    }

`;
