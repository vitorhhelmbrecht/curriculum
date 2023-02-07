import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20vh;
  grid-area: content;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const Section = styled.div`
  margin-left: 25%;
  margin-right: 25%;
  font-size: 1.5em;
  overflow-wrap: anywhere;

  h1 {
    font-size: 3em;
    margin-bottom: 5%;
  }
`;
