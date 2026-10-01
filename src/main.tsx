import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './Home'
import { Privacy } from './Privacy'

const onPrivacy = window.location.pathname.replace(/\/+$/, '').endsWith('/privacy')

createRoot(document.getElementById('root')!).render(
  <StrictMode>{onPrivacy ? <Privacy /> : <Home />}</StrictMode>,
)
