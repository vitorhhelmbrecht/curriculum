import Header from '../components/Header/Header';
import { ThemeButton, Fixed, HomeContainer, RoundFramedImage, VerticalFlexBox } from '../styles/home';

const Home = props => {
    return (
        <HomeContainer>
            <Fixed>
                <ThemeButton onClick={props.toggleTheme}>
                    {props.themeIcon}
                </ThemeButton>
            </Fixed>
            <Header>
                <RoundFramedImage src='./myPhoto.jpg' />
                <VerticalFlexBox>
                    <h1>Hello, I'm Vitor,</h1>
                    <h2>a software engineer.</h2>
                </VerticalFlexBox>
            </Header>
        </HomeContainer>
    )
}

export default Home;
