import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthContextProvider } from './context/authContext.jsx';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='87906786693-bsq02a5amh03nuoipejnnr2j4sdhs23t.apps.googleusercontent.com'>
    <React.StrictMode>
      <BrowserRouter>
        <NextThemesProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </NextThemesProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
)
