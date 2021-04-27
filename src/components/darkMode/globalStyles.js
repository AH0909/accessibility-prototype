import { createGlobalStyle} from "styled-components"

// Global style used to style the whole application
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  `
// make the background white and the text black
  export const lightTheme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#FFF',
}

// make the background black and the text white
export const darkTheme = {
    body: '#000000',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
}
