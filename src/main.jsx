import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './src/theme-practice.css'
import Exercise from './Exercise'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exercise />
  </StrictMode>,
)
