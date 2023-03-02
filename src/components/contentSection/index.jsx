import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Section from './styles';

function ContentSection(props) {
  const { children, id } = props;

  const item = {
    hidden: { x: '-50vw' },
    visible: {
      x: 0,
    },
  };

  return (
    <Section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        transition={{
          duration: 2,
          type: 'spring',
          bounce: 0.3,
          delayChildren: 2,
        }}
        variants={item}
      >
        {children}
      </motion.div>
    </Section>
  );
}

ContentSection.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContentSection;
