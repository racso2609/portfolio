interface theme {
    bg: string;
    fg: string;
    bg2: string;
    hover: string;
    active: string;
    unactive: string;
}
const defaultTheme: theme = {
    bg: '#FFFFFF',
    fg: '#00171F',
    bg2: '#F5F5F5',
    hover: '#00A8E8',
    active: '#003459',
    unactive: '#8F8F8F',
};
const darkTheme: theme = {
    bg: '#000F14',
    fg: '#FFFFFF',
    bg2: '#003459',
    hover: '#007EA7',
    active: '#006B8F',
    unactive: '#8F8F8F',
};
export const themes: { default: theme; dark: theme } = {
    default: defaultTheme,
    dark: darkTheme,
};

export const posibleThemes = Object.keys(themes);
