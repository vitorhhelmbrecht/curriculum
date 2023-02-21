import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled(motion.div)`
  margin-top: 10vh;
  margin-bottom: 10vh;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  font-size: 1.5em;
  overflow-wrap: anywhere;

  h1 {
    font-size: 3em;
    margin-bottom: 5%;
  }
`;

export default Section;
