interface theme {
    bg: string;
    fg: string;
    bg2: string;
  hover: string;
}
const defaultTheme: theme = { bg: 'black', fg: 'white', bg2: 'gray', hover: 'blue' };
export const themes: { default: theme } = { default: defaultTheme };
