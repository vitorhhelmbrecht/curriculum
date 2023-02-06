import React from 'react';
import PropTypes from 'prop-types';
import { HeaderItem, Container } from './styles';

function Header(props) {
  const { children } = props;

  return (
    <Container>
      <HeaderItem>{children}</HeaderItem>
    </Container>
  );
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
