import { useAtom } from 'jotai';
import { FC } from 'react';
import { themeAtom } from '../../state/theme';
import { posibleThemes } from '../../utils/themes';
import { Container } from '../styled/containers';

const ThemeSelector: FC = () => {
    const [selectedTheme, setTheme] = useAtom(themeAtom);
    return (
        <Container>
            <select
                id="theme-selector"
                name="theme-selector"
                value={selectedTheme}
                onChange={(e) => {
                    setTheme(e.target.value);
                }}
            >
                {posibleThemes.map((theme, index) => {
                    return (
                        <option key={theme + index} value={theme}>
                            {theme}
                        </option>
                    );
                })}
            </select>
        </Container>
    );
};

export default ThemeSelector;
