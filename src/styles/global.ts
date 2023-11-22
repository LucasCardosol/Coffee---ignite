import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    background: ${(props) => props.theme['background']} no-repeat;
    background-size: cover;
    background-position: center 104px;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 104px;
  }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    width: 95%;
    max-width: 70rem;
    margin: 0 auto;
  }
  h1,h2,h3,h4,h5 {
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
  }
  h1,h2,h3{
    font-weight: bolder;
  }
  h4, h5{
    font-weight: bold;
  }
  h1{
    font-size: 3rem;
  }
  h2{
    font-size: 2rem;
  }
  h3{
    font-size: 1.5rem;
  }
  h4{
    font-size: 1.25rem;
  }
  h5{
    font-size: 1.125rem;
  }

  p{
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }
  .text-l{
    font-size: 1.25rem;
  }
  .text-m{
    font-size: 1rem;
  }
  .text-s{
    font-size: 0.875rem;
    font-weight: 400;
  } 
  .text-xs{
    font-size: 0.75rem;
    font-weight: bold;
  }
  .tag{
    font-size: 0.625rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .button-g{
    font-size: 0.875rem;
    font-weight: bold;
    line-height: 160%;
  }
  .button-m{
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 160%;
  }
  .circle{
    height: 2rem;
    width: 2rem;
    min-width: 2rem;
    border-radius: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`;
