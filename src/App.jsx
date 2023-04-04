import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './components/Form'
import Lista from './components/Lista'

function App() {

  return (
    <div className="container">
      <Formulario />
      <Lista/>
    </div>
  )
}

export default App
