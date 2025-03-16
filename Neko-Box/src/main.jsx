import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import NekoContextProvider from './ContextProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <NekoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NekoContextProvider>
  </StrictMode>,
)
