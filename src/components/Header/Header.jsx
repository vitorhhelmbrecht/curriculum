import { HeaderItem, Container } from './styles';

function Header(props) {
    return (
        <Container>
            <HeaderItem>
                {props.children}
            </HeaderItem>
        </Container>
    )
}

export default Header;