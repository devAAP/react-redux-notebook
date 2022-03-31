import React from 'react'
import Navbar from './components/Navbar'
import AddNote from './components/AddNote'
import NoteList from './components/NoteList'
import './App.css'

const App = () => {
  
  return (
    <div className="app">
      <Navbar/>
      <div className="note-section">
        <AddNote/>
        <NoteList/>
      </div>
    </div>
  )
}

export default App
