import styled from 'styled-components';
import image from '../../../public/headerImage.png';

export const Container = styled.div`
    background-color: ${props => props.theme.headerBackground};
    height: 100%;
    color: var(--primary-text);
    grid-area: header;
`;

export const HeaderItem = styled.div`
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 5%;
    margin: 0;
    align-items: center;
    height: 100%;
`;