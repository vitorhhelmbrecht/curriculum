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

export const MenuItem = styled.button`
  --border-color: ${props =>
    props.selected
      ? props.theme.selectedMenuItemBorderColor
      : props.theme.menuBorderColor};

  height: 10%;
  justify-content: left;
  align-items: center;
  font-size: ${props => (props.selected ? '1.5em' : '1.2em')};
  margin-left: 2vh;
  border: 0;
  color: ${props => props.theme.text};
  padding-left: 10%;
  text-align: left;

  transition: 500ms ease-out;

  background: linear-gradient(to left, transparent 50%, var(--border-color) 50%)
    right;
  background-size: 300%;

  border-left: 2px solid var(--border-color);

  :hover {
    background-position: left;
    font-size: 1.8em;
    cursor: pointer;
  }
`;
