import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import { Home } from './components/Home'
import { Route, Routes } from 'react-router-dom'
import { Curriculum } from './components/Curriculum'

function App() {

  return (
    <>
      <Header />
      <Curriculum />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
