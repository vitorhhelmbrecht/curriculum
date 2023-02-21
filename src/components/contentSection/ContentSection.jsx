import PropTypes from 'prop-types';
import Section from './styles';
import AnimatedInViewContainer from '../animatedInViewContainer/AnimatedInViewContainer';

function ContentSection(props) {
  const { children, id, animationDuration } = props;

  const controlsDefinition = {
    x: '0vw',
    transition: {
      type: 'spring',
      duration: animationDuration,
      bounce: 0.3,
      delayChildren: 2,
    },
  };

  return (
    <Section id={id}>
      <AnimatedInViewContainer
        controlsDefinition={controlsDefinition}
        initialPosition={{ x: '-50vw' }}
      >
        {children}
      </AnimatedInViewContainer>
    </Section>
  );
}

ContentSection.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  animationDuration: PropTypes.number,
};

ContentSection.defaultProps = {
  animationDuration: 2,
};

export default ContentSection;
