import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap');
    *{
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Montserrat', sans-serif;
    }
`