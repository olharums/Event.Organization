import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
  &.modal-open {
    padding: 0 !important;
    }
  font-family: 'Playfair Display', serif;
  background:
    linear-gradient(217deg, rgba(255,0,0,.6), rgba(255,0,0,0) 70.71%),
    linear-gradient(127deg, rgba(0,255,0,.6), rgba(0,255,0,0) 70.71%),
    linear-gradient(336deg, rgba(0,0,255,.6), rgba(0,0,255,0) 70.71%);
  transition: all 3s ease-out;  
  }
`;

export default GlobalStyle;
