import {createContext, useEffect, useState} from "react";
import { Color } from '../../models/color.model';

const themes = {
    dark: {
        backgroundColor: Color.BLUEDIANNE,
        color: Color.WHITE,
    },
    light: {
        backgroundColor: Color.WHITE,
        color: Color.BLACK,
    }
}
export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? themes.dark : themes.light;
    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark));
        setIsDark(!isDark);
    }

    useEffect(() => {
        const isDark = localStorage.getItem('isDark') === "true";
        setIsDark(isDark);
    }, []);
    return(
        <ThemeContext.Provider value={[{theme, isDark}, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};