import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
   html {
        box-sizing: border-box;
        background-color: ${({ theme }) => theme.colors.whisper};
    };

    *, ::after, ::before {
        box-sizing: inherit;
    };

    #root {
        font-family: 'Poppins', sans-serif;
    };
`;