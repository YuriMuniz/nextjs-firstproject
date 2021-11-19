import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus{
        outline:0;
    }

    body{
        background: #0D0F12;
        color: #FFF;
        font-family:'Noto Sans', Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
    }
`;