import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import SidebarMenu from '../components/sidebarMenu/SidebarMenu';

import {
  ThemeButton,
  Fixed,
  HomeContainer,
  RoundFramedImage,
  VerticalFlexBox,
} from '../styles/home';

function Home(props) {
  const { toggleTheme, themeIcon } = props;

  return (
    <HomeContainer>
      <Fixed>
        <ThemeButton onClick={toggleTheme}>{themeIcon}</ThemeButton>
      </Fixed>
      <Header>
        <RoundFramedImage src="/myPhoto.jpg" />
        <VerticalFlexBox>
          <h1>Hello, I&apos;m Vitor,</h1>
          <h2>a software engineer.</h2>
        </VerticalFlexBox>
      </Header>
      <SidebarMenu />
    </HomeContainer>
  );
}

Home.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  themeIcon: PropTypes.element.isRequired,
};

export default Home;
