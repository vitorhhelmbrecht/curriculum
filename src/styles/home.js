import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  grid-template:
    'header' 50vh
    'content' 1fr;
`;

export const Header = styled.div`
  background-color: ${props => props.theme.headerBackground};
  grid-area: header;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;
  margin: 0;
  align-items: center;
  height: 100%;
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

export const ContactLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10%;
  margin-top: 5%;
  width: 80%;

  a {
    height: 100%;
    svg {
      transition: 100ms ease-out;
      height: 100%;
      width: 100%;
      opacity: 0.4;
      color: ${props => props.theme.text};

      :hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
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
    transition: 100ms ease-out;
    height: 100%;
    width: 100%;
    opacity: 0.4;
    color: ${props => props.theme.text};

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;
