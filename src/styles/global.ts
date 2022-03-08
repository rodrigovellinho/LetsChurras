import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FFD836;  
        --btn-login: #000000; 
        --text: #fff;
        --card-background: #fff;
        --card--addchurras: #F1F1F1;
        --border-bottom: #E5C231;
        --list-person: rgba(0, 0, 0, 0.8);
        --bottom-background:  #fff;
        --bottom-border: #998220;
        --delete-btn: #d9534f;
        --new-participant-btn: #5cb85c;
        --new-churras-btn:  #FFD836;
        --return-btn: #FFD836;
        --churras-card: #000000;
        --radio-btn: #FFD836;
        --error-message: #d9534f;
        --btn-border: #998220;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
     
        -webkit-font-smoothing: antialiased; 
        
    }

    body, input, textarea, button {
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }
    

`;
