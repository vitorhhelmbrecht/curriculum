import { ThemeProvider } from 'styled-components';
import Home from '.';
import GlobalStyle from '../styles/global';
import usePersistentState from '../utils/usePersistentState';
import { CgSun, CgMoon } from 'react-icons/cg';
import { HiMoon, HiSun } from 'react-icons/hi';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

const App = () => {
    const [theme, setTheme] = usePersistentState('theme', 'dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    
    const getThemeIcon = () => {
        return theme === 'dark' ? <HiMoon/>: <HiSun/>;
    }

    return (
        <ThemeProvider theme={theme === 'dark' ? dark : light}>
            <Home toggleTheme={toggleTheme} themeIcon={getThemeIcon()}/>
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App;