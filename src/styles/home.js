import styled from "styled-components";

export const HomeContainer = styled.div`
    display: grid;
    grid-template: 'header header header header header header'50vh
                'menu content content content content content' 100vh;
`;

export const RoundFramedImage = styled.img`
    border-radius: 50%;
    height: 70%;
`;

export const VerticalFlexBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5%;
    align-items: left;
    justify-content: center;
    width: 25%;

    h1 {
        font-size: 5em;
        min-width: 200px;
    }

    h2 {
        font-size: 2em;
        color: ${props => props.theme.secondaryText};
    }
`;

export const Fixed = styled.div`
    position: fixed;
    margin: 20px;
    right: 0%;
`;

export const ThemeButton = styled.button`
    width: 4vh;
    height: 4vh;
    background: none;
    border: none;

    cursor: pointer;

    svg {
        height: 100%;
        width: 100%;
        color: ${props => props.theme.iconColor};
    }
`;
