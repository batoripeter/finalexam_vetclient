import { makeServer } from './api/api'
makeServer({ environment: 'development' })

import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
})

export default app
