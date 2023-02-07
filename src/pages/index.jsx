import React from 'react';
import PropTypes from 'prop-types';
import { VscGithubInverted } from 'react-icons/vsc';
import { MdOutlineMail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
// import Header from '../components/header/Header';
import SidebarMenu from '../components/sidebarMenu/SidebarMenu';

import {
  ThemeButton,
  Fixed,
  HomeContainer,
  RoundFramedImage,
  VerticalFlexBox,
  ContactLinks,
  Header,
} from '../styles/home';
import Content from '../components/content/Content';

function Home(props) {
  const { toggleTheme, themeIcon } = props;

  return (
    <HomeContainer>
      <Fixed>
        <ThemeButton onClick={toggleTheme}>{themeIcon}</ThemeButton>
      </Fixed>
      <SidebarMenu />
      <Header>
        <RoundFramedImage src="/myPhoto.jpg" />
        <VerticalFlexBox>
          <h1>Hello, I&apos;m Vitor,</h1>
          <h2>a software engineer.</h2>
          <ContactLinks>
            <a
              href="https://github.com/vitorhhelmbrecht"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithubInverted />
            </a>
            <a
              href="mailto:vitorhhelmbrecht@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineMail />
            </a>
            <a
              href="https://www.linkedin.com/in/vitorhhelmbrecht/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </ContactLinks>
        </VerticalFlexBox>
      </Header>
      <Content />
    </HomeContainer>
  );
}

Home.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  themeIcon: PropTypes.element.isRequired,
};

export default Home;
