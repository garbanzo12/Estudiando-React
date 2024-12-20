import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function App() {
  return (
    <article>
      <header>
        <img src="https://unavatar.io/microlink/microlink.io" alt="avatar" />
        <div>
          <strong>Nombre del avatar</strong>
          <span>@avatarname</span>
        </div>
      </header>
      <aside>
        <button>
          Seguir
        </button>
      </aside>
    </article>
  )
}

export default App
