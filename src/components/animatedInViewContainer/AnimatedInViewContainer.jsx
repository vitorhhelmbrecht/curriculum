import { useAnimation, useInView, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function AnimatedInViewContainer(props) {
  const { children, initialPosition, controlsDefinition, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animation = useAnimation();

  useEffect(() => {
    if (!isInView) {
      return;
    }

    animation.start(controlsDefinition);
  }, [animation, controlsDefinition, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={animation}
      initial={initialPosition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

AnimatedInViewContainer.propTypes = {
  children: PropTypes.node.isRequired,
  initialPosition: PropTypes.objectOf(PropTypes.number),
};

AnimatedInViewContainer.defaultProps = {
  initialPosition: { x: 0, y: 0 },
};

export default AnimatedInViewContainer;
