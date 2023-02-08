import PropTypes from 'prop-types';
import React from 'react';
import { Container, MenuItem } from './styles';

function SidebarMenu(props) {
  const { textsWithIds } = props;

  return (
    <Container>
      {Object.keys(textsWithIds).map(key => {
        return (
          <MenuItem
            to={`${key}`}
            spy
            smooth
            offset={-100}
            duration={500}
            key={key}
          >
            {textsWithIds[key]}
          </MenuItem>
        );
      })}
    </Container>
  );
}

SidebarMenu.propTypes = {
  textsWithIds: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string))
    .isRequired,
};

export default SidebarMenu;
