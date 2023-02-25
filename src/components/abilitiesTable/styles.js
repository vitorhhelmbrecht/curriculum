import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  --size: clamp(100px, 10vw, 400px);

  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(var(--size), 1fr));
  grid-auto-rows: var(--size);
`;

export const HexagonImageDiv = styled(motion.div)`
  position: relative;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  height: 100%;
  width: 100%;
  background: ${props => props.theme.menuBorderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms;

  h1 {
    position: absolute;
    opacity: 0;
    z-index: 2;
    font-size: 1.5em;
    transition: 400ms ease-out;
  }

  :hover {
    background: ${props => props.theme.primary};

    img {
      opacity: 0.2;
    }

    h1 {
      opacity: 1;
    }
  }
`;

export const HexagonImage = styled.img`
  width: 95%;
  height: 95%;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  object-fit: cover;
  transition: all 400ms ease;
`;
