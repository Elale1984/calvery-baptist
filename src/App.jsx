import './App.css';
import Home from "./pages/Home";
import React, {useContext} from "react";
import {ThemeContext} from "./contexts/Theme/Theme";
import Switch from "./components/Toggle";
import {Button} from "@mui/material";

const App = () => {
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContext);
    console.log(theme);
    return (
        <div className="App" style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
            <Home />
            <Switch checked={isDark} onChange={toggleTheme} inputProps={{ 'aria-label': 'controlled' }} />
            <Button onClick={toggleTheme}>Switch</Button>
            <div className="text">{isDark ? 'Dark' : 'Light'}</div>
        </div>
    );
};

export default App;