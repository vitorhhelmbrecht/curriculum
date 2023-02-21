import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  width: 25vh;
`;

export const MenuItem = styled(Link)`
  --border-color: ${props => props.theme.menuBorderColor};
  --border-selected-color: ${props => props.theme.selectedMenuItemBorderColor};

  display: flex;
  height: 10%;
  font-size: 1.5em;
  margin-left: 2vh;
  color: ${props => props.theme.text};
  padding-left: 10%;
  align-items: center;
  justify-content: left;

  transition: 500ms ease-out;

  background: linear-gradient(to left, transparent 50%, var(--border-color) 50%)
    right;
  background-size: 300%;

  border-left: 5px solid var(--border-color);

  &.active {
    transition: 50ms ease-out;
    background-position: left;
    font-size: 2em;
    border-color: var(--border-selected-color);
  }

  :hover {
    background-position: left;
    font-size: 1.8em;
    cursor: pointer;
  }

  &.active:hover {
    font-size: 2em;
  }
`;
