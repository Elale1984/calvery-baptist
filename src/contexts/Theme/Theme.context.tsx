import React, { Dispatch, SetStateAction, ReactNode } from "react";
import { Theme, ThemeType } from "./Theme.model";
import { THEMES } from './Theme.config';

interface ThemesContextProps {
    themeType: ThemeType;
    theme: Theme;
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemesContextProps>({
    themeType: 'light',
    theme: THEMES['light'],
} as ThemesContextProps);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('light');
    return (
        <ThemeContext.Provider value={{
            themeType: currentTheme,
            theme: THEMES[currentTheme],
            setCurrentTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => React.useContext(ThemeContext);
