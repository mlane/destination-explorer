import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { Normalize } from 'styled-normalize'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Normalize />
    <App />
  </StrictMode>
)
