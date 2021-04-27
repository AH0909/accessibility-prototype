import { useState } from 'react';

// set the mode of the application to light or dark
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [mountedComponent] = useState(false)
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    return [theme, themeToggler, mountedComponent]
};
