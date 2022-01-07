import React from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import AppBar from "./components/appBar";

const theme = createTheme({
    palette: {
        primary: {
            main: '#9e9e9e',
        },
        secondary: {
            main: '#880e4f',
            alt: '#81d4fa',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        text: {
            primary: "#000000",
            secondary: "#545454",
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

function App() {
    return(
        <ThemeProvider theme={theme} >
            <AppBar/>
        </ThemeProvider>
    );
}

export default App;