import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {ThemeProvider} from "@mui/material";
import {mainTheme} from './Themes/MainTheme.tsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <ThemeProvider theme={mainTheme}>
                    <App />
                </ThemeProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
)