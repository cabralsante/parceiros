import { createGlobalStyle } from "styled-components";
import Conthrax from "../assets/fonts/conthrax-sb.otf"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Conthrax';
        src: url(${Conthrax}) format('opentype');
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-family: 'Conthrax';
    }
`