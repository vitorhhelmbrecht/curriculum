import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsGrid = styled(motion.div)`
  --item-size: minmax(max(100px, 10vw), 1fr);
  --hexagon-clip-path: polygon(
    25% 0%,
    75% 0%,
    100% 50%,
    75% 100%,
    25% 100%,
    0 50%
  );

  width: 100%;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, var(--item-size));
  grid-auto-rows: var(--item-size);
`;

export const HexagonImageDiv = styled(motion.div)`
  position: relative;
  clip-path: var(--hexagon-clip-path);
  height: 100%;
  width: 100%;
  background: ${props => props.theme.menuBorderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms;

  span {
    position: absolute;
    opacity: 0;
    z-index: 2;
    font-size: clamp(1rem, 1.5vw, 3rem);
    transition: 400ms ease-out;
    cursor: default;
  }

  :hover {
    background: ${props => props.theme.primary};

    img {
      opacity: 0.2;
    }

    span {
      opacity: 1;
    }
  }
`;

export const HexagonImage = styled.img`
  width: 95%;
  height: 95%;
  clip-path: var(--hexagon-clip-path);
  object-fit: cover;
  transition: all 400ms ease;
`;
