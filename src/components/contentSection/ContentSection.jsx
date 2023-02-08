import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Section from './styles';

function ContentSection(props) {
  const { children, id } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (!isInView) {
      return;
    }

    animation.start({
      x: '0vw',
      transition: {
        type: 'spring',
        duration: 2,
        bounce: 0.3,
      },
    });
  }, [animation, isInView]);

  return (
    <Section id={id} ref={ref} animate={animation} initial={{ x: '-50vw' }}>
      {children}
    </Section>
  );
}

ContentSection.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContentSection;
