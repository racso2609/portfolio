import { useAtom } from 'jotai';
import { FC } from 'react';
import { Switch } from '../styled/inputs';
import { themeAtom } from '../../state/theme';
import { Container } from '../styled/containers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

const ThemeSelector: FC = () => {
    const [selectedTheme, setTheme] = useAtom(themeAtom);
    const isDark = selectedTheme === 'dark';
    const handleTheme = () => {
        const theme = isDark ? 'light' : 'dark';
        setTheme(theme);
    };

    return (
        <Container>
            <Switch margin="auto" onClick={handleTheme} isActive={isDark}>
                <div className="icon">
                    {!isDark ? (
                        <FontAwesomeIcon icon={faMoon} />
                    ) : (
                        <FontAwesomeIcon icon={faSun} />
                    )}
                </div>
            </Switch>
        </Container>
    );
};

export default ThemeSelector;
