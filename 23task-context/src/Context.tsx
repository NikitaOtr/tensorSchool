import { ReactElement, createContext, FC, useContext } from 'react';

type Theme = 'light' | 'dark';

const context = createContext<Theme>('light');

interface IProps {
    theme: Theme;
    children: ReactElement;
}

export const ThemeProvider: FC<IProps> = ({ theme, children }) => {
    return <context.Provider value={theme}>{children}</context.Provider>;
};

export function useTheme(): Theme {
    const theme = useContext(context);
    return theme;
}
