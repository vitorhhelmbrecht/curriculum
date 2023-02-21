import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
  grid-auto-rows: 15vh;
  grid-auto-flow: dense;
`;

export const Item = styled(motion.div)`
  grid-column: span ${props => props.widthSpan ?? 1};
  grid-row: span ${props => props.heightSpan ?? 1};

  transition: all 300ms ease;

  position: relative;

  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: 1.6em;
    color: white;
    position: absolute;
    opacity: 0;
    transition: 400ms ease-out;
    margin: auto;
  }

  span {
    magin-top: -0.2em;
  }

  img {
    object-fit: cover;
    transition: all 400ms ease;
  }

  &.fill img {
    object-fit: fill;
  }

  :hover {
    cursor: pointer;
  }

  :hover img {
    opacity: 0.3;
  }

  :hover h1 {
    opacity: 1;
    z-index: 1;
  }
`;
