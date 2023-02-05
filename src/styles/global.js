import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
    }

    ::-webkit-scrollbar {
        width: 9px;
    }
    
    ::-webkit-scrollbar-track {
        display: none;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: rgba(155, 155, 155, 0.5);
        border-radius: 20px;
        border: transparent;
    }

    body {
        background: ${props => props.theme.primary};
        color: ${props => props.theme.text};
        font-size: 14px;
        font-family: sans-serif;
        overflow: overlay;

        transition: background 500ms ease-in-out, color 1000ms ease-in-out;
    }
`;